// app/page.tsx
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Sparkles,
  Store,
  Armchair,
  GraduationCap,
  CreditCard,
  Radio,
  Users,
  TrendingUp,
  Globe,
  Calendar,
  Zap,
} from "lucide-react";
import { getRecentUpdates } from "@/lib/actions/updates"; 

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const recentUpdates = await getRecentUpdates(3);

  const startups = [
    {
      name: "Amibara Store",
      icon: Store,
      description:
        "Your one-stop shop for quality products and everyday essentials",
      gradient: "from-blue-600 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50",
      iconColor: "text-blue-600",
      link: "/startup/store",
    },
    {
      name: "Amibara Furniture",
      icon: Armchair,
      description:
        "Premium furniture crafted for comfort and style in every space",
      gradient: "from-orange-600 to-amber-500",
      bgGradient: "from-orange-50 to-amber-50",
      iconColor: "text-orange-600",
      link: "/startup/furniture",
    },
    {
      name: "Amibara Learning Hub",
      icon: GraduationCap,
      description:
        "Empowering minds through accessible education and skill development",
      gradient: "from-purple-600 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
      link: "/startup/learningHub",
    },
    {
      name: "Amibara Fintech",
      icon: CreditCard,
      description:
        "Digital financial solutions making money management simple and secure",
      gradient: "from-emerald-600 to-green-500",
      bgGradient: "from-emerald-50 to-green-50",
      iconColor: "text-emerald-600",
      link: "/startup/fintech",
    },
    {
      name: "Amibara Media",
      icon: Radio,
      description:
        "Creating compelling content that connects communities and tells stories",
      gradient: "from-rose-600 to-red-500",
      bgGradient: "from-rose-50 to-red-50",
      iconColor: "text-rose-600",
      link: "/startup/media",
    },
  ];

  const stats = [
    { label: "Active Startups", value: "5+", icon: TrendingUp },
    { label: "Team Members", value: "5+", icon: Users },
    { label: "Communities Served", value: "1K+", icon: Globe },
  ];

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-20 pb-32">
        {/* Animated Background Blobs */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-orange-400/10 to-amber-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "5s" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full text-sm font-semibold text-blue-700 mb-6 shadow-sm">
                <Zap size={16} className="text-blue-600" />
                Building Tomorrow's Businesses
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-[1.1]">
                Innovating{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Africa's Future
                  </span>
                  <span className="absolute bottom-2 left-0 w-full h-4 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 opacity-30 -z-10" />
                </span>
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
                Building the future of Africa through innovation in commerce,
                education, finance, and media powered by technology and
                creative vision.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#startups"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-semibold hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 transition-all"
                >
                  Explore Our Startups
                  <ArrowRight
                    size={20}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold hover:border-gray-900 hover:shadow-lg transition-all"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Right Content - Logo with Circular Spin */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Central Logo Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative group/logo cursor-pointer">
                    {/* Animated Glow Rings */}
                    <div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 group-hover/logo:opacity-50 transition-opacity animate-pulse"
                      style={{
                        width: "240px",
                        height: "240px",
                        margin: "-20px",
                      }}
                    />

                    {/* Rotating CIRCULAR Border Effect */}
                    <div
                      className="absolute rounded-full animate-spin"
                      style={{
                        width: "204px",
                        height: "204px",
                        margin: "-2px",
                        animationDuration: "8s",
                        background:
                          "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #ec4899, #3b82f6)",
                        padding: "3px",
                      }}
                    >
                      <div className="w-full h-full bg-white rounded-full" />
                    </div>

                    {/* Logo Container - Circular */}
                    <div className="relative w-48 h-48 bg-gradient-to-br from-white to-gray-50 rounded-full shadow-2xl flex items-center justify-center border-4 border-white transform group-hover/logo:scale-105 transition-all overflow-hidden">
                      {/* Background Pattern */}
                      <div className="absolute inset-0 opacity-5">
                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-full" />
                      </div>

                      {/* Logo Image */}
                      <div className="relative z-10">
                        <Image
                          src="/logo.png"
                          alt="Amibara Global"
                          width={110}
                          height={110}
                          className="object-contain drop-shadow-lg rounded-full"
                        />
                      </div>

                      {/* Decorative Dots */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-blue-300 rounded-full" />
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-purple-300 rounded-full" />
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-pink-300 rounded-full" />
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-300 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Orbiting Startup Icons */}
                {startups.map((startup, index) => {
                  const angle = (index * 360) / startups.length - 90;
                  const radius = 165;
                  const x = Math.cos((angle * Math.PI) / 180) * radius;
                  const y = Math.sin((angle * Math.PI) / 180) * radius;

                  return (
                    <div
                      key={startup.name}
                      className="absolute top-1/2 left-1/2 group/orbit"
                      style={{
                        transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                      }}
                    >
                      <div className="relative">
                        <div
                          className={`absolute inset-0 bg-gradient-to-r ${startup.gradient} rounded-full blur-xl opacity-0 group-hover/orbit:opacity-60 transition-opacity duration-300 animate-pulse`}
                          style={{
                            width: "80px",
                            height: "80px",
                            margin: "-12px",
                          }}
                        />

                        <div
                          className={`relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg border-2 border-gray-100 transform transition-all duration-300 cursor-pointer overflow-hidden group-hover/orbit:scale-125 group-hover/orbit:shadow-2xl group-hover/orbit:animate-bounce`}
                          style={{
                            animationDuration: "1s",
                            animationIterationCount: "3",
                          }}
                        >
                          <div
                            className={`absolute inset-0 bg-gradient-to-br ${startup.gradient} opacity-0 group-hover/orbit:opacity-100 transition-opacity duration-300`}
                          />

                          <startup.icon
                            className={`relative z-10 ${startup.iconColor} group-hover/orbit:text-white transition-all duration-300 group-hover/orbit:rotate-12`}
                            size={26}
                            strokeWidth={2}
                          />
                        </div>

                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 px-3 py-1.5 bg-gray-900 text-white text-xs font-semibold rounded-lg opacity-0 group-hover/orbit:opacity-100 transition-all duration-200 whitespace-nowrap pointer-events-none z-20 shadow-xl translate-y-2 group-hover/orbit:translate-y-0">
                          {startup.name}
                          <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-24 grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={stat.label} className="group text-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="relative">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-4 border border-gray-200 group-hover:border-gray-300 group-hover:shadow-lg transition-all">
                    <stat.icon
                      className="text-gray-400 group-hover:text-gray-700 transition-colors"
                      size={26}
                      strokeWidth={2}
                    />
                  </div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Startups Section */}
      <section
        id="startups"
        className="py-32 bg-white relative overflow-hidden"
      >
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-l from-blue-100 to-transparent rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-gradient-to-r from-purple-100 to-transparent rounded-full blur-3xl opacity-50" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full mb-6 shadow-lg">
              <Sparkles size={18} />
              <span className="text-sm font-bold">Our Portfolio</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                Startup Ecosystem
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Five innovative ventures driving Africa's digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {startups.map((startup, index) => (
              <Link
                key={startup.name}
                href={startup.link}
                className="group relative animate-fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: "both",
                }}
              >
                <div className="relative h-full transform transition-all duration-500 hover:-translate-y-4">
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${startup.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                  />

                  <div className="relative h-full bg-white rounded-3xl p-8 border border-gray-200 group-hover:border-transparent shadow-lg group-hover:shadow-2xl transition-all duration-500">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${startup.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}
                    />

                    <div className="relative z-10">
                      <div className="mb-8 relative">
                        <div className="inline-flex items-center justify-center">
                          <div className="absolute w-24 h-24 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full blur-2xl opacity-50 group-hover:opacity-0 transition-opacity" />

                          <div
                            className={`relative w-20 h-20 bg-gradient-to-br ${startup.gradient} rounded-2xl shadow-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                          >
                            <startup.icon
                              className="text-white"
                              size={36}
                              strokeWidth={2}
                            />
                          </div>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        {startup.name}
                      </h3>

                      <p className="text-gray-600 group-hover:text-gray-700 leading-relaxed mb-6">
                        {startup.description}
                      </p>

                      <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-900 font-semibold transition-colors">
                        <span className="text-sm">Explore</span>
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-2 transition-transform duration-300"
                        />
                      </div>
                    </div>

                    <div className="absolute top-4 right-4 w-20 h-20 border-2 border-gray-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity" />
                    <div className="absolute bottom-4 left-4 w-16 h-16 border-2 border-gray-100 rounded-full opacity-50 group-hover:opacity-0 transition-opacity" />
                  </div>
                </div>
              </Link>
            ))}

            <div
              className="group relative animate-fadeInUp"
              style={{ animationDelay: "500ms", animationFillMode: "both" }}
            >
              <div className="relative h-full transform transition-all duration-500 hover:-translate-y-4">
                <div className="relative h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-center min-h-[350px] group-hover:border-gray-400 transition-all">
                  <div className="w-20 h-20 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Sparkles
                      className="text-gray-400 group-hover:text-gray-600 transition-colors"
                      size={36}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    More Coming Soon
                  </h3>
                  <p className="text-gray-600">
                    We're constantly expanding our innovation ecosystem
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Latest Updates
              </h2>
              <p className="text-gray-600">Stay informed about our journey</p>
            </div>
            <Link
              href="/updates"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-2xl font-semibold hover:bg-gray-800 hover:shadow-xl transition-all"
            >
              View All
              <ArrowRight size={18} />
            </Link>
          </div>

          {recentUpdates.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="text-gray-400" size={40} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                No updates yet
              </h3>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Check back soon for the latest news and announcements.
              </p>
              <Link
                href="/admin/updates/create"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-xl transition-all"
              >
                <Sparkles size={18} />
                Create First Update
              </Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {recentUpdates.map((update, index) => (
                <Link
                  key={update.id}
                  href={`/updates/detail/${update.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-gray-300 hover:shadow-2xl transition-all duration-300 animate-fadeInUp"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: "both",
                  }}
                >
                  <div
                    className={`h-2 bg-gradient-to-r ${
                      update.color || "from-blue-500 to-purple-600"
                    }`}
                  />

                  <div className="p-6">
                    <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-700 text-xs font-bold rounded-full mb-4 group-hover:bg-gray-900 group-hover:text-white transition-all">
                      {update.badge || update.category}
                    </span>

                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                      {update.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {update.description}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Calendar size={14} />
                        <time dateTime={update.createdAt.toISOString()}>
                          {formatDate(update.createdAt)}
                        </time>
                      </div>
                      <ArrowRight
                        size={20}
                        className="text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all"
                      />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
