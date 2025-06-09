
import React from 'react';
import { Brain, Globe, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <p className="text-lg leading-relaxed text-gray-300">
              Hi, I'm <span className="text-purple-400 font-semibold">M. Kabilan</span>. I love coding and I'm passionate about all things tech. I enjoy building innovative solutions, exploring new technologies, and understanding the world around me—especially through my deep interest in geography.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-300">
              My portfolio showcases a wide variety of technical and creative skills, reflecting my commitment to continuous learning and innovation in the ever-evolving world of technology.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <span className="px-4 py-2 bg-purple-600/20 text-purple-300 rounded-full text-sm border border-purple-500/30">
                Full Stack Developer
              </span>
              <span className="px-4 py-2 bg-blue-600/20 text-blue-300 rounded-full text-sm border border-blue-500/30">
                AI Enthusiast
              </span>
              <span className="px-4 py-2 bg-green-600/20 text-green-300 rounded-full text-sm border border-green-500/30">
                Geography Lover
              </span>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Innovation</h3>
              </div>
              <p className="text-gray-400">Constantly exploring new technologies and pushing the boundaries of what's possible.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Global Perspective</h3>
              </div>
              <p className="text-gray-400">Deep interest in geography and understanding global connections through technology.</p>
            </div>

            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-pink-500/50 transition-colors duration-300">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-pink-600/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-semibold text-white">Passion-Driven</h3>
              </div>
              <p className="text-gray-400">Every project is built with dedication and a genuine love for creating impactful solutions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
