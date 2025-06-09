
import React from 'react';
import { ArrowDown, Code, Globe, Zap, Trophy, Target } from 'lucide-react';

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
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-1500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-5 h-5 bg-pink-400 rounded-full animate-bounce delay-2000"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        {/* Enhanced Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 animate-pulse"></div>
            <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-500">
              <img 
                src="https://i.ibb.co/2Y3Mshgt/3d820bd3-58a4-4c1c-b447-b11043015ef8.png" 
                alt="M. Kabilan" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
            </div>
            <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center animate-pulse shadow-lg">
              <div className="w-6 h-6 bg-white rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Main Content */}
        <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in leading-tight">
          M. Kabilan
        </h1>
        
        <div className="flex flex-wrap items-center justify-center gap-6 mb-8 text-lg md:text-xl">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full border border-purple-500/30 backdrop-blur-sm">
            <Code className="w-5 h-5 text-purple-400" />
            <span className="text-purple-200 font-medium">Tech Enthusiast</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full border border-blue-500/30 backdrop-blur-sm">
            <Globe className="w-5 h-5 text-blue-400" />
            <span className="text-blue-200 font-medium">Developer</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-600/20 to-emerald-600/20 rounded-full border border-green-500/30 backdrop-blur-sm">
            <Trophy className="w-5 h-5 text-green-400" />
            <span className="text-green-200 font-medium">Football Player</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-600/20 to-purple-600/20 rounded-full border border-pink-500/30 backdrop-blur-sm">
            <Zap className="w-5 h-5 text-pink-400" />
            <span className="text-pink-200 font-medium">Creator</span>
          </div>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
          Passionate about building innovative solutions, mastering cutting-edge technologies, 
          and excelling on the football field. Welcome to my digital world where 
          <span className="text-gradient font-semibold"> technology meets athleticism</span>.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={handleExploreClick}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center">
              Explore My Work
              <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
            </span>
          </button>
          
          <button 
            onClick={handleContactClick}
            className="group relative px-8 py-4 border-2 border-purple-400 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 overflow-hidden backdrop-blur-sm"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 text-purple-300 group-hover:text-white transition-colors duration-300">
              Get In Touch
            </span>
          </button>
        </div>

        {/* Achievement badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-4 opacity-80">
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50">
            <Target className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Goal Scorer</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50">
            <Code className="w-4 h-4 text-green-400" />
            <span className="text-sm text-gray-300">Problem Solver</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 rounded-full border border-gray-700/50">
            <Zap className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Innovator</span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex flex-col items-center animate-bounce hover:animate-none focus:outline-none group"
        >
          <span className="text-sm text-purple-300 mb-2 font-medium group-hover:text-purple-200">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-purple-400 group-hover:border-purple-300 rounded-full flex justify-center transition-colors">
            <div className="w-1 h-3 bg-purple-400 group-hover:bg-purple-300 rounded-full mt-2 animate-pulse transition-colors"></div>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Hero;
