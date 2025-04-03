import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Modern e-commerce solution with seamless payment integration",
    results: "150% increase in online sales"
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "Graphic Design",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Complete brand identity redesign for tech startup",
    results: "200% increase in brand recognition"
  },
  {
    id: 3,
    title: "Social Media Campaign",
    category: "Digital Marketing",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Integrated social media marketing campaign",
    results: "300% engagement increase"
  },
  {
    id: 4,
    title: "Product Showcase",
    category: "Product Photography",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Professional product photography for e-commerce",
    results: "40% increase in product sales"
  },
  {
    id: 5,
    title: "Corporate Video",
    category: "Video Editing",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Corporate brand video with motion graphics",
    results: "85% positive feedback"
  },
  {
    id: 6,
    title: "Email Campaign",
    category: "Email Marketing",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800&h=600",
    description: "Automated email marketing campaign",
    results: "250% increase in leads"
  }
];

const categories = ["All", "Web Development", "Graphic Design", "Digital Marketing", "Product Photography"];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

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
        <motion.div 
          className="grid md:grid-cols-3 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              variants={itemVariants}
              className="glass-panel group relative overflow-hidden rounded-xl"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <span className="text-primary text-xs">{project.category}</span>
                <h3 className="text-lg font-bold mt-1 mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{project.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-primary text-sm font-medium">{project.results}</span>
                  <ExternalLink className="w-4 h-4 text-gray-300 hover:text-primary transition-colors" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;