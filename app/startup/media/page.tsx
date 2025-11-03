"use client";

import { useState } from "react";
import {
  Clapperboard,
  Users,
  Video,
  Instagram,
  Podcast,
  Download,
  ArrowRight,
  Mail,
  Phone,
} from "lucide-react";

type Update = { title: string; date: string; desc?: string };

export default function MediaPage() {
  const services = [
    {
      id: "video",
      title: "Video Production",
      bullets: ["Short-form (Reels/Shorts)", "Series & Documentaries", "Brand Commercials"],
      icon: Video,
    },
    {
      id: "social",
      title: "Social Media",
      bullets: ["Content Strategy", "Community Mgmt", "Influencer Campaigns"],
      icon: Instagram,
    },
    {
      id: "audio",
      title: "Podcasts & Audio",
      bullets: ["Podcast Production", "Audio Storytelling", "Sound Design"],
      icon: Podcast,
    },
  ];

  const updates: Update[] = [
    { title: "Amibara Media Studio Launch", date: "Jul 2025", desc: "New creative studio in Awash7 supporting brands." },
    { title: "Learning Hub Content Series", date: "May 2025", desc: "Edutainment series for Amibara Learning Hub." },
    { title: "Fintech Promo Campaign", date: "Mar 2025", desc: "Regional campaign supporting Amibara Fintech rollout." },
  ];

  const [isDownloading, setIsDownloading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<null | "idle" | "sending" | "success" | "error">(null);

  const downloadMediaKit = () => {
    setIsDownloading(true);
    setTimeout(() => {
      // replace with actual link in production
      const link = document.createElement("a");
      link.href = "/Amibara_Global_PLC_WhitePaper.pdf";
      link.download = "Amibara_Media_Kit.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      setIsDownloading(false);
    }, 800);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, subject: "Amibara Media Inquiry" }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus(null), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 text-gray-900">
      {/* NAV */}
      <header className="sticky top-0 bg-white/60 backdrop-blur-sm z-40 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white">
              <Clapperboard size={18} />
            </div>
            <div>
              <div className="font-semibold">Amibara Media</div>
              <div className="text-xs text-gray-500">Amibara Global PLC</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-purple-600">Services</a>
            <a href="#updates" className="hover:text-purple-600">Updates</a>
            <a href="#contact" className="hover:text-purple-600">Contact</a>
            <button
              onClick={downloadMediaKit}
              className="ml-2 inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm"
            >
              <Download size={14} /> Media Kit
            </button>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <main className="max-w-6xl mx-auto px-4 py-16">
        <section className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 bg-purple-50 text-purple-700 px-3 py-1 rounded-full text-sm mb-4">
              <Clapperboard size={14} /> Ethiopia's Digital Storyteller
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Amibara <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Media</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600">
              Creative production and digital communications for brands, startups, and communities — video, social, and audio that builds audience and impact.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <a href="#services" className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                Explore Services <ArrowRight size={16} />
              </a>

              <button
                onClick={downloadMediaKit}
                className="inline-flex items-center gap-2 px-4 py-3 rounded-lg border border-gray-200 bg-white text-sm"
              >
                {isDownloading ? "Preparing..." : <>Download Media Kit <Download size={14} /></>}
              </button>
            </div>

            {/* Quick stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold">1M+</div>
                <div className="text-xs text-gray-500">Followers</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold">50M+</div>
                <div className="text-xs text-gray-500">Views</div>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm text-center">
                <div className="text-2xl font-bold">15+</div>
                <div className="text-xs text-gray-500">Partnerships</div>
              </div>
            </div>
          </div>

          {/* Right card - channels */}
          <aside className="hidden lg:block">
            <div className="bg-white rounded-2xl shadow p-6">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-white mb-4">
                  <Clapperboard size={36} />
                </div>
                <h3 className="text-lg font-semibold">Amibara Media — Across Platforms</h3>
                <p className="text-sm text-gray-500 mt-1">YouTube · Instagram · TikTok · Podcasts · Telegram</p>

                <div className="grid grid-cols-2 gap-3 mt-6 w-full">
                  <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-red-500 flex items-center justify-center text-white"><svg/></div>
                    <div>
                      <div className="font-semibold text-sm">YouTube</div>
                      <div className="text-xs text-gray-500">350K+</div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-pink-500 flex items-center justify-center text-white"><svg/></div>
                    <div>
                      <div className="font-semibold text-sm">Instagram</div>
                      <div className="text-xs text-gray-500">450K+</div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-black flex items-center justify-center text-white"><svg/></div>
                    <div>
                      <div className="font-semibold text-sm">TikTok</div>
                      <div className="text-xs text-gray-500">150K+</div>
                    </div>
                  </div>

                  <div className="p-3 bg-gray-50 rounded-lg flex items-center gap-3">
                    <div className="w-10 h-10 rounded-md bg-sky-500 flex items-center justify-center text-white"><svg/></div>
                    <div>
                      <div className="font-semibold text-sm">Telegram</div>
                      <div className="text-xs text-gray-500">50K+</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </aside>
        </section>

        {/* SERVICES */}
        <section id="services" className="mt-20">
          <h2 className="text-2xl font-bold">Our Services</h2>
          <p className="text-gray-600 mt-2">Core capabilities for brands and creators.</p>

          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {services.map((s) => (
              <div key={s.id} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-purple-50 flex items-center justify-center text-purple-600">
                    <s.icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold">{s.title}</h3>
                    <ul className="mt-3 text-sm text-gray-600 space-y-1">
                      {s.bullets.map((b) => (<li key={b}>• {b}</li>))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* UPDATES */}
        <section id="updates" className="mt-20">
          <h2 className="text-2xl font-bold">Latest Updates</h2>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            {updates.map((u) => (
              <article key={u.title} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-xs text-purple-600 font-semibold">{u.date}</div>
                <h4 className="font-semibold mt-2">{u.title}</h4>
                <p className="text-sm text-gray-600 mt-2">{u.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-sm max-w-2xl mx-auto">
            <h2 className="text-xl font-bold">Contact & Collaboration</h2>
            <p className="text-gray-600 mt-2">Reach out to discuss projects, partnerships, or media inquiries.</p>

            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Full name"
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
                <input
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email"
                  type="email"
                  className="w-full border rounded-lg px-4 py-2"
                  required
                />
              </div>

              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Message"
                rows={4}
                className="w-full border rounded-lg px-4 py-2"
                required
              />

              <div className="flex items-center gap-4">
                <button type="submit" className="px-5 py-3 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                  Send Message
                </button>

                <div className="text-sm text-gray-500">
                  {status === "sending" && "Sending..."}
                  {status === "success" && "Message sent — we’ll respond soon."}
                  {status === "error" && "Something went wrong. Please try again."}
                </div>
              </div>

              <div className="mt-4 flex flex-col sm:flex-row gap-4 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone size={16} /> <span>0987025788 / 0711625120</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={16} /> <span>contact@amibara.global</span>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-600">© {new Date().getFullYear()} Amibara Global PLC</div>
          <div className="text-sm text-gray-600">Co-founder & CEO: Mohammed Hussen</div>
        </div>
      </footer>
    </div>
  );
}
 