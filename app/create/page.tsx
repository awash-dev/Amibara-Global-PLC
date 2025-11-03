// app/admin/updates/create/page.tsx
"use client";

import { useState, useTransition } from "react";
import { createUpdate } from "@/lib/actions/updates";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2, AlertCircle, ArrowLeft, Sparkles } from "lucide-react";
import Link from "next/link";

const CreateUpdatePage = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<{ 
    success: boolean; 
    message?: string; 
    error?: string 
  } | null>(null);

  const colorOptions = [
    { label: "Blue", value: "from-blue-500 to-cyan-500", preview: "bg-gradient-to-r from-blue-500 to-cyan-500" },
    { label: "Purple", value: "from-purple-500 to-pink-500", preview: "bg-gradient-to-r from-purple-500 to-pink-500" },
    { label: "Green", value: "from-green-500 to-emerald-500", preview: "bg-gradient-to-r from-green-500 to-emerald-500" },
    { label: "Orange", value: "from-amber-500 to-orange-500", preview: "bg-gradient-to-r from-amber-500 to-orange-500" },
    { label: "Red", value: "from-red-500 to-rose-500", preview: "bg-gradient-to-r from-red-500 to-rose-500" },
    { label: "Indigo", value: "from-indigo-500 to-violet-500", preview: "bg-gradient-to-r from-indigo-500 to-violet-500" },
  ];

  const badgeOptions = [
    "New Launch",
    "Milestone",
    "Partnership",
    "Expansion",
    "Update",
    "Achievement",
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);

    const formData = new FormData(e.currentTarget);
    const data = {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      category: formData.get("category") as string,
      badge: formData.get("badge") as string,
      color: formData.get("color") as string,
    };

    startTransition(async () => {
      const response = await createUpdate(data);
      
      if (response.success) {
        setResult({ 
          success: true, 
          message: "Update created successfully! Redirecting..." 
        });
        
        // Reset form
        (e.target as HTMLFormElement).reset();
        
        // Redirect after 2 seconds
        setTimeout(() => {
          router.push("/updates");
          router.refresh();
        }, 2000);
      } else {
        setResult({ 
          success: false, 
          error: response.error || "Failed to create update" 
        });
      }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="mb-8">
 

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <Sparkles className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Create New Update</h1>
              <p className="text-gray-600">Share the latest news and milestones</p>
            </div>
          </div>
        </div>

        {/* Main Form Card */}
        <div className="bg-white rounded-2xl shadow-sm border-2 border-gray-200 p-8 md:p-10">
          
          {/* Success Alert */}
          {result?.success && (
            <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
              <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-green-900 font-semibold text-sm">Success!</p>
                <p className="text-green-700 text-sm">{result.message}</p>
              </div>
            </div>
          )}

          {/* Error Alert */}
          {result?.error && (
            <div className="mb-6 p-4 bg-red-50 border-2 border-red-200 rounded-xl flex items-start gap-3">
              <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-red-900 font-semibold text-sm">Error</p>
                <p className="text-red-700 text-sm">{result.error}</p>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Title */}
            <div>
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-2">
                Update Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                disabled={isPending}
                maxLength={255}
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all text-gray-900 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="Amibara Fintech Launches Digital Wallet"
              />
              <p className="mt-2 text-xs text-gray-500">
                Make it clear and engaging (max 255 characters)
              </p>
            </div>

            {/* Category & Badge Row */}
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  required
                  disabled={isPending}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all disabled:opacity-50"
                >
                  <option value="">Select category...</option>
                  <option value="Fintech">Fintech</option>
                  <option value="Education">Education</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Media">Media</option>
                  <option value="Store">Store</option>
                  <option value="Company">Company</option>
                </select>
              </div>

              {/* Badge */}
              <div>
                <label htmlFor="badge" className="block text-sm font-semibold text-gray-700 mb-2">
                  Badge Label
                </label>
                <select
                  id="badge"
                  name="badge"
                  disabled={isPending}
                  className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all disabled:opacity-50"
                >
                  <option value="">Select badge (optional)...</option>
                  {badgeOptions.map((badge) => (
                    <option key={badge} value={badge}>
                      {badge}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Color Picker */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Badge Color *
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {colorOptions.map((option, index) => (
                  <label
                    key={option.value}
                    className="relative flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-300 transition-all has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:shadow-md group"
                  >
                    <input
                      type="radio"
                      name="color"
                      value={option.value}
                      defaultChecked={index === 0}
                      disabled={isPending}
                      className="sr-only"
                    />
                    <div className={`w-10 h-10 rounded-lg ${option.preview} shadow-sm group-hover:scale-110 transition-transform`} />
                    <span className="text-sm font-medium text-gray-700">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-2">
                Description *
              </label>
              <textarea
                id="description"
                name="description"
                required
                disabled={isPending}
                rows={8}
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="We're excited to announce the launch of our new digital wallet platform, making financial services more accessible across Ethiopia. This groundbreaking initiative..."
              />
              <p className="mt-2 text-xs text-gray-500">
                Provide detailed information about this update (at least 50 characters)
              </p>
            </div>

            {/* Info Box */}
            <div className="p-5 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border border-blue-200">
              <div className="flex items-start gap-3">
                <Sparkles className="text-blue-600 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Publishing Info</p>
                  <p className="text-sm text-gray-600">
                    Your update will be published immediately and appear on the Updates page. 
                    A unique URL will be generated based on the title.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t-2 border-gray-100">
              <button
                type="submit"
                disabled={isPending}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Publishing...
                  </>
                ) : (
                  <>
                    <Sparkles size={20} />
                    Publish Update
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => router.back()}
                disabled={isPending}
                className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-gray-400 hover:bg-gray-50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateUpdatePage;