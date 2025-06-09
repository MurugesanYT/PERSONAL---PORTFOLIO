
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

  const getRandomColor = (index: number) => {
    const colors = [
      'bg-purple-600/20 text-purple-300 border-purple-500/30 hover:bg-purple-600/30',
      'bg-blue-600/20 text-blue-300 border-blue-500/30 hover:bg-blue-600/30',
      'bg-green-600/20 text-green-300 border-green-500/30 hover:bg-green-600/30',
      'bg-pink-600/20 text-pink-300 border-pink-500/30 hover:bg-pink-600/30',
      'bg-yellow-600/20 text-yellow-300 border-yellow-500/30 hover:bg-yellow-600/30',
      'bg-red-600/20 text-red-300 border-red-500/30 hover:bg-red-600/30',
      'bg-indigo-600/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-600/30',
      'bg-teal-600/20 text-teal-300 border-teal-500/30 hover:bg-teal-600/30',
    ];
    return colors[index % colors.length];
  };

  return (
    <section id="skills" className="py-20 px-6 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit spanning multiple domains of technology and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill}
              className={`
                px-4 py-3 rounded-lg text-center text-sm font-medium
                border transition-all duration-300 cursor-pointer
                transform hover:scale-105 hover:shadow-lg
                ${getRandomColor(index)}
              `}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {skill}
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
            <div className="text-gray-400">Skills Mastered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">18+</div>
            <div className="text-gray-400">Projects Built</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-green-400 mb-2">5+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-pink-400 mb-2">24/7</div>
            <div className="text-gray-400">Learning Mode</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
