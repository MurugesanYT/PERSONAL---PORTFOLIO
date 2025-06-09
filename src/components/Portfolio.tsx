
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const Portfolio = () => {
  const projects = [
    {
      title: "Book Kreate",
      url: "https://book-kreate.vercel.app",
      description: "A creative platform for book creation and publishing",
      category: "Web App",
      featured: true
    },
    {
      title: "Raina's Sports",
      url: "https://rainassports.vercel.app",
      description: "Sports management and analytics platform",
      category: "Web App",
      featured: true
    },
    {
      title: "Morse Code Translator",
      url: "https://codepen.io/Kabilan_27/pen/rNXyPoV",
      description: "Interactive morse code translation tool",
      category: "Utility"
    },
    {
      title: "Country Locate",
      url: "https://codepen.io/Kabilan_27/pen/jOgNRLK",
      description: "Geographic location finder and explorer",
      category: "Geography"
    },
    {
      title: "Country and City Explorer",
      url: "https://codepen.io/Kabilan_27/pen/GRbypve",
      description: "Comprehensive geographic information system",
      category: "Geography"
    },
    {
      title: "Travel Experience App",
      url: "https://codepen.io/Kabilan_27/pen/OJeVEvy",
      description: "Virtual travel and experience platform",
      category: "Travel"
    },
    {
      title: "My Search Engine",
      url: "https://codepen.io/Kabilan_27/pen/QWPxEZL",
      description: "Custom search engine implementation",
      category: "Search"
    },
    {
      title: "PokeDex Explorer",
      url: "https://codepen.io/Kabilan_27/pen/WNqNxpL",
      description: "Interactive Pokemon database explorer",
      category: "Entertainment"
    },
    {
      title: "Trivia Quest",
      url: "https://codepen.io/Kabilan_27/pen/Bagazyr",
      description: "Interactive trivia and quiz game",
      category: "Game"
    },
    {
      title: "Virtual Travel Experience",
      url: "https://codepen.io/Kabilan_27/details/dyByMRP",
      description: "Immersive virtual travel platform",
      category: "Travel"
    },
    {
      title: "Pipe Flexibility Calculator",
      url: "https://codepen.io/Kabilan_27/details/RwzbpBw",
      description: "Engineering calculation tool",
      category: "Engineering"
    },
    {
      title: "Bucket List Finder",
      url: "https://codepen.io/Kabilan_27/pen/gOJGodp",
      description: "Personal goal and bucket list manager",
      category: "Lifestyle"
    },
    {
      title: "Country Info Explorer",
      url: "https://codepen.io/Kabilan_27/pen/gOJGGoW",
      description: "Detailed country information database",
      category: "Geography"
    },
    {
      title: "Tech Byte Facts",
      url: "https://codepen.io/Kabilan_27/pen/PovJJYG",
      description: "Technology facts and information hub",
      category: "Education"
    },
    {
      title: "Recipe Finder",
      url: "https://codepen.io/Kabilan_27/pen/mdYBJRO",
      description: "Culinary recipe discovery platform",
      category: "Food"
    },
    {
      title: "Random Image App",
      url: "https://codepen.io/Kabilan_27/pen/OJYxJKK",
      description: "Random image generation and display",
      category: "Utility"
    },
    {
      title: "Best Name Picker",
      url: "https://codepen.io/Kabilan_27/details/PovoewJ",
      description: "Random name selection tool",
      category: "Utility"
    },
    {
      title: "Visa Checker",
      url: "https://codepen.io/Kabilan_27/details/PogeLjy",
      description: "Travel visa requirements checker",
      category: "Travel"
    }
  ];

  const categories = ["All", "Web App", "Geography", "Travel", "Utility", "Game", "Education"];
  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 px-6 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my diverse projects spanning various technologies and domains
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 ${
                project.featured ? 'lg:col-span-1 md:col-span-1' : ''
              }`}
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    project.category === 'Web App' ? 'bg-purple-600/20 text-purple-300' :
                    project.category === 'Geography' ? 'bg-green-600/20 text-green-300' :
                    project.category === 'Travel' ? 'bg-blue-600/20 text-blue-300' :
                    project.category === 'Game' ? 'bg-pink-600/20 text-pink-300' :
                    project.category === 'Education' ? 'bg-yellow-600/20 text-yellow-300' :
                    'bg-gray-600/20 text-gray-300'
                  }`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Project Link */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium text-sm transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="h-1 bg-gradient-to-r from-purple-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 bg-gray-800/50 rounded-full px-8 py-4 border border-gray-700/50">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">{projects.length}+</div>
              <div className="text-sm text-gray-400">Total Projects</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">{categories.length - 1}</div>
              <div className="text-sm text-gray-400">Categories</div>
            </div>
            <div className="w-px h-8 bg-gray-600"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">2</div>
              <div className="text-sm text-gray-400">Featured Apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
