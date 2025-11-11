"use client";
import { Mail, Phone, MapPin, Github, Linkedin, Globe } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-50 via-white to-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand & Info */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
              Amibara Global PLC
            </h3>
            <p className="text-sm text-gray-600 mb-3">
              Building tomorrow’s businesses today.
            </p>
            <p className="text-xs text-gray-500">
              Co-founder & CEO:{" "}
              <span className="font-semibold text-gray-700">
                Mohammed Hussen
              </span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-gray-600 hover:text-blue-700 transition-all duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/#startups"
                  className="text-sm text-gray-600 hover:text-blue-700 transition-all duration-200"
                >
                  Our Startups
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-gray-600 hover:text-blue-700 transition-all duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3 uppercase tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-blue-500" />
                Samara, Awash7
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} className="text-blue-500" />
                0987025788 / 0711625120
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} className="text-blue-500" />
                <Link
                  href="mailto:info@amibara.global"
                  className="hover:text-blue-700 transition-all duration-200"
                >
                  info@amibara.global
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-center   gap-2">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-gray-700">
              Amibara Global PLC
            </span>
            . All rights reserved.
          </p>

          <p className="text-xs text-gray-500 text-center sm:text-right">
            Designed by{" "}
            <Link
              href="https://github.com/awash-dev"
              className="font-medium text-blue-700 hover:underline"
            >
              Awash Dev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
