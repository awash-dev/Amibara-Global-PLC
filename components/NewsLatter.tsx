"use client";
import React, { useState } from "react";
import { Mail, Send, Bell } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubscribed(true);
    setIsSubmitting(false);
    setEmail("");
  };

  if (isSubscribed) {
    return (
      <div className="mt-16 text-center">
        <div className="relative inline-block p-12 bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl border border-emerald-200 shadow-2xl shadow-emerald-500/20 backdrop-blur-sm overflow-hidden">
          {/* Background Animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-green-500/5 animate-pulse"></div>
          
          {/* Success Content */}
          <div className="relative z-10">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center shadow-2xl shadow-emerald-500/30 animate-bounce">
                <Bell className="w-8 h-8 text-white" />
              </div>
            </div>
            
            <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-green-800 bg-clip-text text-transparent mb-3">
              Welcome Aboard! 🎉
            </h3>
            <p className="text-emerald-700/80 text-lg mb-2 font-medium">
              You&apos;re successfully subscribed
            </p>
            <p className="text-emerald-600/70 text-sm">
              Get ready for exclusive updates and insights
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-16 text-center">
      <div className="relative inline-block p-12 bg-gradient-to-br from-white to-blue-50 rounded-3xl border border-blue-200/60 shadow-2xl shadow-blue-100/30 backdrop-blur-sm overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500/5 rounded-full -translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full translate-x-12 translate-y-12"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-purple-500/3 rounded-full"></div>
        
        {/* Main Content */}
        <div className="relative z-10">
          {/* Icon */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-purple-500/30 rotate-12">
                <Mail className="w-7 h-7 text-white -rotate-12" />
              </div>
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full border-4 border-white animate-pulse"></div>
            </div>
          </div>
          
          {/* Text Content */}
          <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 bg-clip-text text-transparent mb-3">
            Stay in the Loop
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-sm leading-relaxed">
            Get exclusive updates, early access, and industry insights delivered to your inbox
          </p>

          {/* Subscription Form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="relative flex-1 max-w-md">
              <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none transition-all duration-300 hover:border-gray-300 shadow-sm focus:shadow-blue-500/20"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/40 transition-all duration-300 hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Subscribing...</span>
                </>
              ) : (
                <>
                  <span>Subscribe Now</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Privacy Note */}
          <p className="text-gray-500 text-xs mt-6 max-w-sm">
            No spam ever. Unsubscribe anytime with one click. We respect your privacy.
          </p>
        </div>
      </div>
    </div>
  );
}