import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';
import Loading from './Loading';

interface Project {
  _id: string;
  projectName: string;
  category: string;
  imageUrl: string;
  description: string;
  projectLink: string;
  createdAt: string;
}

const Portfolio = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [categories, setCategories] = useState<string[]>(["All"]);

  // Fetch portfolio data from API
  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/portfolio`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch portfolio data');
        }
        
        const data = await response.json();
        setProjects(data);
        
        // Extract unique categories
        const uniqueCategories = [...new Set(data.map((project: Project) => project.category))];
        setCategories(["All", ...uniqueCategories as string[]]);
      } catch (err: unknown) {
        console.error('Error fetching portfolio:', err);
        setError(err instanceof Error ? err.message : 'Failed to load portfolio projects');
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  if (loading) {
    return (
      <section className="py-32 sm:py-24">
        <div className="container mx-auto px-4 flex justify-center items-center min-h-[50vh]">
          <Loading />
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-32 sm:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
          <p className="text-xl text-red-400">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 sm:py-24">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore our portfolio of successful projects and digital transformations.
            </p>
          </div>
        </ScrollAnimation>

        {/* Filter Buttons */}
        <ScrollAnimation>
          <div className="hidden sm:flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'glass-panel hover:bg-primary/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </ScrollAnimation>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center text-gray-300 py-10">
            No projects found in this category.
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project._id}
                layout
                variants={itemVariants}
                className="glass-panel group flex flex-col h-full relative overflow-hidden rounded-xl"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={project.imageUrl}
                    alt={project.projectName}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4 flex flex-col flex-grow">
                  <div className="mb-2">
                    <span className="text-primary text-xs uppercase font-medium tracking-wider">{project.category}</span>
                  </div>
                  <h3 className="text-lg font-bold mb-2 line-clamp-2 h-14">{project.projectName}</h3>
                  <p className="text-gray-300 text-sm mb-3 line-clamp-2 flex-grow">{project.description}</p>
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
                    <span className="text-primary text-sm font-medium">
                     <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                      View
                     </a>
                    </span>
                    <a 
                      href={project.projectLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-300 hover:text-primary transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;