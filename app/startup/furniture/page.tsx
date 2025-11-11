"use client";

import {
  ArrowRight,
  Download,
  Sparkles,
  Layers,
  Zap,
  Home,
  Building2,
  Store,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const FurnitureStartupPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeService, setActiveService] = useState(0);

  const capabilities = [
    { icon: Sparkles, label: "Premium Materials", value: "100%" },
    { icon: Layers, label: "Custom Designs", value: "300+" },
    { icon: Zap, label: "Fast Delivery", value: "15 Days" },
  ];

  const services = [
    {
      icon: Home,
      title: "Residential",
      description: "Transform your living space with custom furniture",
      features: ["Living Room Sets", "Bedroom Collections", "Kitchen Cabinets"],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Building2,
      title: "Corporate",
      description: "Professional workspace solutions for modern offices",
      features: ["Executive Desks", "Conference Tables", "Reception Areas"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Store,
      title: "Commercial",
      description: "Tailored furniture for hospitality and retail",
      features: ["Restaurant Seating", "Hotel Furnishing", "Display Units"],
      color: "from-purple-500 to-pink-600",
    },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/downloads/amibara-furniture.apk";
      link.download = "amibara-furniture.apk";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      setIsDownloading(false);
    }, 1500);
  };

  interface ButtonProps {
    variant?: "primary" | "secondary" | "outline";
    children: React.ReactNode;
    onClick?: () => void;
    disabled?: boolean;
    className?: string;
  }

  const Button = ({
    variant = "primary",
    children,
    onClick,
    disabled,
    className = "",
  }: ButtonProps) => {
    const baseStyles =
      "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2";
    const variants = {
      primary:
        "bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:shadow-xl hover:scale-105",
      secondary:
        "bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20",
      outline:
        "border-2 border-gray-200 text-gray-700 hover:border-orange-500 hover:text-orange-500",
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
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-orange-700">
                  Ethiopian Craftsmanship
                </span>
              </div>

              <div>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Amibara
                  <span className="block text-transparent bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text">
                    Furniture
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Where traditional Ethiopian craftsmanship meets contemporary
                  design. Creating spaces that inspire.
                </p>
              </div>

              <div className="flex items-center gap-6">
                <div className="flex items-center gap-3">
                  <Image
                    src="/author.jpg"
                    alt="Mohammed Hussen"
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full border-2 border-orange-200"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">
                      Mohammed Hussen
                    </p>
                    <p className="text-sm text-gray-500">Founder & CEO</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={handleDownload} disabled={isDownloading}>
                  <Download size={20} />
                  {isDownloading ? "Downloading..." : "Get Mobile App"}
                </Button>
                <Button variant="outline">
                  Explore Catalog
                  <ArrowRight size={20} />
                </Button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                {capabilities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                      <item.icon size={20} className="text-orange-600" />
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
                <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl blur-3xl opacity-30 animate-pulse" />
                <div className="relative bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl p-8">
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
                    <div className="h-96 bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
                      <div className="text-center space-y-6">
                        <div className="w-24 h-24 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mx-auto flex items-center justify-center">
                          <Layers size={48} className="text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">
                            Modern Design
                          </h3>
                          <p className="text-gray-500 mt-2">
                            Crafted with passion
                          </p>
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
            <h2 className="text-4xl font-bold text-gray-900">Our Expertise</h2>
            <p className="mt-4 text-xl text-gray-600">
              Comprehensive furniture solutions for every space
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${
                    activeService === idx
                      ? "border-orange-500 bg-orange-50"
                      : "border-gray-200 hover:border-orange-300"
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
                      <ChevronRight size={16} className="text-orange-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {activeService === idx && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-orange-500 to-amber-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "30+", label: "Happy Clients" },
              { value: "100+", label: "Projects Done" },
              { value: "5+", label: "Years Experience" },
              { value: "95%", label: "Satisfaction Rate" },
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-sm">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-orange-100 drop-shadow-sm">
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

export default FurnitureStartupPage;