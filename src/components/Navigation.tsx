
import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Zap } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'portfolio', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      setActiveSection(currentSection || '');
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'glass-luxury border-b border-[hsl(var(--elegant-purple))]/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Luxury Logo */}
          <div className="flex-shrink-0 group animate-fade-in">
            <button 
              onClick={() => handleNavClick('#hero')}
              className="flex items-center space-x-4 focus:outline-none"
            >
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[hsl(var(--elegant-purple))] via-[hsl(var(--elegant-blue))] to-[hsl(var(--elegant-purple))] rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-110 elegant-hover">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-gradient-to-r from-[hsl(var(--elegant-blue))] to-[hsl(var(--elegant-purple))] rounded-full opacity-70 football-accent"></div>
              </div>
              <div className="hidden sm:block">
                <h1 className="text-2xl font-display font-bold text-gradient animate-gradient-shift">
                  M. Kabilan
                </h1>
                <p className="text-xs text-muted-foreground font-elegant">Tech & Football ⚽</p>
              </div>
            </button>
          </div>

          {/* Premium Desktop Navigation */}
          <div className="hidden md:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center space-x-2 glass-elevated rounded-2xl px-8 py-4 border border-[hsl(var(--elegant-purple))]/20">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`relative group px-6 py-3 text-sm font-medium rounded-xl transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.href.replace('#', '') 
                      ? 'text-white bg-gradient-to-r from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] shadow-lg' 
                      : 'text-muted-foreground hover:text-[hsl(var(--elegant-purple))]'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="relative z-10 font-elegant">{item.label}</span>
                  {activeSection !== item.href.replace('#', '') && (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--elegant-purple))]/10 to-[hsl(var(--elegant-blue))]/10 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100"></div>
                      <div className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] group-hover:w-8 group-hover:left-1/2 group-hover:-translate-x-1/2 transition-all duration-300 rounded-full"></div>
                    </>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Luxury Mobile menu button */}
          <div className="md:hidden animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-14 h-14 glass-elevated rounded-2xl flex items-center justify-center text-[hsl(var(--elegant-purple))] elegant-hover border border-[hsl(var(--elegant-purple))]/20 overflow-hidden group"
            >
              <div className="relative z-10">
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 transform transition-transform duration-300 rotate-180 group-hover:scale-110" />
                ) : (
                  <Menu className="w-6 h-6 transform transition-transform duration-300 group-hover:scale-110" />
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--elegant-purple))]/5 to-[hsl(var(--elegant-blue))]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Luxury Mobile Navigation */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}>
          <div className="glass-luxury rounded-2xl mx-4 my-4 border border-[hsl(var(--elegant-purple))]/30 shadow-2xl animate-scale-elegant">
            <div className="px-8 py-6 space-y-3">
              {navItems.map((item, index) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className={`group flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 w-full text-left transform hover:translate-x-2 elegant-hover ${
                    activeSection === item.href.replace('#', '')
                      ? 'text-white bg-gradient-to-r from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] shadow-lg'
                      : 'text-muted-foreground hover:text-[hsl(var(--elegant-purple))] hover:bg-[hsl(var(--elegant-purple))]/5'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeSection === item.href.replace('#', '')
                      ? 'bg-white'
                      : 'bg-gradient-to-r from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] opacity-0 group-hover:opacity-100'
                  }`}></div>
                  <span className="font-elegant font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
