import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a174e] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-4">
              <img src="/logo.png" alt="OponMeta Logo" className="h-8 w-8" />
              <span className="ml-2 text-xl font-extrabold uppercase tracking-wide" style={{ color: '#FFD700', letterSpacing: '0.05em' }}>
                OPONMETA
              </span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering individuals and organizations through innovative education, mentorship, and skill development programs.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com/oponmeta" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/oponmeta" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com/oponmeta" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com/company/oponmeta" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com/@oponmeta" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-gray-300 hover:text-[#FFD700] transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <button
                onClick={() => {navigator.clipboard.writeText(window.location.origin);}}
                className="ml-2 px-2 py-1 bg-[#FFD700] text-[#0a174e] rounded hover:bg-yellow-400 text-xs font-semibold transition-colors"
                aria-label="Share OponMeta"
                title="Copy site link to clipboard"
              >
                Share OponMeta
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/programme" className="text-gray-300 hover:text-white transition-colors">
                  Programme
                </Link>
              </li>
              <li>
                <Link to="/mentorship" className="text-gray-300 hover:text-white transition-colors">
                  Mentorship
                </Link>
              </li>
              <li>
                <Link to="/workshops" className="text-gray-300 hover:text-white transition-colors">
                  Workshops
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Learning Resources
                </Link>
              </li>
              <li>
                <Link to="/community" className="text-gray-300 hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[#FFD700]">Contact & Newsletter</h3>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2 text-[#FFD700]" />
                <span>info@oponmeta.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2 text-[#FFD700]" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start text-gray-300">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 text-[#FFD700] flex-shrink-0" />
                <span>123 Education Street, Tech City, TC 12345</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-2 text-[#FFD700]">Stay Updated</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-3 py-2 text-sm text-gray-900 bg-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#FFD700]"
                />
                <button className="px-4 py-2 bg-[#FFD700] text-[#0a174e] rounded-r-md hover:bg-yellow-400 transition-colors">
                  <Send className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 OponMeta. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Accessibility
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 