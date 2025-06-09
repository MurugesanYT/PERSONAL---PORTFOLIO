
import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Copyright */}
          <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
            <span>&copy; 2025 M. Kabilan. All rights reserved.</span>
          </div>

          {/* Made with love */}
          <div className="flex items-center gap-2 text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            <span>and</span>
            <Code className="w-4 h-4 text-blue-400" />
            <span>by M. Kabilan</span>
          </div>
        </div>

        {/* Back to top */}
        <div className="text-center mt-8">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
          >
            <span>Back to Top</span>
            <div className="w-6 h-6 border-2 border-current rounded-full flex items-center justify-center">
              <div className="w-2 h-2 border-t-2 border-current transform rotate-45"></div>
            </div>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
