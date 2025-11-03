"use client";

import {
  CreditCard,
  TrendingUp,
  Shield,
  Users,
  Wallet,
  BarChart3,
  Building2,
  Banknote,
  PiggyBank,
  Target,
  Globe,
  ArrowRight,
  Download,
  ChevronRight,
  Zap,
  LineChart,
  DollarSign,
  Coins,
  ArrowUpRight,
  ArrowDownRight,
  Activity,
  Lock,
  Gem,
} from "lucide-react";
import { useState } from "react";

const FintechInvestmentPage = () => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [selectedCurrency, setSelectedCurrency] = useState("ETB");

  const capabilities = [
    { icon: DollarSign, label: "Total Assets", value: "$2.5M", trend: "+28%" },
    { icon: Coins, label: "Active Investments", value: "15", trend: "+5" },
    { icon: Activity, label: "Daily Volume", value: "$50K", trend: "+12%" },
  ];

  const services = [
    {
      icon: Coins,
      title: "Digital Assets",
      description: "Multi-currency wallet with crypto support",
      features: ["ETB, USD, EUR Support", "Crypto Integration", "Instant Exchange"],
      color: "from-green-500 to-emerald-600",
      badge: "Live",
    },
    {
      icon: LineChart,
      title: "Smart Investments",
      description: "AI-powered investment opportunities",
      features: ["Auto-Invest", "Risk Management", "Portfolio Optimization"],
      color: "from-emerald-500 to-teal-600",
      badge: "25% APY",
    },
    {
      icon: Shield,
      title: "Secure Banking",
      description: "Bank-grade security for all transactions",
      features: ["256-bit Encryption", "2FA Protection", "Insurance Coverage"],
      color: "from-teal-500 to-green-600",
      badge: "Protected",
    },
  ];

  const currencies = [
    { code: "ETB", symbol: "ብር", rate: 1, flag: "🇪🇹" },
    { code: "USD", symbol: "$", rate: 0.018, flag: "🇺🇸" },
    { code: "EUR", symbol: "€", rate: 0.017, flag: "🇪🇺" },
  ];

  const transactions = [
    { type: "in", amount: "+$2,450", desc: "Investment Return", time: "2 min ago" },
    { type: "out", amount: "-$1,200", desc: "Startup Funding", time: "1 hour ago" },
    { type: "in", amount: "+$5,800", desc: "Revenue Share", time: "3 hours ago" },
  ];

  const handleDownload = () => {
    setIsDownloading(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "/downloads/amibara-fintech.apk";
      link.download = "amibara-fintech.apk";
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
  }) => {
    const baseStyles =
      "px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center gap-2";
    const variants = {
      primary:
        "bg-gradient-to-r from-green-600 to-emerald-600 text-white hover:shadow-xl hover:scale-105 hover:shadow-green-500/25",
      secondary:
        "bg-white/10 backdrop-blur text-white border border-white/20 hover:bg-white/20",
      outline:
        "border-2 border-gray-200 text-gray-700 hover:border-green-500 hover:text-green-500",
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
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50/30 to-teal-50/20" />
          <div className="absolute top-20 left-20 w-72 h-72 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-emerald-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full border border-green-200">
                <Coins size={16} className="text-green-600" />
                <span className="text-sm font-semibold text-green-700">
                  Digital Finance & Investment Platform
                </span>
              </div>

              <div>
                <h1 className="text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Amibara
                  <span className="block text-transparent bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 bg-clip-text">
                    Fintech
                  </span>
                </h1>
                <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                  Your gateway to digital assets and smart investments. Build wealth, 
                  fund innovation, and secure your financial future.
                </p>
              </div>

              {/* Live Financial Stats */}
              <div className="grid grid-cols-3 gap-4">
                {capabilities.map((item, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-4 border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg flex items-center justify-center">
                        <item.icon size={16} className="text-green-600" />
                      </div>
                      <span className={`text-xs font-bold ${
                        item.trend.startsWith('+') ? 'text-green-600' : 'text-red-600'
                      }`}>
                        {item.trend}
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                      {item.value}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Button onClick={handleDownload} disabled={isDownloading}>
                  <Wallet size={20} />
                  {isDownloading ? "Downloading..." : "Get Wallet App"}
                </Button>
                <Button variant="outline">
                  Start Investing
                  <ArrowRight size={20} />
                </Button>
              </div>
            </div>

            {/* Financial Dashboard Visual */}
            <div className="relative lg:block hidden">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-400 rounded-3xl blur-3xl opacity-20" />
                
                {/* Main Dashboard */}
                <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 shadow-2xl">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center">
                        <DollarSign size={20} className="text-white" />
                      </div>
                      <div>
                        <p className="text-white font-bold">Total Balance</p>
                        <p className="text-green-400 text-xs">All Currencies</p>
                      </div>
                    </div>
                    <Lock size={16} className="text-green-400" />
                  </div>

                  {/* Balance Display */}
                  <div className="bg-gray-800/50 rounded-2xl p-6 mb-6 border border-gray-700">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-4xl font-bold text-white">$485,250</p>
                        <p className="text-green-400 text-sm mt-1">+$12,450 (2.6%) today</p>
                      </div>
                      <div className="w-16 h-16 relative">
                        <svg className="w-16 h-16 transform -rotate-90">
                          <circle cx="32" cy="32" r="28" stroke="#374151" strokeWidth="8" fill="none" />
                          <circle cx="32" cy="32" r="28" stroke="url(#gradient)" strokeWidth="8" fill="none" 
                            strokeDasharray={`${2 * Math.PI * 28 * 0.75} ${2 * Math.PI * 28 * 0.25}`} />
                          <defs>
                            <linearGradient id="gradient">
                              <stop offset="0%" stopColor="#10b981" />
                              <stop offset="100%" stopColor="#059669" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-white text-xs font-bold">75%</span>
                        </div>
                      </div>
                    </div>

                    {/* Currency Tabs */}
                    <div className="flex gap-2">
                      {currencies.map((curr) => (
                        <button
                          key={curr.code}
                          onClick={() => setSelectedCurrency(curr.code)}
                          className={`flex-1 py-2 px-3 rounded-lg transition-all ${
                            selectedCurrency === curr.code
                              ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white'
                              : 'bg-gray-700 text-gray-400 hover:text-white'
                          }`}
                        >
                          <span className="text-lg mr-1">{curr.flag}</span>
                          <span className="text-sm font-medium">{curr.code}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Mini Chart */}
                  <div className="bg-gray-800/50 rounded-xl p-4 mb-4 border border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gray-400 text-xs">Portfolio Performance</span>
                      <span className="text-green-400 text-xs font-bold">+28% MTD</span>
                    </div>
                    <div className="h-20 flex items-end gap-1">
                      {[40, 65, 45, 70, 55, 80, 70, 85, 75, 90, 85, 95].map((height, i) => (
                        <div key={i} className="flex-1 bg-gradient-to-t from-green-600 to-emerald-400 rounded-t opacity-80"
                          style={{ height: `${height}%` }} />
                      ))}
                    </div>
                  </div>

                  {/* Recent Transactions */}
                  <div className="space-y-2">
                    {transactions.map((tx, idx) => (
                      <div key={idx} className="bg-gray-800/50 rounded-lg p-3 border border-gray-700 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            tx.type === 'in' ? 'bg-green-900/50' : 'bg-red-900/50'
                          }`}>
                            {tx.type === 'in' ? 
                              <ArrowDownRight size={16} className="text-green-400" /> :
                              <ArrowUpRight size={16} className="text-red-400" />
                            }
                          </div>
                          <div>
                            <p className="text-white text-sm font-medium">{tx.desc}</p>
                            <p className="text-gray-500 text-xs">{tx.time}</p>
                          </div>
                        </div>
                        <span className={`font-bold text-sm ${
                          tx.type === 'in' ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {tx.amount}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-3 mt-4">
                    <button className="py-2 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                      Send Money
                    </button>
                    <button className="py-2 px-4 bg-gray-700 text-white rounded-lg text-sm font-medium hover:bg-gray-600 transition-all">
                      Request
                    </button>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-xl flex items-center gap-2">
                  <Activity size={14} className="animate-pulse" />
                  Live Market
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white px-4 py-2 rounded-full shadow-xl border border-gray-200 flex items-center gap-2">
                  <Gem size={16} className="text-green-600" />
                  <span className="text-sm font-semibold text-gray-900">Premium</span>
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
            <h2 className="text-4xl font-bold text-gray-900">Financial Services</h2>
            <p className="mt-4 text-xl text-gray-600">
              Complete digital banking and investment solutions
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group relative p-8 rounded-2xl border-2 transition-all duration-300 cursor-pointer
                  ${
                    activeService === idx
                      ? "border-green-500 bg-gradient-to-br from-green-50 to-emerald-50"
                      : "border-gray-200 hover:border-green-300 bg-white"
                  }`}
                onClick={() => setActiveService(idx)}
              >
                {/* Badge */}
                <div className="absolute -top-3 right-6 px-3 py-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white text-xs font-bold rounded-full">
                  {service.badge}
                </div>

                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
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
                      <ChevronRight size={16} className="text-green-500" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {activeService === idx && (
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Assets Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-green-50/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Digital Asset Management</h2>
            <p className="mt-4 text-xl text-gray-600">
              Secure, transparent, and profitable
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Coins, title: "Multi-Currency", metric: "ETB, USD, EUR, Crypto" },
              { icon: Shield, title: "Bank Security", metric: "256-bit Encryption" },
              { icon: TrendingUp, title: "Smart Invest", metric: "AI-Powered Returns" },
              { icon: Zap, title: "Instant Transfer", metric: "< 1 Second" },
            ].map((benefit, idx) => (
              <div
                key={idx}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon size={24} className="text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm text-green-600 font-medium">
                  {benefit.metric}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "$10M+", label: "Total Volume" },
              { value: "50K+", label: "Active Users" },
              { value: "99.9%", label: "Uptime" },
              { value: "< 1s", label: "Transaction Speed" },
            ].map((stat, idx) => (
              <div key={idx} className="text-white">
                <div className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg">
                  {stat.value}
                </div>
                <div className="text-lg font-medium text-green-100 drop-shadow">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
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
};

export default FintechInvestmentPage;