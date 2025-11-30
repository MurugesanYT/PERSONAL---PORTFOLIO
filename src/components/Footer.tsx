import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 text-center text-xs md:text-sm text-gray-400 border-t border-gray-200 bg-white">
      <p>© {new Date().getFullYear()} M. Kabilan. Crafted with precision and passion.</p>
    </footer>
  );
};

export default Footer;
