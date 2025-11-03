import React from 'react';

const Skills = () => {
  const skills = [
    "Web Development", "Mobile App Development", "AI", "Machine Learning", "Cybersecurity", "Cloud Computing",
    "Data Analysis", "DevOps", "UI/UX Design", "Game Development", "AR/VR Development", "SEO",
    "Technical Writing", "Data Visualization", "Blockchain", "IoT", "Quantum Computing", "Database Management",
    "3D Modeling", "Video Editing", "Penetration Testing", "Animation", "NLP", "Geospatial Analysis",
    "GIS", "Bioinformatics", "Containerization", "Smart Contracts", "System Architecture", "Edge Computing",
    "Voice UI Design", "Test Automation", "Mobile Payments", "Scientific Computing", "Digital Marketing", "Robotics",
    "Big Data", "Serverless", "Digital Twins", "Health Informatics", "DevOps Automation", "Responsive Design",
    "Functional Programming", "Agile Methodologies", "eCommerce", "Smart Home Tech", "Cloud Security", "Game Theory",
    "Information Retrieval", "Remote Sensing", "Performance Optimization", "Augmented Reality",
  ];

  const getElegantColor = (index: number) => {
    const colors = [
      'glass border-[hsl(var(--elegant-purple))]/20 text-[hsl(var(--elegant-purple))] hover:bg-[hsl(var(--elegant-purple))]/5',
      'glass border-[hsl(var(--elegant-blue))]/20 text-[hsl(var(--elegant-blue))] hover:bg-[hsl(var(--elegant-blue))]/5',
      'glass border-[hsl(var(--elegant-charcoal))]/20 text-[hsl(var(--elegant-charcoal))] hover:bg-[hsl(var(--elegant-charcoal))]/5',
      'glass border-[hsl(var(--elegant-slate))]/20 text-[hsl(var(--elegant-slate))] hover:bg-[hsl(var(--elegant-slate))]/5',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] sm:opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--elegant-purple)) 2px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold mb-4 sm:mb-6 text-gradient">
            Skills & Expertise
          </h2>
          <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-[hsl(var(--elegant-blue))] to-[hsl(var(--elegant-purple))] mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto font-elegant leading-relaxed px-4">
            A comprehensive toolkit spanning multiple domains of technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-3 lg:gap-4 animate-fade-in">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`
                px-3 py-2.5 sm:px-4 sm:py-3 lg:px-6 lg:py-4 rounded-xl text-center text-xs sm:text-sm font-medium
                border transition-all duration-300 cursor-pointer
                transform hover:scale-105 elegant-hover
                ${getElegantColor(index)}
              `}
              style={{
                animationDelay: `${index * 0.02}s`,
              }}
            >
              <span className="line-clamp-2">{skill}</span>
            </div>
          ))}
        </div>

        {/* Ultra Premium Stats Section - Fully Responsive */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 animate-fade-in">
          <div className="text-center group">
            <div className="glass-elevated p-5 sm:p-6 lg:p-8 rounded-2xl elegant-hover">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[hsl(var(--elegant-purple))] mb-1 sm:mb-2">50+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Skills Mastered</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="glass-elevated p-5 sm:p-6 lg:p-8 rounded-2xl elegant-hover">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[hsl(var(--elegant-blue))] mb-1 sm:mb-2">18+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Projects Built</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="glass-elevated p-5 sm:p-6 lg:p-8 rounded-2xl elegant-hover">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[hsl(var(--elegant-charcoal))] mb-1 sm:mb-2">5+</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Years Experience</div>
            </div>
          </div>
          <div className="text-center group">
            <div className="glass-elevated p-5 sm:p-6 lg:p-8 rounded-2xl elegant-hover">
              <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-[hsl(var(--elegant-slate))] mb-1 sm:mb-2">24/7</div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium">Learning Mode</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;