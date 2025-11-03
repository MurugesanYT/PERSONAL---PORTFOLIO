
import React from 'react';
import { Brain, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-gradient">
            About Me
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] mx-auto mb-6 sm:mb-8 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* Ultra Enhanced Text Content */}
          <div className="space-y-6 sm:space-y-7 lg:space-y-8 animate-fade-in">
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground font-elegant">
              Hi, I'm <span className="text-[hsl(var(--elegant-purple))] font-semibold football-accent">M. Kabilan</span>. I love coding and I'm passionate about all things tech. I enjoy building innovative solutions, exploring new technologies, and understanding the world around me—especially through my deep interest in geography.
            </p>
            
            <p className="text-lg sm:text-xl leading-relaxed text-muted-foreground font-elegant">
              My portfolio showcases a wide variety of technical and creative skills, reflecting my commitment to continuous learning and innovation in the ever-evolving world of technology.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              <span className="px-4 py-2 sm:px-6 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium text-[hsl(var(--elegant-purple))] border border-[hsl(var(--elegant-purple))]/20 elegant-scale whitespace-nowrap">
                Full Stack Developer
              </span>
              <span className="px-4 py-2 sm:px-6 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium text-[hsl(var(--elegant-blue))] border border-[hsl(var(--elegant-blue))]/20 elegant-scale whitespace-nowrap">
                AI Enthusiast
              </span>
              <span className="px-4 py-2 sm:px-6 sm:py-3 glass rounded-full text-xs sm:text-sm font-medium text-[hsl(var(--elegant-charcoal))] border border-[hsl(var(--elegant-charcoal))]/20 elegant-scale whitespace-nowrap">
                Geography Lover
              </span>
            </div>
          </div>

          {/* Ultra Premium Features Grid */}
          <div className="grid gap-6 sm:gap-7 lg:gap-8 animate-fade-in">
            <div className="glass-elevated p-6 sm:p-7 lg:p-8 rounded-2xl group elegant-hover animate-elegant-float" style={{ animationDelay: '0.2s' }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[hsl(var(--elegant-purple))]/10 to-[hsl(var(--elegant-purple))]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Brain className="w-7 h-7 sm:w-8 sm:h-8 text-[hsl(var(--elegant-purple))]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">Innovation</h3>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">Constantly exploring new technologies and pushing the boundaries of what's possible.</p>
            </div>

            <div className="glass-elevated p-6 sm:p-7 lg:p-8 rounded-2xl group elegant-hover animate-elegant-float" style={{ animationDelay: '0.4s' }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[hsl(var(--elegant-blue))]/10 to-[hsl(var(--elegant-blue))]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Globe className="w-7 h-7 sm:w-8 sm:h-8 text-[hsl(var(--elegant-blue))]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">Global Perspective</h3>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">Deep interest in geography and understanding global connections through technology.</p>
            </div>

            <div className="glass-elevated p-6 sm:p-7 lg:p-8 rounded-2xl group elegant-hover animate-elegant-float" style={{ animationDelay: '0.6s' }}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-4 sm:mb-6">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-[hsl(var(--elegant-charcoal))]/10 to-[hsl(var(--elegant-charcoal))]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0">
                  <Heart className="w-7 h-7 sm:w-8 sm:h-8 text-[hsl(var(--elegant-charcoal))]" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">Passion-Driven</h3>
              </div>
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">Every project is built with dedication and a genuine love for creating impactful solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
