// app/admin/updates/edit/[id]/page.tsx
"use client";

import { useState, useEffect, useTransition } from "react";
import { getUpdateById, updateUpdate } from "@/lib/actions/updates";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2, AlertCircle, ArrowLeft, Sparkles, Save } from "lucide-react";
import Link from "next/link";

const EditUpdatePage = ({ params }: { params: { id: string } }) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState<{ 
    success: boolean; 
    message?: string; 
    error?: string 
  } | null>(null);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    badge: "",
    color: "from-blue-500 to-cyan-500",
  });

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

  // Load update data
  useEffect(() => {
    const loadUpdate = async () => {
      const update = await getUpdateById(Number(params.id));
      if (update) {
        setFormData({
          title: update.title,
          description: update.description,
          category: update.category,
          badge: update.badge || "",
          color: update.color || "from-blue-500 to-cyan-500",
        });
      } else {
        router.push("/updates");
      }
      setIsLoading(false);
    };

    loadUpdate();
  }, [params.id, router]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult(null);

    startTransition(async () => {
      const response = await updateUpdate(Number(params.id), formData);
      
      if (response.success) {
        setResult({ 
          success: true, 
          message: "Update saved successfully! Redirecting..." 
        });
        
        // Redirect after 2 seconds
        setTimeout(() => {
          router.push("/admin/updates");
          router.refresh();
        }, 2000);
      } else {
        setResult({ 
          success: false, 
          error: response.error || "Failed to update" 
        });
      }
    });
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader2 size={48} className="animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading update...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/admin/updates"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            Back to Updates
          </Link>

          <div className="flex items-center gap-3 mb-2">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center">
              <Save className="text-white" size={24} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Edit Update</h1>
              <p className="text-gray-600">Modify your update details</p>
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
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
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
                  value={formData.badge}
                  onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
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
                {colorOptions.map((option) => (
                  <label
                    key={option.value}
                    className="relative flex items-center gap-3 p-4 border-2 border-gray-200 rounded-xl cursor-pointer hover:border-blue-300 transition-all has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50 has-[:checked]:shadow-md group"
                  >
                    <input
                      type="radio"
                      name="color"
                      value={option.value}
                      checked={formData.color === option.value}
                      onChange={(e) => setFormData({ ...formData, color: e.target.value })}
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
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                required
                disabled={isPending}
                rows={8}
                className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-100 focus:outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
                placeholder="We're excited to announce the launch of our new digital wallet platform..."
              />
              <p className="mt-2 text-xs text-gray-500">
                Provide detailed information about this update
              </p>
            </div>

            {/* Info Box */}
            <div className="p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
              <div className="flex items-start gap-3">
                <Sparkles className="text-purple-600 flex-shrink-0 mt-0.5" size={18} />
                <div>
                  <p className="text-sm font-semibold text-gray-900 mb-1">Update Info</p>
                  <p className="text-sm text-gray-600">
                    Changes will be saved immediately. The URL slug will be regenerated based on the new title.
                  </p>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t-2 border-gray-100">
              <button
                type="submit"
                disabled={isPending}
                className="flex-1 px-8 py-4 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white rounded-xl font-semibold hover:shadow-xl hover:shadow-pink-500/30 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isPending ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Saving Changes...
                  </>
                ) : (
                  <>
                    <Save size={20} />
                    Save Changes
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

export default EditUpdatePage;