"use client";

import {
  Wallet,
  LineChart,
  Shield,
  Coins,
  DollarSign,
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Lock,
  Gem,
  ArrowRight,
  ChevronRight,
  Zap,
  TrendingUp,
  Smartphone,
  Globe,
  Sparkles,
  Users,
  Target,
  CheckCircle2,
} from "lucide-react";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";

// TypeScript Interfaces
interface Stat {
  icon: LucideIcon;
  label: string;
  value: string;
  subtext: string;
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  color: string;
  badge: string;
}

interface Currency {
  code: string;
  symbol: string;
  rate: number;
  flag: string;
}

interface Transaction {
  type: "in" | "out";
  amount: string;
  desc: string;
  time: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  metric: string;
}

interface Milestone {
  value: string;
  label: string;
}

export default function FintechPage() {
  const [activeService, setActiveService] = useState<number>(0);
  const [selectedCurrency, setSelectedCurrency] = useState<string>("ETB");
  const [email, setEmail] = useState<string>("");

  // Pre-Launch Statistics
  const capabilities: Stat[] = [
    { icon: Users, label: "Early Access", value: "Invite Only", subtext: "Limited Spots" },
    { icon: Target, label: "Launch Phase", value: "Q2 2024", subtext: "Beta Testing" },
    { icon: Shield, label: "Funding", value: "Bootstrapped", subtext: "Founder Funded" },
  ];

  const services: Service[] = [
    {
      icon: Coins,
      title: "Digital Wallet",
      description: "Multi-currency digital wallet for Ethiopian market",
      features: ["ETB Primary Support", "USD/EUR Exchange", "Mobile Money Integration"],
      color: "from-green-500 to-emerald-600",
      badge: "In Dev",
    },
    {
      icon: LineChart,
      title: "Investment Tools",
      description: "Simple investment tracking and portfolio management",
      features: ["Portfolio Tracking", "Market Insights", "Goal Setting"],
      color: "from-emerald-500 to-teal-600",
      badge: "Coming Soon",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description: "Bank-grade security built from the ground up",
      features: ["End-to-End Encryption", "2FA Security", "Biometric Auth"],
      color: "from-teal-500 to-green-600",
      badge: "Priority",
    },
  ];

  const currencies: Currency[] = [
    { code: "ETB", symbol: "ብር", rate: 1, flag: "🇪🇹" },
    { code: "USD", symbol: "$", rate: 0.018, flag: "🇺🇸" },
    { code: "EUR", symbol: "€", rate: 0.017, flag: "🇪🇺" },
  ];

  const transactions: Transaction[] = [
    { type: "in", amount: "+$250", desc: "Test Transaction", time: "Demo" },
    { type: "out", amount: "-$120", desc: "Sample Payment", time: "Demo" },
    { type: "in", amount: "+$580", desc: "Mock Transfer", time: "Demo" },
  ];

  const benefits: Benefit[] = [
    { icon: Users, title: "Early Access", metric: "Exclusive Beta Users" },
    { icon: Shield, title: "Secure First", metric: "Built with Security" },
    { icon: Target, title: "Ethiopian Focus", metric: "Local Market First" },
    { icon: Zap, title: "Founder Backed", metric: "Independent & Agile" },
  ];

  const milestones: Milestone[] = [
    { value: "Q2 2024", label: "Beta Launch" },
    { value: "Invite Only", label: "Early Access" },
    { value: "100%", label: "Bootstrapped" },
    { value: "ETB First", label: "Local Currency" },
  ];

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Waitlist signup:", email);
    alert("Thank you! We'll contact you when we launch.");
    setEmail("");
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-hidden">
      {/* Pre-Launch Banner */}
      <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-8">
            <div className="flex items-center gap-3 animate-pulse">
              <Sparkles size={18} className="sm:w-5 sm:h-5 text-yellow-300" />
              <span className="text-xs sm:text-sm md:text-base font-bold">🚀 PRE-LAUNCH • INVITE ONLY</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Smartphone size={14} className="sm:w-4 sm:h-4" />
                <span className="font-medium">Mobile App in Development</span>
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Target size={14} className="sm:w-4 sm:h-4" />
                <span className="font-medium">Founder Funded</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-12 sm:py-16 lg:py-20">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/30 to-teal-50/20" />
          <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-48 sm:w-72 h-48 sm:h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Content */}
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                <Coins size={14} className="sm:w-4 sm:h-4 text-green-600" />
                <span className="text-xs sm:text-sm font-semibold text-green-700">
                  Ethiopian Digital Finance Platform
                </span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Amibara
                  <span className="block text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text">
                    Fintech
                  </span>
                </h1>
                <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  Building Ethiopia's next-generation digital wallet. 
                  <span className="block mt-2 font-semibold text-green-700">
                    Bootstrapped. Independent. Customer-First.
                  </span>
                </p>
              </div>

              {/* Launch Stats */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4">
                {capabilities.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 border-2 border-green-100 hover:border-green-300 hover:shadow-lg transition-all group"
                  >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <item.icon size={16} className="sm:w-5 sm:h-5 text-green-600" />
                    </div>
                    <p className="text-sm sm:text-base font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-600 mt-1">{item.label}</p>
                    <p className="text-[10px] text-green-600 font-medium mt-0.5">{item.subtext}</p>
                  </div>
                ))}
              </div>

              {/* Waitlist Form */}
              <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 sm:p-6 border-2 border-green-200">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle2 size={18} className="text-green-600" />
                  <h3 className="text-base sm:text-lg font-bold text-gray-900">Join Early Access Waitlist</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-4">
                  Be among the first to experience Ethiopian digital finance reimagined.
                </p>
                <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="flex-1 px-4 py-3 rounded-lg border-2 border-green-200 focus:border-green-500 focus:outline-none text-sm sm:text-base"
                  />
                  <button
                    type="submit"
                    className="px-4 sm:px-6 py-3 rounded-lg font-medium bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 text-sm sm:text-base whitespace-nowrap"
                  >
                    Request Access
                  </button>
                </form>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
                <button className="px-4 sm:px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 opacity-60 cursor-not-allowed">
                  <Wallet size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">App Coming Soon</span>
                </button>
                <button className="px-4 sm:px-6 py-3 rounded-xl font-medium border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-500 transition-all duration-300 flex items-center justify-center gap-2">
                  <span className="text-sm sm:text-base">Learn More</span>
                  <ArrowRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Dashboard Preview - Demo UI */}
            <div className="hidden lg:block relative">
              <div className="relative">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl blur-3xl opacity-20" />

                {/* Dashboard */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl">
                  {/* Demo Label */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-yellow-500/90 text-gray-900 text-xs font-bold rounded-full">
                    PREVIEW UI
                  </div>

                  {/* Header */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6 mt-8">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg sm:rounded-xl flex items-center justify-center">
                        <DollarSign size={16} className="sm:w-5 sm:h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-sm sm:text-base">Demo Balance</p>
                        <p className="text-green-400 text-xs">Sample Data</p>
                      </div>
                    </div>
                    <Lock size={14} className="sm:w-4 sm:h-4 text-green-400" />
                  </div>

                  {/* Balance */}
                  <div className="bg-gray-800/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-2xl sm:text-4xl font-bold text-white">ብር 50,000</p>
                        <p className="text-green-400 text-xs sm:text-sm mt-1">~ $900 USD (Demo)</p>
                      </div>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                        <svg className="w-12 h-12 sm:w-16 sm:h-16 transform -rotate-90">
                          <circle cx="24" cy="24" r="20" className="sm:hidden" stroke="#374151" strokeWidth="6" fill="none" />
                          <circle cx="24" cy="24" r="20" className="sm:hidden" stroke="url(#gradient)" strokeWidth="6" fill="none"
                            strokeDasharray={`${2 * Math.PI * 20 * 0.5} ${2 * Math.PI * 20 * 0.5}`} />
                          <circle cx="32" cy="32" r="28" className="hidden sm:block" stroke="#374151" strokeWidth="8" fill="none" />
                          <circle cx="32" cy="32" r="28" className="hidden sm:block" stroke="url(#gradient)" strokeWidth="8" fill="none"
                            strokeDasharray={`${2 * Math.PI * 28 * 0.5} ${2 * Math.PI * 28 * 0.5}`} />
                          <defs>
                            <linearGradient id="gradient">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">ETB</span>
                        </div>
                      </div>
                    </div>

                    {/* Currency Tabs */}
                    <div className="flex gap-2">
                      {currencies.map((curr) => (
                        <button
                          key={curr.code}
                          onClick={() => setSelectedCurrency(curr.code)}
                          className={`flex-1 py-2 px-2 sm:px-3 rounded-lg transition-all text-xs sm:text-sm ${
                            selectedCurrency === curr.code
                              ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                              : "bg-gray-700 text-gray-400 hover:text-white"
                          }`}
                        >
                          <span className="text-base sm:text-lg mr-1">{curr.flag}</span>
                          <span className="font-medium">{curr.code}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="bg-gray-800/50 rounded-lg sm:rounded-xl p-3 sm:p-4 mb-3 sm:mb-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 text-xs">Sample Activity</span>
                      <span className="text-yellow-400 text-xs font-bold">DEMO DATA</span>
                    </div>
                    <div className="h-16 sm:h-20 flex items-end gap-1">
                      {[30, 45, 35, 50, 40, 55, 45, 60, 50, 65, 55, 70].map((height, i) => (
                        <div
                          key={i}
                          className="flex-1 bg-gradient-to-t from-green-600 to-emerald-400 rounded-t opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Transactions */}
                  <div className="space-y-2">
                    {transactions.map((tx, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-800/50 rounded-lg p-2 sm:p-3 border border-gray-700 flex items-center justify-between"
                      >
                        <div className="flex items-center gap-2 sm:gap-3">
                          <div
                            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center ${
                              tx.type === "in" ? "bg-green-900/50" : "bg-red-900/50"
                            }`}
                          >
                            {tx.type === "in" ? (
                              <ArrowDownRight size={14} className="sm:w-4 sm:h-4 text-green-400" />
                            ) : (
                              <ArrowUpRight size={14} className="sm:w-4 sm:h-4 text-red-400" />
                            )}
                          </div>
                          <div>
                            <p className="text-white text-xs sm:text-sm font-medium">{tx.desc}</p>
                            <p className="text-gray-500 text-xs">{tx.time}</p>
                          </div>
                        </div>
                        <span
                          className={`font-bold text-xs sm:text-sm ${
                            tx.type === "in" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mt-3 sm:mt-4">
                    <button className="py-2 px-3 sm:px-4 bg-gray-700 text-gray-400 rounded-lg text-xs sm:text-sm font-medium cursor-not-allowed">
                      Send (Soon)
                    </button>
                    <button className="py-2 px-3 sm:px-4 bg-gray-700 text-gray-400 rounded-lg text-xs sm:text-sm font-medium cursor-not-allowed">
                      Request (Soon)
                    </button>
                  </div>
                </div>

                {/* Floating Badges */}
                <div className="absolute -top-3 sm:-top-4 -right-3 sm:-right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold shadow-xl flex items-center gap-2">
                  <Activity size={12} className="sm:w-3.5 sm:h-3.5 animate-pulse" />
                  Beta
                </div>

                <div className="absolute -bottom-3 sm:-bottom-4 -left-3 sm:-left-4 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-xl border border-gray-200 flex items-center gap-2">
                  <Target size={14} className="sm:w-4 sm:h-4 text-green-600" />
                  <span className="text-xs sm:text-sm font-semibold text-gray-900">Founder Built</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-block px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-4">
              UNDER DEVELOPMENT
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Planned Features</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Built with Ethiopian customers in mind, funded by passion
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                  activeService === idx
                    ? "border-green-500 bg-gradient-to-br from-green-50 to-emerald-50"
                    : "border-gray-200 hover:border-green-300 bg-white"
                }`}
                onClick={() => setActiveService(idx)}
              >
                <div className="absolute -top-2 sm:-top-3 right-4 sm:right-6 px-2 sm:px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 text-white text-xs font-bold rounded-full">
                  {service.badge}
                </div>

                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}
                >
                  <service.icon size={24} className="sm:w-7 sm:h-7 text-white" />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <ChevronRight size={14} className="sm:w-4 sm:h-4 text-green-500 flex-shrink-0" />
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {activeService === idx && (
                  <div className="absolute -bottom-1 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-12 sm:w-16 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why Join Early?</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600">
              Be part of something built differently
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="group p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={20} className="sm:w-6 sm:h-6 text-green-600" />
                </div>
                <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-green-600 font-medium">{benefit.metric}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Launch Timeline</h2>
            <p className="text-green-100 text-sm sm:text-base">Building in public, one step at a time</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
            {milestones.map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="text-3xl sm:text-4xl md:text-5xl font-bold mb-1 sm:mb-2 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base lg:text-lg font-medium text-green-100 drop-shadow">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
}