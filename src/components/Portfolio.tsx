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
      title: "Love Proposal Program",
      url: "https://proposal-program.vercel.app",
      description: "Craft a magical moment that will be remembered forever ✨. If you get the following error, please try again later which is due to temporary database deactivation. DM me To Activate It.",
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

  const categories = [
  "All", "Featured", "Web App", "Geography", "Travel", "Utility", "Game",
  "Education", "Lifestyle", "Entertainment", "Search", "Engineering", "Food"
];

  const [selectedCategory, setSelectedCategory] = React.useState("All");

  const filteredProjects =
  selectedCategory === "All"
    ? projects
    : selectedCategory === "Featured"
    ? projects.filter(project => project.featured)
    : projects.filter(project => project.category === selectedCategory);

  const getCategoryColor = (category: string, isSelected: boolean) => {
    if (isSelected) return 'btn-primary text-white';
    
    const colorMap: { [key: string]: string } = {
      'Web App': 'glass border-[hsl(var(--elegant-purple))]/20 text-[hsl(var(--elegant-purple))] hover:bg-[hsl(var(--elegant-purple))]/5',
      'Geography': 'glass border-[hsl(var(--elegant-blue))]/20 text-[hsl(var(--elegant-blue))] hover:bg-[hsl(var(--elegant-blue))]/5',
      'Travel': 'glass border-[hsl(var(--elegant-charcoal))]/20 text-[hsl(var(--elegant-charcoal))] hover:bg-[hsl(var(--elegant-charcoal))]/5',
      'Game': 'glass border-[hsl(var(--elegant-slate))]/20 text-[hsl(var(--elegant-slate))] hover:bg-[hsl(var(--elegant-slate))]/5',
      'Education': 'glass border-[hsl(var(--elegant-purple))]/20 text-[hsl(var(--elegant-purple))] hover:bg-[hsl(var(--elegant-purple))]/5',
    };
    
    return colorMap[category] || 'glass border-border/20 text-muted-foreground hover:bg-muted/5';
  };

  return (
    <section id="portfolio" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 animate-fade-in">
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-gradient">
            Portfolio
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-[hsl(var(--elegant-charcoal))] to-[hsl(var(--elegant-blue))] mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant leading-relaxed">
            A showcase of my diverse projects spanning various technologies and domains
          </p>
        </div>

        {/* Elegant Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 elegant-hover ${
                getCategoryColor(category, selectedCategory === category)
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Premium Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group glass-elevated rounded-2xl overflow-hidden elegant-hover transform transition-all duration-500 ${
                project.featured ? 'ring-2 ring-[hsl(var(--elegant-purple))]/20' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`px-4 py-2 text-xs font-medium rounded-full ${
                    project.category === 'Web App' ? 'bg-[hsl(var(--elegant-purple))]/10 text-[hsl(var(--elegant-purple))] border border-[hsl(var(--elegant-purple))]/20' :
                    project.category === 'Geography' ? 'bg-[hsl(var(--elegant-blue))]/10 text-[hsl(var(--elegant-blue))] border border-[hsl(var(--elegant-blue))]/20' :
                    project.category === 'Travel' ? 'bg-[hsl(var(--elegant-charcoal))]/10 text-[hsl(var(--elegant-charcoal))] border border-[hsl(var(--elegant-charcoal))]/20' :
                    project.category === 'Game' ? 'bg-[hsl(var(--elegant-slate))]/10 text-[hsl(var(--elegant-slate))] border border-[hsl(var(--elegant-slate))]/20' :
                    'bg-muted/10 text-muted-foreground border border-muted/20'
                  }`}>
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="text-xs bg-gradient-to-r from-[hsl(var(--elegant-purple))]/10 to-[hsl(var(--elegant-blue))]/10 text-[hsl(var(--elegant-purple))] font-semibold px-3 py-1 rounded-full flex items-center gap-1 border border-[hsl(var(--elegant-purple))]/20">
                      <span role="img" aria-label="Star">⭐</span> Featured
                    </span>
                  )}
                </div>

                {/* Project Content */}
                <h3 className="text-2xl font-display font-semibold text-foreground mb-4 group-hover:text-[hsl(var(--elegant-purple))] transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-8 text-base leading-relaxed font-elegant">
                  {project.description}
                </p>

                {/* Project Link */}
                <div className="flex items-center gap-4">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[hsl(var(--elegant-purple))] hover:text-[hsl(var(--elegant-blue))] font-medium text-sm transition-colors elegant-hover"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View Project
                  </a>
                </div>
              </div>

              {/* Elegant Hover Effect */}
              <div className="h-1 bg-gradient-to-r from-[hsl(var(--elegant-purple))] to-[hsl(var(--elegant-blue))] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Premium Stats */}
        <div className="mt-20 text-center animate-fade-in">
          <div className="glass-luxury rounded-2xl px-12 py-8 inline-flex items-center gap-12">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-[hsl(var(--elegant-purple))]">{projects.length}+</div>
              <div className="text-sm text-muted-foreground font-medium">Total Projects</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-[hsl(var(--elegant-blue))]">{categories.length - 1}</div>
              <div className="text-sm text-muted-foreground font-medium">Categories</div>
            </div>
            <div className="w-px h-12 bg-border"></div>
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-[hsl(var(--elegant-charcoal))]">3</div>
              <div className="text-sm text-muted-foreground font-medium">Featured Apps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;