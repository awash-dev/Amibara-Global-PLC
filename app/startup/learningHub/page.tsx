"use client";

import {
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Video,
  FileText,
  Brain,
  Target,
  BadgeCheck,
  PlayCircle,
  ArrowRight,
  Download,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";

const LearningHubPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const capabilities = [
    { icon: Video, label: "HD Video Lessons", value: "500+" },
    { icon: FileText, label: "Study Materials", value: "1000+" },
    { icon: Clock, label: "Learning Hours", value: "24/7" },
  ];

  const services = [
    {
      icon: BookOpen,
      title: "Academic Courses",
      description: "Comprehensive courses for students and professionals",
      features: ["University Prep", "Professional Certificates", "Language Learning"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Brain,
      title: "Skill Development",
      description: "Practical skills for the modern workplace",
      features: ["Programming", "Digital Marketing", "Data Analysis"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Target,
      title: "Career Growth",
      description: "Advance your career with specialized training",
      features: ["Leadership Training", "Project Management", "Business Strategy"],
      color: "from-green-500 to-emerald-600",
    },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/downloads/amibara-learning.apk";
      link.download = "amibara-learning.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1500);
  };

  const Button = ({
    variant = "primary",
    children,
    onClick,
    disabled,
    className = "",
  }: {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
  }) => {
    const baseStyles =
      "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2";
    const variants = {
      primary:
        "bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-xl hover:scale-105",
      secondary:
        "bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20",
      outline:
        "border-2 border-gray-200 text-gray-700 hover:border-blue-500 hover:text-blue-500",
    };

    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`${baseStyles} ${variants[variant]} ${className} ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full">
                <span className="w-2 h-2 bg-blue-600 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-blue-700">
                  Ethiopia&apos;s #1 Learning Platform
                </span>
              </div>

              <div>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Amibara
                  <span className="block text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text">
                    Learning Hub
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Unlock your potential with expert-led courses. Learn new skills, 
                  advance your career, and achieve your goals.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      Expert Instructors
                    </p>
                    <p className="text-sm text-gray-500">Learn from the best</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={handleDownload} disabled={isDownloading}>
                  <Download size={20} />
                  {isDownloading ? "Downloading..." : "Get Mobile App"}
                </Button>
                <Button variant="outline">
                  Browse Courses
                  <ArrowRight size={20} />
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                {capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-blue-600" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">{item.value}</p>
                      <p className="text-xs text-gray-500">{item.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative lg:block hidden">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-indigo-200 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="h-96 bg-gradient-to-b from-blue-50 to-white flex items-center justify-center">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mx-auto flex items-center justify-center">
                          <BookOpen size={48} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Start Learning
                          </h3>
                          <p className="text-gray-500 mt-2">
                            Your future awaits
                          </p>
                        </div>
                        <div className="flex justify-center gap-2">
                          {[1,2,3,4,5].map((i) => (
                            <div
                              key={i}
                              className={`w-2 h-2 rounded-full ${
                                i <= 3 ? 'bg-blue-600' : 'bg-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Learning Paths</h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose your path to success with our comprehensive programs
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${
                    activeService === idx
                      ? "border-blue-500 bg-blue-50"
                      : "border-gray-200 hover:border-blue-300"
                  }`}
                onClick={() => setActiveService(idx)}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6`}
                >
                  <service.icon size={28} className="text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <ChevronRight size={16} className="text-blue-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {activeService === idx && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Why Choose Us</h2>
            <p className="mt-4 text-xl text-gray-600">
              Experience the best online learning platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Video, title: "HD Video Lessons", metric: "500+ Hours" },
              { icon: BadgeCheck, title: "Certificates", metric: "Verified" },
              { icon: Users, title: "Expert Mentors", metric: "24/7 Support" },
              { icon: PlayCircle, title: "Offline Access", metric: "Download & Learn" },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={24} className="text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-blue-600 font-medium">
                  {benefit.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "1K+", label: "Active Students" },
              { value: "150+", label: "Courses" },
              { value: "95%", label: "Pass Rate" },
              { value: "4.3★", label: "App Rating" },
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-blue-100 drop-shadow-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearningHubPage;