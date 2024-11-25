import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Portfolio from '../components/Portfolio';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-dark to-dark z-0" />
        
        {/* Floating Elements */}
        <motion.div
          animate={{
            y: [0, 20, 0],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 right-1/4 glass-panel p-8"
        >
          <Sparkles className="w-8 h-8 text-primary" />
        </motion.div>

        <div className="container mx-auto px-4 z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Shifting Ideas into
              <span className="text-primary"> Reality</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              We transform your digital presence with cutting-edge solutions
              that drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact" className="btn-primary inline-flex items-center">
                Start Your Journey
                <ArrowRight className="ml-2" />
              </Link>
              <Link to="/services" className="glass-panel px-6 py-3 text-center hover:bg-white/20 transition-all">
                Explore Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <Portfolio />

      {/* Testimonials Section */}
      <Testimonials />
    </div>
  );
};

export default Home;