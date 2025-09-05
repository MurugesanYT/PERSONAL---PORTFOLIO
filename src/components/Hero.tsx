import React from 'react';
import { ArrowRight, ArrowDown, Code, Sparkles, Trophy, Target, Zap } from 'lucide-react';

const Hero = () => {
  const handleExploreClick = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Elegant background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-[hsl(var(--elegant-purple))]/20 to-[hsl(var(--elegant-blue))]/20 rounded-full blur-3xl animate-elegant-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-[hsl(var(--elegant-blue))]/20 to-[hsl(var(--elegant-purple))]/20 rounded-full blur-3xl animate-elegant-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            {/* Premium Greeting */}
            <div className="relative inline-block">
              <div className="glass-elevated px-8 py-4 rounded-2xl border border-[hsl(var(--elegant-purple))]/20 mb-8">
                <p className="text-lg font-elegant text-muted-foreground flex items-center gap-3">
                  <span className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></span>
                  Hello, I'm
                  <span className="text-[hsl(var(--elegant-purple))] font-semibold">Available for opportunities</span>
                </p>
              </div>
            </div>

            {/* Luxury Title */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold leading-tight">
              <span className="block text-gradient animate-gradient-shift mb-4">M. Kabilan</span>
              <span className="block text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-muted-foreground font-elegant football-accent">
                Tech Enthusiast & Creator
              </span>
            </h1>

            {/* Elegant Description */}
            <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl leading-relaxed font-elegant">
              Crafting innovative solutions at the intersection of technology and creativity. 
              Passionate about <span className="text-[hsl(var(--elegant-purple))] font-semibold">AI</span>, 
              <span className="text-[hsl(var(--elegant-blue))] font-semibold"> web development</span>, and 
              <span className="text-[hsl(var(--elegant-charcoal))] font-semibold"> digital experiences</span> that make a difference.
            </p>

            {/* Premium Skill Tags */}
            <div className="flex flex-wrap gap-3 items-center justify-center lg:justify-start">
              <div className="glass-elevated px-4 py-2 rounded-xl border border-[hsl(var(--elegant-purple))]/20 group elegant-hover">
                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-[hsl(var(--elegant-purple))] group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-sm font-elegant text-[hsl(var(--elegant-purple))]">Developer</span>
                </div>
              </div>
              <div className="glass-elevated px-4 py-2 rounded-xl border border-[hsl(var(--elegant-blue))]/20 group elegant-hover">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[hsl(var(--elegant-blue))] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-elegant text-[hsl(var(--elegant-blue))]">Innovator</span>
                </div>
              </div>
              <div className="glass-elevated px-4 py-2 rounded-xl border border-[hsl(var(--elegant-charcoal))]/20 group elegant-hover">
                <div className="flex items-center gap-2">
                  <Trophy className="w-4 h-4 text-[hsl(var(--elegant-charcoal))] group-hover:animate-bounce transition-transform duration-300" />
                  <span className="text-sm font-elegant text-[hsl(var(--elegant-charcoal))]">Athlete ⚽</span>
                </div>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 items-center lg:items-start">
              <button 
                onClick={handleExploreClick}
                className="group relative px-10 py-5 bg-gradient-to-r from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] text-white font-display font-semibold text-lg rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--elegant-blue))] to-[hsl(var(--elegant-purple))] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              
              <button 
                onClick={handleContactClick}
                className="group glass-elevated px-10 py-5 border border-[hsl(var(--elegant-purple))]/20 text-[hsl(var(--elegant-purple))] font-display font-semibold text-lg rounded-2xl elegant-hover"
              >
                <span className="flex items-center gap-3">
                  Let's Connect
                  <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Luxury Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Premium frame */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--elegant-purple))] via-[hsl(var(--elegant-blue))] to-[hsl(var(--elegant-purple))] rounded-3xl blur-lg opacity-60 group-hover:opacity-80 animate-gradient-shift"></div>
              
              {/* Glass container */}
              <div className="relative glass-luxury p-6 rounded-3xl border border-[hsl(var(--elegant-purple))]/30">
                <div className="relative">
                  <img
                    src="https://i.ibb.co/2Y3Mshgt/3d820bd3-58a4-4c1c-b447-b11043015ef8.png"
                    alt="M. Kabilan - Tech Enthusiast and Creator"
                    className="w-80 h-80 lg:w-96 lg:h-96 rounded-2xl object-cover shadow-2xl transform group-hover:scale-105 transition-all duration-500 elegant-hover"
                    loading="lazy"
                  />
                  
                  {/* Floating badges */}
                  <div className="absolute -top-3 -right-3 glass-elevated px-4 py-2 rounded-xl border border-[hsl(var(--elegant-purple))]/20 animate-elegant-float">
                    <span className="text-sm font-elegant text-[hsl(var(--elegant-purple))] font-semibold flex items-center gap-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                      Available
                    </span>
                  </div>
                  
                  <div className="absolute -bottom-3 -left-3 glass-elevated px-4 py-2 rounded-xl border border-[hsl(var(--elegant-blue))]/20 animate-elegant-float" style={{ animationDelay: '1s' }}>
                    <span className="text-sm font-elegant text-[hsl(var(--elegant-blue))] font-semibold football-accent">⚽ Tech & Football</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Elegant Achievement Badges */}
        <div className="mt-20 flex flex-wrap justify-center gap-4 opacity-80 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="glass-elevated px-4 py-2 rounded-xl border border-[hsl(var(--elegant-purple))]/20 group elegant-hover">
            <div className="flex items-center gap-2">
              <Target className="w-4 h-4 text-[hsl(var(--elegant-purple))] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-sm font-elegant text-muted-foreground">Goal Scorer</span>
            </div>
          </div>
          <div className="glass-elevated px-4 py-2 rounded-xl border border-[hsl(var(--elegant-blue))]/20 group elegant-hover">
            <div className="flex items-center gap-2">
              <Code className="w-4 h-4 text-[hsl(var(--elegant-blue))] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-sm font-elegant text-muted-foreground">Problem Solver</span>
            </div>
          </div>
          <div className="glass-elevated px-4 py-2 rounded-xl border border-[hsl(var(--elegant-charcoal))]/20 group elegant-hover">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[hsl(var(--elegant-charcoal))] group-hover:animate-pulse transition-transform duration-300" />
              <span className="text-sm font-elegant text-muted-foreground">Innovator</span>
            </div>
          </div>
        </div>

        {/* Premium Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center glass-elevated px-4 py-3 rounded-xl border border-[hsl(var(--elegant-purple))]/20 elegant-hover"
          >
            <span className="text-sm font-elegant text-muted-foreground mb-2 group-hover:text-[hsl(var(--elegant-purple))] transition-colors">Explore More</span>
            <div className="w-6 h-10 border-2 border-[hsl(var(--elegant-purple))]/30 group-hover:border-[hsl(var(--elegant-purple))] rounded-full flex justify-center transition-all duration-300">
              <div className="w-1 h-3 bg-[hsl(var(--elegant-purple))]/60 group-hover:bg-[hsl(var(--elegant-purple))] rounded-full mt-2 animate-pulse transition-all duration-300"></div>
            </div>
            <ArrowDown className="w-4 h-4 text-[hsl(var(--elegant-purple))]/60 group-hover:text-[hsl(var(--elegant-purple))] mt-2 group-hover:translate-y-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;