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
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-10 xl:px-8 relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Ultra Elegant background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 bg-gradient-to-r from-[hsl(var(--elegant-purple))]/15 to-[hsl(var(--elegant-blue))]/15 rounded-full blur-3xl animate-elegant-float"></div>
        <div className="absolute bottom-[15%] right-[10%] w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 bg-gradient-to-r from-[hsl(var(--elegant-blue))]/15 to-[hsl(var(--elegant-purple))]/15 rounded-full blur-3xl animate-elegant-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,hsl(var(--elegant-purple)/0.03),transparent_70%)] pointer-events-none"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Ultra Enhanced Text Content */}
          <div className="text-center lg:text-left space-y-6 sm:space-y-7 lg:space-y-8 animate-fade-in">
            {/* Ultra Premium Greeting */}
            <div className="flex justify-center lg:justify-start">
              <div className="glass-elevated px-5 py-3 sm:px-7 sm:py-4 rounded-2xl border border-[hsl(var(--elegant-purple))]/20 elegant-glow">
                <p className="text-sm sm:text-base lg:text-lg font-elegant text-muted-foreground flex items-center gap-2 sm:gap-3 flex-wrap justify-center">
                  <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse"></span>
                  <span>Hello, I'm</span>
                  <span className="text-[hsl(var(--elegant-purple))] font-semibold whitespace-nowrap">Available for opportunities</span>
                </p>
              </div>
            </div>

            {/* Ultra Luxury Title - Fully Responsive */}
            <h1 className="font-display font-bold leading-[1.1] sm:leading-tight">
              <span className="block text-gradient animate-gradient-shift mb-3 sm:mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                M. Kabilan
              </span>
              <span className="block text-muted-foreground font-elegant football-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Tech Enthusiast & Creator
              </span>
            </h1>

            {/* Ultra Elegant Description */}
            <p className="text-base sm:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 leading-relaxed font-elegant">
              Crafting innovative solutions at the intersection of technology and creativity. 
              Passionate about <span className="text-[hsl(var(--elegant-purple))] font-semibold">AI</span>, 
              <span className="text-[hsl(var(--elegant-blue))] font-semibold"> web development</span>, and 
              <span className="text-[hsl(var(--elegant-charcoal))] font-semibold"> digital experiences</span> that make a difference.
            </p>

            {/* Ultra Premium Skill Tags - Responsive */}
            <div className="flex flex-wrap gap-2.5 sm:gap-3 items-center justify-center lg:justify-start">
              <div className="glass-elevated px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[hsl(var(--elegant-purple))]/20 group elegant-scale">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[hsl(var(--elegant-purple))] group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-xs sm:text-sm font-elegant text-[hsl(var(--elegant-purple))]">Developer</span>
                </div>
              </div>
              <div className="glass-elevated px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[hsl(var(--elegant-blue))]/20 group elegant-scale">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[hsl(var(--elegant-blue))] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-xs sm:text-sm font-elegant text-[hsl(var(--elegant-blue))]">Innovator</span>
                </div>
              </div>
              <div className="glass-elevated px-3 py-2 sm:px-4 sm:py-2.5 rounded-xl border border-[hsl(var(--elegant-charcoal))]/20 group elegant-scale">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[hsl(var(--elegant-charcoal))] group-hover:animate-bounce transition-transform duration-300" />
                  <span className="text-xs sm:text-sm font-elegant text-[hsl(var(--elegant-charcoal))]">Athlete ⚽</span>
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

          {/* Ultra Luxury Profile Image - Fully Responsive */}
          <div className="flex justify-center lg:justify-end animate-fade-in mt-8 sm:mt-10 lg:mt-0" style={{ animationDelay: '0.3s' }}>
            <div className="relative group w-full max-w-sm sm:max-w-md lg:max-w-lg">
              {/* Ultra Premium animated frame */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-r from-[hsl(var(--elegant-purple))] via-[hsl(var(--elegant-blue))] to-[hsl(var(--elegant-purple))] rounded-3xl blur-xl opacity-50 group-hover:opacity-75 animate-gradient-shift transition-opacity duration-500"></div>
              
              {/* Ultra Glass container */}
              <div className="relative glass-intense p-4 sm:p-5 lg:p-6 rounded-3xl border border-[hsl(var(--elegant-purple))]/30">
                <div className="relative">
                  <img
                    src="https://i.ibb.co/2Y3Mshgt/3d820bd3-58a4-4c1c-b447-b11043015ef8.png"
                    alt="M. Kabilan - Tech Enthusiast and Creator"
                    className="w-full aspect-square rounded-2xl object-cover shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500"
                    loading="lazy"
                  />
                  
                  {/* Floating badges - Responsive */}
                  <div className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 glass-elevated px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-[hsl(var(--elegant-purple))]/20 animate-elegant-float">
                    <span className="text-xs sm:text-sm font-elegant text-[hsl(var(--elegant-purple))] font-semibold flex items-center gap-1.5 sm:gap-2">
                      <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="whitespace-nowrap">Available</span>
                    </span>
                  </div>
                  
                  <div className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 glass-elevated px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl border border-[hsl(var(--elegant-blue))]/20 animate-elegant-float" style={{ animationDelay: '1s' }}>
                    <span className="text-xs sm:text-sm font-elegant text-[hsl(var(--elegant-blue))] font-semibold whitespace-nowrap">⚽ Tech & Football</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ultra Elegant Achievement Badges - Fully Responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20 flex flex-wrap justify-center gap-2.5 sm:gap-3 lg:gap-4 opacity-80 animate-fade-in px-4" style={{ animationDelay: '0.5s' }}>
          <div className="glass-elevated px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-[hsl(var(--elegant-purple))]/20 group elegant-scale">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Target className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[hsl(var(--elegant-purple))] group-hover:scale-110 transition-transform duration-300" />
              <span className="text-xs sm:text-sm font-elegant text-muted-foreground whitespace-nowrap">Goal Scorer</span>
            </div>
          </div>
          <div className="glass-elevated px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-[hsl(var(--elegant-blue))]/20 group elegant-scale">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[hsl(var(--elegant-blue))] group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xs sm:text-sm font-elegant text-muted-foreground whitespace-nowrap">Problem Solver</span>
            </div>
          </div>
          <div className="glass-elevated px-3 py-2 sm:px-4 sm:py-2 rounded-xl border border-[hsl(var(--elegant-charcoal))]/20 group elegant-scale">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[hsl(var(--elegant-charcoal))] group-hover:animate-pulse transition-transform duration-300" />
              <span className="text-xs sm:text-sm font-elegant text-muted-foreground whitespace-nowrap">Innovator</span>
            </div>
          </div>
        </div>

        {/* Ultra Premium Scroll Indicator - Responsive */}
        <div className="hidden sm:block absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-fade-in" style={{ animationDelay: '0.7s' }}>
          <button 
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="group flex flex-col items-center glass-elevated px-4 py-3 rounded-xl border border-[hsl(var(--elegant-purple))]/20 elegant-hover"
          >
            <span className="text-xs sm:text-sm font-elegant text-muted-foreground mb-2 group-hover:text-[hsl(var(--elegant-purple))] transition-colors">Explore More</span>
            <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-[hsl(var(--elegant-purple))]/30 group-hover:border-[hsl(var(--elegant-purple))] rounded-full flex justify-center transition-all duration-300">
              <div className="w-1 h-2 sm:h-3 bg-[hsl(var(--elegant-purple))]/60 group-hover:bg-[hsl(var(--elegant-purple))] rounded-full mt-2 animate-pulse transition-all duration-300"></div>
            </div>
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[hsl(var(--elegant-purple))]/60 group-hover:text-[hsl(var(--elegant-purple))] mt-2 group-hover:translate-y-1 transition-all duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;