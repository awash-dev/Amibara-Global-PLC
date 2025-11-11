// app/updates/page.tsx
import { Calendar, Sparkles } from "lucide-react";
import { getUpdates } from "@/lib/actions/updates";
import Link from "next/link";

export const dynamic = "force-dynamic";

const UpdatesPage = async () => {
  const updates = await getUpdates();

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
          <Sparkles size={16} />
          What&apos;s New
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Latest Updates &{" "}
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Company News
          </span>
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Stay informed about Amibara Global&apos;s latest milestones, projects, and
          innovations across our startup divisions.
        </p>
      </section>

      {/* Updates Grid */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {updates.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No updates available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-8">
            {updates.map((update, index) => (
              <Link
                key={update.id}
                href={`/updates/detail/${update.id}`}
                className="group bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-xl transition-all duration-300 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge & Date */}
                <div className="flex items-center justify-between mb-4">
                  <span
                    className={`inline-block px-3 py-1 bg-gradient-to-r ${
                      update.color || "from-blue-500 to-purple-600"
                    } text-white text-xs font-semibold rounded-full`}
                  >
                    {update.badge || update.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-gray-500">
                    <Calendar size={14} />
                    <time>{formatDate(update.createdAt)}</time>
                  </div>
                </div>

                {/* Content */}
                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {update.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {update.description}
                </p>

                {/* Read More Link */}
                <div className="flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Read more</span>
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default UpdatesPage;