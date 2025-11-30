import React from 'react';
import { Heart, Code, ArrowUp, Sparkles, Coffee } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-16 px-6 relative overflow-hidden">
      {/* Elegant background pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--elegant-purple)) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main footer content */}
        <div className="glass-luxury rounded-2xl p-12 border border-[hsl(var(--elegant-purple))]/20">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            {/* Brand section */}
            <div className="text-center md:text-left animate-fade-in">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] rounded-xl flex items-center justify-center shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-display font-bold text-gradient">M. Kabilan</h3>
                  <p className="text-sm text-muted-foreground font-elegant">Tech & Football</p>
                </div>
              </div>
              <p className="text-muted-foreground font-elegant leading-relaxed">
                Crafting digital experiences with passion and precision.
              </p>
            </div>

            {/* Made with love section */}
            <div className="text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="flex items-center justify-center gap-3 text-muted-foreground mb-4 group">
                <span className="font-elegant">Crafted with</span>
                <div className="relative">
                  <Heart className="w-5 h-5 text-red-500 fill-current animate-pulse" />
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-400 rounded-full animate-ping"></div>
                </div>
                <span className="font-elegant">and</span>
                <Coffee className="w-5 h-5 text-[hsl(var(--elegant-charcoal))] group-hover:animate-bounce transition-transform" />
                <span className="font-elegant">and</span>
                <Code className="w-5 h-5 text-[hsl(var(--elegant-blue))] group-hover:rotate-12 transition-transform" />
              </div>
              <div className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 text-[hsl(var(--elegant-purple))] animate-pulse" />
                <span className="font-elegant text-sm">by M. Kabilan</span>
                <Sparkles className="w-4 h-4 text-[hsl(var(--elegant-blue))] animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>

            {/* Back to top section */}
            <div className="text-center md:text-right animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-3 glass-elevated px-6 py-4 rounded-xl elegant-hover border border-[hsl(var(--elegant-purple))]/20 text-[hsl(var(--elegant-purple))] font-medium"
              >
                <span className="font-elegant">Back to Top</span>
                <div className="relative">
                  <div className="w-8 h-8 glass rounded-lg flex items-center justify-center group-hover:bg-[hsl(var(--elegant-purple))]/10 transition-all duration-300">
                    <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--elegant-purple))]/20 to-[hsl(var(--elegant-blue))]/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </button>
            </div>
          </div>

          {/* Copyright section */}
          <div className="mt-12 pt-8 border-t border-border/50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-muted-foreground animate-fade-in">
                <span className="font-elegant">&copy; 2025 M. Kabilan. All rights reserved.</span>
              </div>
              
              <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-2 h-2 bg-[hsl(var(--elegant-purple))] rounded-full animate-pulse"></div>
                <span className="text-xs text-muted-foreground font-elegant">Designed for Excellence</span>
                <div className="w-2 h-2 bg-[hsl(var(--elegant-blue))] rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;