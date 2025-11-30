import React from 'react';
import { ArrowUpRight, Smartphone, Layers, Globe } from 'lucide-react';
import FadeIn from './FadeIn';

const Portfolio = () => {
  const projects = [
    { title: "AI Chat Platform", subtitle: "Machine Learning", description: "Advanced conversational AI", image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", span: "md:col-span-2 md:row-span-2", bg: "bg-gradient-to-br from-blue-50 to-indigo-50" },
    { title: "Health Sync", subtitle: "Mobile App", description: "Wellness tracking", span: "md:col-span-1 md:row-span-2", icon: Smartphone, bg: "bg-gradient-to-br from-purple-50 to-pink-50" },
    { title: "Design System", subtitle: "UI/UX", description: "Component library", span: "md:col-span-1 md:row-span-1", icon: Layers, bg: "bg-gray-900 text-white" },
    { title: "Analytics Dashboard", subtitle: "Data Viz", description: "Real-time metrics", span: "md:col-span-1 md:row-span-1", bg: "bg-white", chart: true },
    { title: "E-Commerce Platform", subtitle: "Full Stack", description: "Modern shopping experience", span: "md:col-span-2 md:row-span-1", bg: "bg-gradient-to-r from-gray-50 to-gray-100", tags: ["React", "Node.js", "Stripe"] },
    { title: "Portfolio CMS", subtitle: "Web App", description: "Content management", span: "md:col-span-2 md:row-span-1", icon: Globe, bg: "bg-gradient-to-br from-indigo-50 to-purple-50" }
  ];

  return (
    <section className="px-6 py-24 bg-white" id="portfolio">
      <div className="max-w-[1400px] mx-auto">
        <FadeIn className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-4">Featured Work</h2>
          <p className="text-xl md:text-2xl text-gray-500 max-w-3xl">A selection of projects showcasing innovation</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 auto-rows-[280px] gap-6">
          {projects.map((project, index) => (
            <FadeIn key={index} delay={index * 100} className={project.span}>
              <div className={`bento-card ${project.bg} flex flex-col h-full group`}>
                <div className="p-6 md:p-8 relative z-10 flex flex-col h-full justify-between">
                  <div>
                    <h3 className="text-xs md:text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">{project.subtitle}</h3>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight group-hover:text-blue-600 transition-colors duration-300 mb-2">{project.title}</h2>
                    <p className="text-sm md:text-base text-gray-600">{project.description}</p>
                  </div>
                  {project.icon && <div className="mt-auto flex justify-center"><project.icon size={80} className="text-current opacity-20 group-hover:opacity-40 transition-opacity duration-500" /></div>}
                  {project.chart && <div className="flex gap-2 mt-auto"><div className="h-8 w-2 bg-blue-500 rounded-full animate-pulse" /><div className="h-12 w-2 bg-purple-500 rounded-full animate-pulse delay-100" /><div className="h-6 w-2 bg-pink-500 rounded-full animate-pulse delay-200" /><div className="h-10 w-2 bg-indigo-500 rounded-full animate-pulse delay-300" /></div>}
                  {project.tags && <div className="flex flex-wrap gap-2 mt-auto">{project.tags.map((tag, i) => (<span key={i} className="px-3 py-1 bg-white rounded-full text-xs md:text-sm font-medium shadow-sm">{tag}</span>))}</div>}
                </div>
                {project.image && (<><div className="absolute inset-0 z-0"><div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent z-10 opacity-80" /><img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div><div className="absolute bottom-6 right-6 z-20 bg-white/90 backdrop-blur-md p-3 rounded-2xl shadow-sm group-hover:scale-110 transition-transform"><ArrowUpRight className="text-gray-900" size={20} /></div></>)}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
