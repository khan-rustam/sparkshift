import { motion } from 'framer-motion';
import { Code, Palette, Globe, Mail, Megaphone, Share2, Users, ArrowRight, Video, Camera, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  color: string;
  gradient: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

const services: Service[] = [
  {
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions for explosive business growth.',
    features: ['SEO Optimization', 'Content Strategy', 'PPC Campaigns', 'Performance Analytics'],
    color: 'text-purple-400',
    gradient: 'from-purple-600/20 to-purple-400/0'
  },
  {
    icon: <Share2 className="w-8 h-8" />,
    title: 'Social Media Management',
    description: 'Strategic social media presence to boost your brand engagement and reach.',
    features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Growth Strategy'],
    color: 'text-blue-400',
    gradient: 'from-blue-600/20 to-blue-400/0'
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: 'Influencer Marketing',
    description: 'Connect with influential voices to amplify your brand message.',
    features: ['Influencer Outreach', 'Campaign Management', 'Performance Tracking', 'ROI Analysis'],
    color: 'text-green-400',
    gradient: 'from-green-600/20 to-green-400/0'
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    features: ['React/Next.js', 'Full-stack Development', 'API Integration', 'Performance Optimization'],
    color: 'text-yellow-400',
    gradient: 'from-yellow-600/20 to-yellow-400/0'
  },
  {
    icon: <Palette className="w-8 h-8" />,
    title: 'UI/UX & Graphic Design',
    description: 'Stunning visuals and user experiences that capture your brand essence.',
    features: ['Brand Identity', 'UI/UX Design', 'Marketing Materials', 'Social Media Graphics'],
    color: 'text-pink-400',
    gradient: 'from-pink-600/20 to-pink-400/0'
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: 'Video Editing',
    description: 'Professional video editing services for engaging content creation.',
    features: ['Content Creation', 'Motion Graphics', 'Color Grading', 'Sound Design'],
    color: 'text-cyan-400',
    gradient: 'from-cyan-600/20 to-cyan-400/0'
  },
  {
    icon: <Mail className="w-8 h-8" />,
    title: 'Email Marketing',
    description: 'Strategic email campaigns that drive engagement and conversions.',
    features: ['Campaign Strategy', 'Template Design', 'Automation', 'Analytics & Reporting'],
    color: 'text-orange-400',
    gradient: 'from-orange-600/20 to-orange-400/0'
  },
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'WordPress Development',
    description: 'Professional WordPress solutions for your business needs.',
    features: ['Custom Themes', 'Plugin Development', 'E-commerce', 'Performance Tuning'],
    color: 'text-indigo-400',
    gradient: 'from-indigo-600/20 to-indigo-400/0'
  },
  {
    icon: <Camera className="w-8 h-8" />,
    title: 'Product Photography',
    description: 'High-quality product photography that showcases your offerings.',
    features: ['Studio Shoots', 'Location Shoots', 'Post-processing', 'E-commerce Ready'],
    color: 'text-rose-400',
    gradient: 'from-rose-600/20 to-rose-400/0'
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: 'Cold Marketing',
    description: 'Effective outreach strategies to connect with potential clients.',
    features: ['Lead Generation', 'Email Outreach', 'LinkedIn Prospecting', 'Campaign Management'],
    color: 'text-teal-400',
    gradient: 'from-teal-600/20 to-teal-400/0'
  }
];

const ServiceCard: React.FC<ServiceCardProps> = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="group relative"
  >
    {/* Glow Effect */}
    <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
    
    <div className="relative glass-panel p-8 rounded-2xl border border-gray-800 group-hover:border-gray-700 transition-all duration-300">
      <div className="relative z-10">
        {/* Icon with background */}
        <div className={`mb-6 w-16 h-16 rounded-2xl flex items-center justify-center ${service.color} bg-gray-900/50 group-hover:scale-110 transition-transform duration-300`}>
          {service.icon}
        </div>

        {/* Title with gradient */}
        <h3 className={`text-2xl font-bold mb-3 ${service.color}`}>{service.title}</h3>
        
        {/* Description */}
        <p className="text-gray-300 mb-6 group-hover:text-gray-200 transition-colors duration-300">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-3 mb-8">
          {service.features.map((feature: string, i: number) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: (index * 0.1) + (i * 0.1) }}
              viewport={{ once: true }}
              className="flex items-center text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
            >
              <div className={`w-2 h-2 rounded-full ${service.color} mr-3`} />
              {feature}
            </motion.li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link 
          to="/contact" 
          className={`inline-flex items-center px-6 py-3 rounded-lg bg-gray-900 ${service.color} hover:bg-gray-800 transition-all duration-300 group/btn`}
        >
          <span>Get Started</span>
          <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  </motion.div>
);

const Services = () => {
  return (
    <div className="min-h-screen pt-32 pb-16 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      
      {/* Animated background shapes */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 15,
              delay: i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 500 + 200}px`,
              height: `${Math.random() * 500 + 200}px`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;