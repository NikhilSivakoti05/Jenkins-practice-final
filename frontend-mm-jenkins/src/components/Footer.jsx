import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">SG TECH</h2>
          <p className="text-sm leading-relaxed">
            Empowering innovation with next-gen digital solutions. We build scalable, secure, and impactful technology for modern businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-orange-400 transition">Home</a></li>
            <li><a href="/about" className="hover:text-orange-400 transition">About Us</a></li>
            <li><a href="/services" className="hover:text-orange-400 transition">Services</a></li>
            <li><a href="/contact" className="hover:text-orange-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/faq" className="hover:text-orange-400 transition">FAQs</a></li>
            <li><a href="/privacy" className="hover:text-orange-400 transition">Privacy Policy</a></li>
            <li><a href="/terms" className="hover:text-orange-400 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-orange-400 transition"><Facebook size={20} /></a>
            <a href="#" className="hover:text-orange-400 transition"><Twitter size={20} /></a>
            <a href="#" className="hover:text-orange-400 transition"><Instagram size={20} /></a>
            <a href="#" className="hover:text-orange-400 transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SG TECH. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
