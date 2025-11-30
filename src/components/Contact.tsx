import React from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import FadeIn from './FadeIn';

const Contact = () => {
  return (
    <section className="py-32 px-6 bg-[hsl(var(--background))] relative" id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 tracking-tighter mb-8">Let's build the <br/><span className="text-gray-400">impossible.</span></h2>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto">I'm always interested in hearing about new projects and opportunities.</p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-12">
            <a href="mailto:kabilan@example.com" className="group relative px-8 py-4 bg-[hsl(var(--primary))] text-white rounded-full overflow-hidden hover:scale-105 transition-transform">
              <span className="relative z-10 font-medium flex items-center gap-2"><Mail size={18} />kabilan@example.com</span>
              <div className="absolute inset-0 bg-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out" />
            </a>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm border border-gray-100"><Github size={20} className="text-gray-900" /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm border border-gray-100"><Linkedin size={20} className="text-gray-900" /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-4 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-sm border border-gray-100"><Twitter size={20} className="text-gray-900" /></a>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Contact;
