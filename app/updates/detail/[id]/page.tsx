// app/updates/[id]/page.tsx
import { getUpdateById, getRecentUpdates } from "@/lib/actions/updates";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft, Clock, Tag } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";
import ShareButton from "./ShareButton";

// Generate static params for all updates (for build optimization)
export async function generateStaticParams() {
  const { getUpdates } = await import("@/lib/actions/updates");
  const updates = await getUpdates();
  
  return updates.map((update) => ({
    id: update.id.toString(),
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { id: string } 
}): Promise<Metadata> {
  const update = await getUpdateById(Number(params.id));
  
  if (!update) {
    return {
      title: "Update Not Found | Amibara Global",
      description: "The update you're looking for could not be found.",
    };
  }

  return {
    title: `${update.title} | Amibara Global`,
    description: update.description.substring(0, 160),
    openGraph: {
      title: update.title,
      description: update.description.substring(0, 160),
      type: "article",
      publishedTime: update.createdAt.toISOString(),
      modifiedTime: update.updatedAt.toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: update.title,
      description: update.description.substring(0, 160),
    },
  };
}

export const dynamic = "force-dynamic";
export const revalidate = 3600; // Revalidate every hour

const UpdateDetailPage = async ({ 
  params 
}: { 
  params: { id: string } 
}) => {
  const updateId = Number(params.id);
  
  // Validate ID is a number
  if (isNaN(updateId) || updateId < 1) {
    notFound();
  }

  const update = await getUpdateById(updateId);

  if (!update) {
    notFound();
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatDateShort = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getReadingTime = (text: string) => {
    const wordsPerMinute = 200;
    const wordCount = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return minutes;
  };

  return (
    <div className="min-h-screen bg-white">
      
      {/* Top Navigation Bar - Sticky */}
      <div className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors group"
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Updates</span>
            </Link>

            <ShareButton 
              title={update.title}
              description={update.description}
            />
          </div>
        </div>
      </div>

      {/* Article Container */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        
        {/* Category Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <span className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${update.color} text-white text-sm font-semibold rounded-full shadow-lg`}>
            <Tag size={14} />
            {update.badge || update.category}
          </span>
          {update.badge && update.badge !== update.category && (
            <span className="text-sm text-gray-500 font-medium">
              {update.category}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          {update.title}
        </h1>

        {/* Meta Information */}
        <div className="flex flex-wrap items-center gap-6 pb-8 mb-8 border-b-2 border-gray-200">
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar size={18} className="text-blue-600" />
            <time className="text-sm font-medium" dateTime={update.createdAt.toISOString()}>
              {formatDate(update.createdAt)}
            </time>
          </div>
          
          <div className="flex items-center gap-2 text-gray-600">
            <Clock size={18} className="text-purple-600" />
            <span className="text-sm font-medium">
              {getReadingTime(update.description)} min read
            </span>
          </div>

          {update.updatedAt && update.updatedAt.getTime() !== update.createdAt.getTime() && (
            <div className="text-xs text-gray-500">
              Updated: {formatDateShort(update.updatedAt)}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="prose prose-lg prose-gray max-w-none">
          <div className="text-xl leading-relaxed text-gray-700 whitespace-pre-wrap">
            {update.description}
          </div>
        </div>

        {/* Tags/Topics Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm font-semibold text-gray-500 mr-2">Topics:</span>
            <span className="px-3 py-1.5 bg-gray-100 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors">
              #{update.category}
            </span>
          </div>
        </div>

        {/* Share Section */}
        <div className="mt-12 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">Share this update</h3>
              <p className="text-sm text-gray-600">Help spread the word about this milestone</p>
            </div>
            <ShareButton 
              title={update.title}
              description={update.description}
              variant="icon"
            />
          </div>
        </div>

        {/* Simple Navigation Footer */}
        <div className="mt-16 pt-8 border-t-2 border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">All Updates</span>
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </article>

      {/* Related Updates Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Recent Updates</h2>
            <p className="text-gray-600">More stories from Amibara Global</p>
          </div>
          <RelatedUpdates currentId={update.id} />
        </div>
      </section>
    </div>
  );
};

// Related Updates Component (Server Component)
async function RelatedUpdates({ currentId }: { currentId: number }) {
  const recentUpdates = await getRecentUpdates(4);
  const filteredUpdates = recentUpdates.filter((u) => u.id !== currentId).slice(0, 3);

  if (filteredUpdates.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500">No other updates available yet.</p>
        <Link
          href="/updates"
          className="inline-block mt-4 text-blue-600 hover:text-blue-700 font-semibold"
        >
          View all updates
        </Link>
      </div>
    );
  }

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {filteredUpdates.map((update) => (
        <Link
          key={update.id}
          href={`/updates/${update.id}`}
          className="group bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
        >
          {/* Color Header */}
          <div className={`h-2 bg-gradient-to-r ${update.color}`} />
          
          <div className="p-6">
            {/* Badge */}
            <span className={`inline-block px-3 py-1 bg-gradient-to-r ${update.color} text-white text-xs font-semibold rounded-full mb-4`}>
              {update.badge || update.category}
            </span>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
              {update.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 mb-4 line-clamp-3">
              {update.description}
            </p>

            {/* Meta */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <Calendar size={12} />
              <time dateTime={update.createdAt.toISOString()}>
                {formatDate(update.createdAt)}
              </time>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default UpdateDetailPage;