import React from 'react';
import { Brain, Code2, Palette, Rocket, Target, Users } from 'lucide-react';
import FadeIn from './FadeIn';

const About = () => {
  const features = [
    { icon: Brain, title: "AI Enthusiast", description: "Exploring machine learning and artificial intelligence to create intelligent solutions" },
    { icon: Code2, title: "Full Stack Developer", description: "Building robust web applications with modern technologies and best practices" },
    { icon: Palette, title: "Creative Designer", description: "Crafting beautiful, user-centric interfaces that delight and inspire" },
    { icon: Rocket, title: "Innovation Driven", description: "Constantly learning and experimenting with cutting-edge technologies" },
    { icon: Target, title: "Goal Oriented", description: "From football fields to code—achieving excellence through dedication" },
    { icon: Users, title: "Team Player", description: "Collaborating effectively to bring ideas to life and drive results" }
  ];

  return (
    <section className="py-24 px-6 bg-white relative" id="about">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">About Me</h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">A passionate creator combining technical expertise with creative vision</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="bento-card p-8 group h-full">
                <feature.icon className="w-10 h-10 md:w-12 md:h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
