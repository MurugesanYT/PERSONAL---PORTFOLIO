import React from 'react';
import { ArrowRight, Code, Trophy, Zap } from 'lucide-react';
import FadeIn from './FadeIn';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 relative overflow-hidden pt-32 pb-20">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply animate-float" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] md:w-[600px] md:h-[600px] bg-purple-100/40 rounded-full blur-[120px] mix-blend-multiply" style={{ animation: 'float 12s ease-in-out infinite reverse' }} />
      
      <FadeIn delay={0} className="z-10 mb-6">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md text-xs font-semibold tracking-wide text-gray-500 uppercase">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Available for opportunities
        </span>
      </FadeIn>

      <FadeIn delay={100} className="z-10 max-w-5xl">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold hero-title-text text-gray-900 mb-6 md:mb-8">
          M. Kabilan <br/>
          <span className="text-gradient animate-gradient-shift">Tech Enthusiast & Creator</span>
        </h1>
      </FadeIn>

      <FadeIn delay={200} className="z-10 max-w-2xl mx-auto px-4">
        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-medium leading-relaxed">
          Crafting innovative solutions at the intersection of technology and creativity. 
          Building digital experiences that make a difference.
        </p>
      </FadeIn>

      <FadeIn delay={300} className="z-10 mt-8 flex flex-wrap gap-3 items-center justify-center">
        <div className="apple-glass px-4 py-2 rounded-full border border-blue-200/50 group hover:scale-105 transition-transform">
          <div className="flex items-center gap-2">
            <Code className="w-4 h-4 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
            <span className="text-sm font-medium text-gray-700">Developer</span>
          </div>
        </div>
        <div className="apple-glass px-4 py-2 rounded-full border border-purple-200/50 group hover:scale-105 transition-transform">
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-sm font-medium text-gray-700">Innovator</span>
          </div>
        </div>
        <div className="apple-glass px-4 py-2 rounded-full border border-gray-200/50 group hover:scale-105 transition-transform">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-gray-700 group-hover:animate-bounce transition-transform duration-300" />
            <span className="text-sm font-medium text-gray-700">Athlete ⚽</span>
          </div>
        </div>
      </FadeIn>

      <FadeIn delay={400} className="mt-12 z-10 flex flex-col sm:flex-row gap-4">
        <button 
          onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          className="group px-8 py-4 rounded-full bg-[hsl(var(--primary))] text-white text-lg font-medium hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-black/10"
        >
          <span className="flex items-center gap-2">
            View My Work
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </span>
        </button>
        <button 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="px-8 py-4 rounded-full bg-white text-[hsl(var(--primary))] border border-gray-200 text-lg font-medium hover:bg-gray-50 transition-all duration-300 hover:border-gray-300"
        >
          Let's Connect
        </button>
      </FadeIn>

      <FadeIn delay={500} className="z-10 mt-16">
        <div className="relative group w-64 h-64 sm:w-80 sm:h-80">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 animate-gradient-shift transition-opacity duration-500"></div>
          <div className="relative apple-glass p-2 rounded-3xl border border-white/50">
            <img
              src="https://i.ibb.co/2Y3Mshgt/3d820bd3-58a4-4c1c-b447-b11043015ef8.png"
              alt="M. Kabilan"
              className="w-full h-full rounded-2xl object-cover shadow-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Hero;
