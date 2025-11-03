// app/contact/page.tsx
"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({ name: "", email: "", message: "" });
    
    setTimeout(() => setIsSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Side - Info */}
          <div className="lg:sticky lg:top-24">
            <div className="mb-8">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
                Get in touch
              </h1>
              <p className="text-xl text-gray-600">
                Have a question or want to work together? We'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-start gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                    <Phone className="text-blue-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a href="tel:0987025788" className="text-gray-600 hover:text-blue-600 transition-colors block">
                      +251 987 025 788
                    </a>
                    <a href="tel:0711625120" className="text-gray-600 hover:text-blue-600 transition-colors block">
                      +251 711 625 120
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0 group-hover:bg-purple-600 transition-colors">
                    <Mail className="text-purple-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:contact@amibara.global" 
                      className="text-gray-600 hover:text-purple-600 transition-colors"
                    >
                      contact@amibara.global
                    </a>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="flex items-start gap-4 p-5 rounded-2xl border-2 border-gray-100 hover:border-pink-200 hover:bg-pink-50/50 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-600 transition-colors">
                    <MapPin className="text-pink-600 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                    <p className="text-gray-600">Samara, Awash7</p>
                    <p className="text-gray-600">Ethiopia</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200">
              <p className="text-sm text-gray-600 leading-relaxed">
                <span className="font-semibold text-gray-900">Response time:</span> We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:pt-16">
            <div className="bg-white border-2 border-gray-200 rounded-3xl p-8 md:p-10 shadow-xl shadow-gray-200/50">
              
              {isSuccess && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-200 rounded-2xl flex items-start gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
                  <CheckCircle2 className="text-green-600 flex-shrink-0 mt-0.5" size={20} />
                  <div>
                    <p className="text-green-900 font-semibold text-sm">Message sent successfully!</p>
                    <p className="text-green-700 text-sm">We'll get back to you as soon as possible.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div className="group">
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email Input */}
                <div className="group">
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all text-gray-900 placeholder:text-gray-400"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Message Textarea */}
                <div className="group">
                  <label 
                    htmlFor="message" 
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3.5 bg-gray-50 border-2 border-gray-200 rounded-xl focus:bg-white focus:border-blue-500 focus:outline-none transition-all resize-none text-gray-900 placeholder:text-gray-400"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gray-900 text-white rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-gray-900/10 hover:shadow-xl hover:shadow-gray-900/20"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;