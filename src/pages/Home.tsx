import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Code, Zap, Stars, Rocket, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import Portfolio from "../components/Portfolio";
import Testimonials from "../components/Testimonials";
import ScrollAnimation from "../components/ScrollAnimation";
import WhatWeDeliver from "../components/WhatWeDeliver";
import Stats from "../components/Stats";
import { ReactNode } from "react";

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FloatingElement = ({ children, className = "", delay = 0 }: FloatingElementProps) => (
  <motion.div
    animate={{
      y: [0, 15, 0],
      rotate: [0, 5, -5, 0],
    }}
    transition={{
      duration: 6,
      delay,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className={className}
  >
    {children}
  </motion.div>
);

const Home = () => {
  const highlights = [
    { icon: <Rocket className="w-5 h-5" />, text: "Fast Development" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "Quality Assured" },
    { icon: <Zap className="w-5 h-5" />, text: "24/7 Support" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-dark to-dark z-0" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-full h-full">
            {Array.from({ length: 20 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full bg-primary/5"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 300 + 50}px`,
                  height: `${Math.random() * 300 + 50}px`,
                  animation: `pulse ${Math.random() * 8 + 4}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Floating Elements */}
        <FloatingElement className="absolute top-1/4 right-1/4 glass-panel p-8">
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </FloatingElement>

        <FloatingElement className="absolute bottom-1/4 left-1/4 glass-panel p-6" delay={1}>
          <Code className="w-6 h-6 text-blue-400" />
        </FloatingElement>

        <FloatingElement className="absolute top-1/3 left-1/5 glass-panel p-5" delay={2}>
          <Zap className="w-5 h-5 text-green-400" />
        </FloatingElement>

        <FloatingElement className="absolute bottom-1/3 right-1/5 glass-panel p-7" delay={1.5}>
          <Stars className="w-7 h-7 text-purple-400" />
        </FloatingElement>

        <div className="container mx-auto px-4 z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 1, -1, 0],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
                  Shifting Ideas into
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-primary animate-gradient-x"> Reality</span>
                  <div className="absolute -top-8 -right-8 text-primary opacity-50">
                    <Stars className="w-12 h-12" />
                  </div>
                </h1>
              </motion.div>
              <p className="text-xl text-gray-300 mb-8 relative">
                We transform your digital presence with cutting-edge solutions
                that drive growth and innovation.
                <motion.div
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute -right-16 bottom-0"
                >
                  <div className="w-8 h-8 rounded-full border-2 border-primary/30 border-t-primary" />
                </motion.div>
              </p>

              {/* Feature Highlights */}
              <div className="flex flex-wrap gap-4 mb-8">
                {highlights.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full"
                  >
                    <span className="text-primary">{item.icon}</span>
                    <span className="text-gray-300">{item.text}</span>
                  </motion.div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center group relative overflow-hidden"
                >
                  <span className="relative z-10">Start Your Journey</span>
                  <ArrowRight className="ml-2 relative z-10 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/10 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
                <Link
                  to="/services"
                  className="glass-panel px-6 py-3 text-center hover:bg-white/20 transition-all relative group overflow-hidden"
                >
                  <span className="relative z-10">Explore Services</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-white/5 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                </Link>
              </div>
            </motion.div>

            {/* Hero Right Side - Stats Preview */}
            
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollAnimation>
        <Stats />
      </ScrollAnimation>

      {/* What We Deliver Section */}
      <ScrollAnimation>
        <WhatWeDeliver />
      </ScrollAnimation>

      {/* Portfolio Section */}
      <ScrollAnimation>
        <div className="">
          <Portfolio />
        </div>
      </ScrollAnimation>

      {/* Testimonials Section */}
      <ScrollAnimation>
        <div className="">
          <Testimonials />
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default Home;
