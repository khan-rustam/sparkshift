import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Globe, Mail, Megaphone, Share2, Users, ArrowRight, Video, Camera } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    icon: <Code className="w-8 h-8 text-primary" />,
    title: 'Web Development',
    description: 'Custom web applications built with modern technologies and best practices.',
    features: ['React/Next.js', 'Full-stack Development', 'API Integration', 'Performance Optimization'],
  },
  {
    icon: <Palette className="w-8 h-8 text-primary" />,
    title: 'Graphic Design',
    description: 'Stunning visuals that capture your brand essence and message.',
    features: ['Brand Identity', 'UI/UX Design', 'Marketing Materials', 'Social Media Graphics'],
  },
  {
    icon: <Video className="w-8 h-8 text-primary" />,
    title: 'Video Editing',
    description: 'Professional video editing services for all your content needs.',
    features: ['Content Creation', 'Motion Graphics', 'Color Grading', 'Sound Design'],
  },
  {
    icon: <Camera className="w-8 h-8 text-primary" />,
    title: 'Product Photography',
    description: 'High-quality product photography that showcases your offerings.',
    features: ['Studio Shoots', 'Location Shoots', 'Post-processing', 'E-commerce Ready'],
  },
  {
    icon: <Globe className="w-8 h-8 text-primary" />,
    title: 'WordPress Development',
    description: 'Professional WordPress solutions for your business needs.',
    features: ['Custom Themes', 'Plugin Development', 'E-commerce', 'Performance Tuning'],
  },
  {
    icon: <Mail className="w-8 h-8 text-primary" />,
    title: 'Email Marketing',
    description: 'Strategic email campaigns that drive engagement and conversions.',
    features: ['Campaign Strategy', 'Template Design', 'Automation', 'Analytics & Reporting'],
  },
  {
    icon: <Megaphone className="w-8 h-8 text-primary" />,
    title: 'Digital Marketing',
    description: 'Comprehensive digital marketing solutions for business growth.',
    features: ['SEO Optimization', 'Content Strategy', 'PPC Campaigns', 'Analytics'],
  },
  {
    icon: <Share2 className="w-8 h-8 text-primary" />,
    title: 'Social Media Management',
    description: 'Strategic social media presence to boost your brand engagement.',
    features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics'],
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Cold Marketing',
    description: 'Effective outreach strategies to connect with potential clients.',
    features: ['Lead Generation', 'Email Outreach', 'LinkedIn Prospecting', 'Campaign Management'],
  }
];

const ServiceCard = ({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="service-card transform hover:scale-105 hover:shadow-xl transition-all duration-300"
  >
    <div className="mb-4">{service.icon}</div>
    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
    <p className="text-gray-300 mb-4">{service.description}</p>
    <ul className="space-y-2 mb-6">
      {service.features.map((feature, i) => (
        <li key={i} className="flex items-center text-gray-300">
          <ArrowRight className="w-4 h-4 mr-2 text-primary" />
          {feature}
        </li>
      ))}
    </ul>
    <Link 
      to="/contact" 
      className="btn-primary inline-flex items-center transform hover:scale-105 transition-all duration-300"
    >
      Get Started
      <ArrowRight className="ml-2 w-4 h-4" />
    </Link>
  </motion.div>
);

const Services = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
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