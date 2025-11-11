// app/updates/[id]/ShareButton.tsx
"use client";

import { Share2, Check, Copy, X } from "lucide-react";
import { useState, useEffect } from "react";

interface ShareButtonProps {
  title: string;
  description: string;
  className?: string;
  variant?: "icon" | "full";
}

export default function ShareButton({ 
  title, 
  description, 
  className = "",
  variant = "full" 
}: ShareButtonProps) {
  const [copied, setCopied] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [canShare, setCanShare] = useState(false);
  const [currentUrl, setCurrentUrl] = useState("");

  // Initialize on client side only
  useEffect(() => {
    setCurrentUrl(window.location.href);
    
    // Check if Web Share API is available
    if (typeof navigator.share === "function") {
      setCanShare(true);
    }
  }, []);

  const handleShare = async () => {
    const shareData = {
      title: title,
      text: description.substring(0, 100) + (description.length > 100 ? "..." : ""),
      url: currentUrl,
    };

    try {
      // Try Web Share API first (mobile devices)
      if (canShare && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        
        // Show success toast
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } else {
        // Fallback to clipboard
        await copyToClipboard();
      }
    } catch (error) {
      // Handle errors
      if (error instanceof Error) {
        // User cancelled the share dialog
        if (error.name === "AbortError") {
          console.log("Share cancelled by user");
          return;
        }
        
        // Other errors - try clipboard fallback
        console.error("Share error:", error);
        await copyToClipboard();
      }
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setShowToast(true);

      // Reset after 2 seconds
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (error) {
      console.error("Clipboard error:", error);
      
      // Final fallback - create temporary input
      fallbackCopy();
    }
  };

  // Fallback copy method for older browsers
  const fallbackCopy = () => {
    const tempInput = document.createElement("input");
    tempInput.value = currentUrl;
    document.body.appendChild(tempInput);
    tempInput.select();
    
    try {
      document.execCommand("copy");
      setCopied(true);
      setShowToast(true);
      
      setTimeout(() => {
        setCopied(false);
        setShowToast(false);
      }, 2000);
    } catch (error) {
      console.error("Fallback copy failed:", error);
    } finally {
      document.body.removeChild(tempInput);
    }
  };

  // Icon variant - Just the icon button
  if (variant === "icon") {
    return (
      <div className="relative inline-block">
        <button 
          onClick={handleShare}
          disabled={!currentUrl}
          className={`p-3 bg-white text-gray-700 rounded-xl hover:bg-blue-50 hover:text-blue-600 transition-all shadow-sm border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
          title={canShare ? "Share this update" : "Copy link"}
          aria-label={canShare ? "Share this update" : "Copy link to clipboard"}
        >
          {copied ? (
            <Check size={20} className="text-green-600" />
          ) : (
            <Share2 size={20} />
          )}
        </button>
        
        {/* Toast Notification */}
        {showToast && (
          <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2 duration-200">
            <div className="px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap flex items-center gap-2">
              <Check size={14} className="text-green-400" />
              {copied ? "Link copied!" : "Shared successfully!"}
            </div>
          </div>
        )}
      </div>
    );
  }

  // Full variant - Button with text
  return (
    <div className="relative inline-block">
      <button 
        onClick={handleShare}
        disabled={!currentUrl}
        className={`flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-all group disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
        aria-label={canShare ? "Share this update" : "Copy link to clipboard"}
      >
        {copied ? (
          <>
            <Check size={18} className="text-green-600 group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium text-green-600 hidden sm:inline">
              Copied!
            </span>
          </>
        ) : (
          <>
            <Share2 size={18} className="group-hover:scale-110 transition-transform" />
            <span className="text-sm font-medium hidden sm:inline">
              {canShare ? "Share" : "Copy Link"}
            </span>
          </>
        )}
      </button>

      {/* Toast Notification */}
      {showToast && (
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 animate-in fade-in slide-in-from-bottom-2 duration-200 z-50">
          <div className="px-4 py-2 bg-gray-900 text-white text-xs font-medium rounded-lg shadow-lg whitespace-nowrap flex items-center gap-2">
            <Check size={14} className="text-green-400" />
            {copied ? "Link copied to clipboard!" : "Shared successfully!"}
          </div>
        </div>
      )}
    </div>
  );
}