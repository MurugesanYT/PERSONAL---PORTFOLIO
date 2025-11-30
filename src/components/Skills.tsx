import React from 'react';
import FadeIn from './FadeIn';

const Skills = () => {
  const skillCategories = [
    { title: "Frontend", skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Three.js"] },
    { title: "Backend", skills: ["Node.js", "Python", "GraphQL", "PostgreSQL", "AWS"] },
    { title: "AI & ML", skills: ["TensorFlow", "PyTorch", "NLP", "Computer Vision", "LLMs"] },
    { title: "Design", skills: ["Figma", "Adobe XD", "UI/UX", "Design Systems", "Prototyping"] }
  ];

  const techs = ["React", "Next.js", "TypeScript", "Node.js", "Python", "Figma", "Three.js", "GraphQL", "AWS", "TensorFlow"];

  return (
    <section className="py-24 px-6 bg-[hsl(var(--background))] relative" id="skills">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">Skills & Expertise</h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto">A versatile toolkit for building exceptional digital experiences</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="bento-card p-8 group">
                <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, i) => (
                    <span key={i} className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors">{skill}</span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={400}>
          <div className="overflow-hidden bg-white border-y border-gray-100 rounded-3xl py-12">
            <div className="flex w-[200%] animate-[slide_20s_linear_infinite]">
              <div className="flex gap-12 md:gap-16 px-8 min-w-full justify-around">
                {techs.map((t, i) => (<span key={i} className="text-xl md:text-3xl font-bold text-gray-300 whitespace-nowrap">{t}</span>))}
              </div>
              <div className="flex gap-12 md:gap-16 px-8 min-w-full justify-around">
                {techs.map((t, i) => (<span key={`dup-${i}`} className="text-xl md:text-3xl font-bold text-gray-300 whitespace-nowrap">{t}</span>))}
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Skills;
