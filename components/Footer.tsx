// components/Footer.tsx
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand & Info */}
          <div>
            <h3 className="text-lg font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent mb-3">
              Amibara Global PLC
            </h3>
            <p className="text-sm text-gray-600 mb-2">
              Building tomorrow's businesses today.
            </p>
            <p className="text-xs text-gray-500">
              Co-founder & CEO: <span className="font-semibold text-gray-700">Mohammed Hussen</span>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#startups" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Our Startups
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 mb-3">Get in Touch</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <MapPin size={16} className="text-gray-400" />
                Samara, Awash7
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Phone size={16} className="text-gray-400" />
                0987025788 / 0711625120
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Mail size={16} className="text-gray-400" />
                <a href="mailto:info@amibara.global" className="hover:text-blue-600 transition-colors">
                  info@amibara.global
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-200">
          <p className="text-center text-xs text-gray-500">
            © 2025 Amibara Global PLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;