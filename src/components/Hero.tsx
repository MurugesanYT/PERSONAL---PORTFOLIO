
import React from 'react';
import { ArrowDown, Code, Globe, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-150"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-purple-400 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://i.ibb.co/2Y3Mshgt/3d820bd3-58a4-4c1c-b447-b11043015ef8.png" 
                alt="M. Kabilan" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-400 rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-fade-in">
          M. Kabilan
        </h1>
        
        <div className="flex items-center justify-center gap-2 mb-6 text-lg md:text-xl text-purple-200">
          <Code className="w-6 h-6" />
          <span>Tech Enthusiast</span>
          <span className="text-purple-400">•</span>
          <Globe className="w-6 h-6" />
          <span>Developer</span>
          <span className="text-purple-400">•</span>
          <Zap className="w-6 h-6" />
          <span>Creator</span>
        </div>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Passionate about building innovative solutions and exploring cutting-edge technologies. 
          Welcome to my digital world of creativity and code.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#portfolio" 
            className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
          >
            Explore My Work
            <ArrowDown className="inline ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </a>
          
          <a 
            href="#contact" 
            className="border-2 border-purple-400 hover:bg-purple-400 hover:text-purple-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;
