"use client";

import {
  ShoppingBag,
  Shield,
  Truck,
  Star,
  Smartphone,
  TrendingUp,
  Users,
  Package,
  CreditCard,
  Sparkles,
  Clock,
  Award,
  Download,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const StoreStartupPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  const benefits = [
    { icon: Shield, title: "Verified Sellers", metric: "100% Authenticated" },
    { icon: Truck, title: "Express Delivery", metric: "Same Day Available" },
    { icon: CreditCard, title: "Secure Payment", metric: "256-bit Encrypted" },
    { icon: Clock, title: "24/7 Support", metric: "2min Response Time" },
  ];

  const metrics = [
    { value: "5K+", label: "Active Users", icon: TrendingUp },
    { value: "200+", label: "Merchants", icon: Users },
    { value: "15K+", label: "Products", icon: Package },
    { value: "4.5★", label: "App Rating", icon: Star },
  ];

  const features = [
    {
      title: "Local Artisans",
      description: "Support Ethiopian craftsmen and women",
      icon: Award,
      color: "from-amber-500 to-orange-600",
    },
    {
      title: "Quality Products",
      description: "Curated selection of authentic goods",
      icon: Sparkles,
      color: "from-purple-500 to-pink-600",
    },
    {
      title: "Fast Shipping",
      description: "Nationwide delivery network",
      icon: Truck,
      color: "from-blue-500 to-cyan-600",
    },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      window.open("/downloads/amibara-store.apk", "_blank");
      setIsDownloading(false);
    }, 1500);
  };

  const Button = ({
    variant = "primary",
    children,
    onClick,
    className = "",
    ...props
  }: {
    variant?: "primary" | "secondary";
    children: React.ReactNode;
    onClick?: () => void;
    className?: string;
    [key: string]: any;
  }) => {
    const styles = {
      primary:
        "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-2xl hover:scale-105",
      secondary:
        "bg-white text-gray-900 border border-gray-200 hover:border-indigo-300 hover:shadow-lg",
    };

    return (
      <button
        onClick={onClick}
        className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 flex items-center gap-2 ${styles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50/30 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 lg:py-14">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-full">
                <ShoppingBag size={16} className="text-indigo-600" />
                <span className="text-sm font-semibold text-indigo-700">
                  Ethiopia&apos;s Digital Marketplace
                </span>
              </div>

              <div>
                <div className="flex columns">
                  <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Amibara
                    <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                      Store
                    </span>
                  </h1>
                </div>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed max-w-lg">
                  Your gateway to authentic Ethiopian products. Connect with
                  verified local sellers, discover unique crafts, and experience
                  seamless shopping.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-4">
                {metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-4 rounded-xl border border-gray-100 hover:border-indigo-200 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center justify-center">
                        <metric.icon size={20} className="text-indigo-600" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-gray-900">
                          {metric.value}
                        </div>
                        <div className="text-xs text-gray-500">
                          {metric.label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={handleDownload} disabled={isDownloading}>
                  <Smartphone size={20} />
                  {isDownloading ? "Downloading..." : "Download APK"}
                </Button>
               
              </div>
            </div>

            {/* Right Side - Phone Frame with Image */}
            <div className="relative flex justify-center">
              <div className="relative">
                {/* Phone Frame Container */}
                <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-3 rounded-[3rem] shadow-2xl max-w-sm mx-auto">
                  {/* Inner Frame */}
                  <div className="bg-black p-2 rounded-[2.5rem]">
                    {/* Screen Container */}
                    <div className="relative bg-gray-100 rounded-[2.2rem] overflow-hidden">
                      {/* Dynamic Island / Notch */}
                      <div className="absolute top-2 pb-4 left-1/2 transform -translate-x-1/2 w-24 h-6 bg-black rounded-full z-20"></div>

                      {/* Main Image */}
                      <div className="relative pt-3">
                        <Image
                          src="/store.jpg"
                          alt="Amibara Store App"
                          width={380}
                          height={800}
                          className="w-full h-[650px] object-cover"
                        />
                      </div>

                      {/* Home Indicator */}
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Side Buttons */}
                  <div className="absolute right-0 top-24 w-1 h-8 bg-gray-700 rounded-l-lg"></div>
                  <div className="absolute right-0 top-36 w-1 h-16 bg-gray-700 rounded-l-lg"></div>
                  <div className="absolute left-0 top-32 w-1 h-12 bg-gray-700 rounded-r-lg"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl  ">
                  ✨ Live App
                </div>

                {/* Download Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-xl border border-gray-200">
                  <div className="flex items-center gap-2">
                    <Download size={16} className="text-indigo-600" />
                    <span className="text-sm font-semibold text-gray-900">
                      Get APK
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Shop with Amibara
            </h2>
            <p className="text-xl text-gray-600">
              Experience the best of Ethiopian e-commerce
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {features.map((feature, idx) => (
              <div
                key={idx}
                onClick={() => setActiveFeature(idx)}
                className={`group p-8 rounded-2xl cursor-pointer transition-all ${
                  activeFeature === idx
                    ? "bg-white shadow-2xl scale-105 border-2 border-indigo-200"
                    : "bg-white hover:shadow-xl border border-gray-100"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}
                >
                  <feature.icon size={28} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-indigo-200 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <benefit.icon size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-sm text-indigo-600 font-medium">
                  {benefit.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StoreStartupPage;