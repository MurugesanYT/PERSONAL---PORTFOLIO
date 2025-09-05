import React, { useState, useEffect } from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrolled / maxScroll) * 100;
      
      setScrollProgress(Math.min(progress, 100));
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50 animate-fade-in">
      {/* Floating action button with progress ring */}
      <button
        onClick={scrollToTop}
        className="group relative w-16 h-16 glass-luxury rounded-2xl elegant-hover border border-[hsl(var(--elegant-purple))]/30 flex items-center justify-center overflow-hidden"
        aria-label="Back to top"
      >
        {/* Progress ring background */}
        <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 64 64">
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="2"
            opacity="0.3"
          />
          <circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="url(#progress-gradient)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 28}`}
            strokeDashoffset={`${2 * Math.PI * 28 * (1 - scrollProgress / 100)}`}
            className="transition-all duration-300"
          />
          <defs>
            <linearGradient id="progress-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="hsl(var(--elegant-purple))" />
              <stop offset="100%" stopColor="hsl(var(--elegant-blue))" />
            </linearGradient>
          </defs>
        </svg>

        {/* Icon container */}
        <div className="relative z-10 flex items-center justify-center">
          <ArrowUp className="w-6 h-6 text-[hsl(var(--elegant-purple))] group-hover:text-[hsl(var(--elegant-blue))] group-hover:-translate-y-1 transition-all duration-300" />
          
          {/* Sparkle effects */}
          <Sparkles className="absolute -top-1 -right-1 w-3 h-3 text-[hsl(var(--elegant-blue))] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
          <Sparkles className="absolute -bottom-1 -left-1 w-3 h-3 text-[hsl(var(--elegant-purple))] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" style={{ animationDelay: '0.2s' }} />
        </div>

        {/* Glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--elegant-purple))]/10 to-[hsl(var(--elegant-blue))]/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {/* Elegant tooltip */}
      <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 pointer-events-none">
        <div className="glass-elevated px-4 py-2 rounded-lg border border-[hsl(var(--elegant-purple))]/20 whitespace-nowrap">
          <span className="text-sm font-elegant text-muted-foreground">Back to Top</span>
          <div className="absolute top-full left-1/2 transform -translate-x-1/2">
            <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-[hsl(var(--card))]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackToTop;