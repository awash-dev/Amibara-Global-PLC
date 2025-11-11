"use client";

import { Video, Instagram, Podcast } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Service {
  id: string;
  title: string;
  bullets: string[];
  icon: LucideIcon;
  color: "purple" | "pink" | "blue";
}

export default function MediaPage() {
  const services: Service[] = [
    {
      id: "video",
      title: "Video Production",
      bullets: [
        "Short-form (Reels/Shorts)",
        "Series & Documentaries",
        "Brand Commercials",
      ],
      icon: Video,
      color: "purple",
    },
    {
      id: "social",
      title: "Social Media",
      bullets: ["Content Strategy", "Community Mgmt", "Influencer Campaigns"],
      icon: Instagram,
      color: "pink",
    },
    {
      id: "audio",
      title: "Podcasts & Audio",
      bullets: ["Podcast Production", "Audio Storytelling", "Sound Design"],
      icon: Podcast,
      color: "blue",
    },
  ];

  const getColorClasses = (color: Service["color"]) => {
    const colors = {
      purple: {
        bg: "bg-purple-50",
        text: "text-purple-600",
        border: "border-purple-100",
        hover: "hover:border-purple-200",
      },
      pink: {
        bg: "bg-pink-50",
        text: "text-pink-600",
        border: "border-pink-100",
        hover: "hover:border-pink-200",
      },
      blue: {
        bg: "bg-blue-50",
        text: "text-blue-600",
        border: "border-blue-100",
        hover: "hover:border-blue-200",
      },
    };
    return colors[color];
  };

  return (
    <div className="min-h-screen w-full bg-white text-gray-900">
      {/* Container with responsive padding */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        
        {/* Header Section - Responsive Typography */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 px-4">
            Our Services
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-2 sm:mt-3 md:mt-4 max-w-2xl mx-auto px-4">
            Core capabilities for brands and creators.
          </p>
        </div>

        {/* Grid Section - Fully Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {services.map((service) => {
            const colors = getColorClasses(service.color);
            const Icon = service.icon;

            return (
              <article
                key={service.id}
                className={`
                  group relative bg-white rounded-xl sm:rounded-2xl 
                  p-6 sm:p-8 
                  border-2 ${colors.border} ${colors.hover}
                  shadow-sm hover:shadow-md
                  transition-all duration-300 ease-in-out
                  hover:-translate-y-1
                  w-full
                `}
              >
                <div className="space-y-3 sm:space-y-4">
                  {/* Icon Container - Responsive Size */}
                  <div
                    className={`
                      w-12 h-12 sm:w-14 sm:h-14 
                      rounded-lg sm:rounded-xl 
                      ${colors.bg} 
                      flex items-center justify-center ${colors.text}
                      transition-transform duration-300
                      group-hover:scale-110
                    `}
                  >
                    <Icon 
                      size={20} 
                      className="sm:w-6 sm:h-6" 
                      strokeWidth={2} 
                    />
                  </div>

                  {/* Title - Responsive Typography */}
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>

                  {/* Bullets List - Responsive Spacing */}
                  <ul className="space-y-2 sm:space-y-2.5" role="list">
                    {service.bullets.map((bullet, idx) => (
                      <li
                        key={`${service.id}-${idx}`}
                        className="flex items-start gap-2 text-gray-600"
                      >
                        <span
                          className={`
                            inline-block w-1.5 h-1.5 rounded-full 
                            ${colors.bg} 
                            mt-1.5 sm:mt-2 
                            flex-shrink-0 border-2 ${colors.border}
                          `}
                          aria-hidden="true"
                        />
                        <span className="text-sm sm:text-base leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Decorative Element - Hidden on Mobile */}
                <div
                  className={`
                    absolute top-0 right-0 
                    w-16 h-16 sm:w-20 sm:h-20 
                    ${colors.bg} 
                    rounded-bl-full opacity-50 -z-10
                  `}
                  aria-hidden="true"
                />
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}