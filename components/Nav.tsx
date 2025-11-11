"use client";
import { useState, useRef, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isStartupsOpen, setIsStartupsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsStartupsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const startups = [
    { 
      name: "Store",  
      description: "E-commerce platform",
      color: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Furniture",  
      description: "Modern furniture solutions",
      color: "from-orange-500 to-amber-500"
    },
    { 
      name: "LearningHub",  
      description: "Educational technology",
      color: "from-purple-500 to-pink-500"
    },
    { 
      name: "Fintech",  
      description: "Financial innovation",
      color: "from-green-500 to-emerald-500"
    },
    { 
      name: "Media",  
      description: "Content and entertainment",
      color: "from-rose-500 to-red-500"
    },
  ];

  const navItems = [
    { name: "About us", href: "/about" },
    { name: "News", href: "/updates" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Enhanced Background Gradient */}
      <div className="fixed top-0 left-0 right-0 h-32 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-pink-600/5 blur-3xl pointer-events-none -z-10" />

      <nav className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-2xl border-b border-gray-200/60 shadow-lg shadow-black/5" 
          : "bg-white/80 backdrop-blur-xl border-b border-gray-200/40"
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section - Enhanced */}
            <Link
              href="/" 
              className="flex items-center gap-3 group cursor-pointer"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="relative">
                <div className="relative w-12 h-12 rounded-2xl overflow-hidden ring-2 ring-blue-500/10 transition-all duration-500 group-hover:ring-blue-500/30 group-hover:scale-105 bg-gradient-to-br from-blue-50 to-purple-50 p-1.5 shadow-sm">
                  <Image
                    src="/logo.png"
                    alt="Amibara Global"
                    fill
                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                    priority
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
                  Amibara Global
                </span>
                <span className="text-xs text-gray-500 tracking-wider -mt-1 flex items-center gap-1">
                  <Sparkles size={10} className="text-blue-500 animate-pulse" />
                  PLC
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-semibold text-gray-700 hover:text-blue-600 transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}

              {/* Our Startups - Enhanced Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button 
                  onClick={() => setIsStartupsOpen(!isStartupsOpen)}
                  className="flex items-center gap-2 px-6 py-3 bg-white text-black border rounded-xl font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105 active:scale-95"
                >
                  <span>Our Startups</span>
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      isStartupsOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Enhanced Dropdown */}
                {isStartupsOpen && (
                  <div className="absolute left-0 mt-3 w-80 bg-white/95 backdrop-blur-2xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden animate-in fade-in slide-in-from-top-5 duration-300">
                    <div className="p-2 space-y-1">
                      {startups.map((startup) => (
                        <Link
                          key={startup.name}
                          href={`/startup/${startup.name.replace(/ /g, "-")}`}
                          className="flex items-center gap-4 p-4 rounded-xl hover:bg-gradient-to-r hover:from-blue-50/80 hover:to-purple-50/80 transition-all duration-200 group/item border border-transparent hover:border-blue-200/50"
                          onClick={() => setIsStartupsOpen(false)}
                        >
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${startup.color} flex-shrink-0`} />
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-gray-800 group-hover/item:text-gray-900 transition-colors">
                              {startup.name}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {startup.description}
                            </div>
                          </div>
                          <ArrowRight
                            size={16}
                            className="text-gray-400 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 flex-shrink-0"
                          />
                        </Link>
                      ))}
                    </div>
                   
                  </div>
                )}
              </div>

              {/* CTA Button */}
              <Link
                href="/"
                className="px-6 py-3 text-gray-900 bg-white rounded-xl hover:text-white font-semibold hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 border border-gray-900"
              >
                View Whitepaper
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-3 rounded-xl text-gray-700 hover:bg-gray-100 transition-all duration-300 active:scale-95"
            >
              {isMobileMenuOpen ? (
                <X size={24} className="text-gray-600" />
              ) : (
                <Menu size={24} className="text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen 
              ? "max-h-[800px] opacity-100" 
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pb-8 pt-4 space-y-2 bg-gradient-to-b from-white to-gray-50/80 backdrop-blur-xl border-t border-gray-200/50">
            {/* Mobile Navigation Items */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-4 py-4 text-gray-700 font-semibold rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300 border border-transparent hover:border-gray-200/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                {item.name}
              </Link>
            ))}

            {/* Mobile Startup */}
            <div className="space-y-2">
              <button
                onClick={() => setIsStartupsOpen(!isStartupsOpen)}
                className="flex items-center justify-between w-full px-4 py-4 bg-white text-black rounded-xl font-semibold shadow-lg transition-all duration-300 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
                  Our Startups
                </span>
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    isStartupsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isStartupsOpen && (
                <div className="mt-2 space-y-2 bg-white/80 rounded-xl p-3 shadow-inner border border-gray-200/50 backdrop-blur-sm">
                  {startups.map((startup) => (
                    <Link
                      key={startup.name}
                      href={`/startup/${startup.name.toLowerCase().replace(/ /g, "-")}`}
                      className="flex items-center gap-4 px-4 py-3 text-gray-700 rounded-lg hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-200 border border-transparent hover:border-blue-200/50"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${startup.color}`} />
                      <div>
                        <div className="font-semibold text-sm">{startup.name}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{startup.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile CTA */}
            <Link
              href="/"
              className="flex items-center justify-center gap-2 w-full px-4 py-4 text-gray-900 bg-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 mt-4 border border-gray-900"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              View Whitepaper
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;