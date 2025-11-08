import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold">
              <span className="text-yellow-500">blink</span>
              <span className="text-green-500">it</span>
            </h1>
          </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's last minute app - Get groceries, fruits & vegetables, and more delivered in 10 minutes.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-yellow-400 cursor-pointer transition">About Us</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Careers</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Blog</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Press</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Help & Support</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="hover:text-yellow-400 cursor-pointer transition">FAQ</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Contact Us</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Terms & Conditions</li>
              <li className="hover:text-yellow-400 cursor-pointer transition">Privacy Policy</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4 text-white">Follow Us</h4>
            <div className="flex gap-4">
              <div className="p-3 bg-gray-800 rounded-xl hover:bg-yellow-500 transition cursor-pointer group">
                <Facebook className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
              </div>
              <div className="p-3 bg-gray-800 rounded-xl hover:bg-yellow-500 transition cursor-pointer group">
                <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
              </div>
              <div className="p-3 bg-gray-800 rounded-xl hover:bg-yellow-500 transition cursor-pointer group">
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
              </div>
              <div className="p-3 bg-gray-800 rounded-xl hover:bg-yellow-500 transition cursor-pointer group">
                <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>© 2024 Blinkit. All rights reserved. Made with ❤️ in India</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
