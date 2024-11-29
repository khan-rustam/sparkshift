import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when location changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-[6px] bg-dark/40 py-4' : 'py-6'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
        <Link 
            to="/" 
            // className="flex items-center space-x-2 text-2xl font-bold text-white hover:text-primary transition-colors"
          >
            <img src={logo} alt="SPARKSHIFT" className="w-72 h-20" />
            {/* <span>SPARK<span className="text-primary">SHIFT</span></span> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={scrollToTop} className={`nav-link ${isActive('/') ? 'text-primary after:w-full' : ''}`}>Home</Link>
            <Link to="/services" onClick={scrollToTop} className={`nav-link ${isActive('/services') ? 'text-primary after:w-full' : ''}`}>Services</Link>
            <Link to="/portfolio" onClick={scrollToTop} className={`nav-link ${isActive('/portfolio') ? 'text-primary after:w-full' : ''}`}>Portfolio</Link>
            <Link to="/about" onClick={scrollToTop} className={`nav-link ${isActive('/about') ? 'text-primary after:w-full' : ''}`}>About</Link>
            <Link to="/contact" onClick={scrollToTop} className={`nav-link ${isActive('/contact') ? 'text-primary after:w-full' : ''}`}>Contact</Link>
            <Link 
              to="/contact" 
              onClick={scrollToTop}
              className="btn-primary"
            >
              Hire Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-primary transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden backdrop-blur-sm bg-dark/50 mt-4 p-4 rounded-lg overflow-hidden"
            >
              <div className="flex flex-col space-y-4">
                <Link to="/" onClick={scrollToTop} className={`nav-link ${isActive('/') ? 'text-primary' : ''}`}>Home</Link>
                <Link to="/services" onClick={scrollToTop} className={`nav-link ${isActive('/services') ? 'text-primary' : ''}`}>Services</Link>
                <Link to="/portfolio" onClick={scrollToTop} className={`nav-link ${isActive('/portfolio') ? 'text-primary' : ''}`}>Portfolio</Link>
                <Link to="/about" onClick={scrollToTop} className={`nav-link ${isActive('/about') ? 'text-primary' : ''}`}>About</Link>
                <Link to="/contact" onClick={scrollToTop} className={`nav-link ${isActive('/contact') ? 'text-primary' : ''}`}>Contact</Link>
                <Link to="/contact" onClick={scrollToTop} className="btn-primary text-center">
                  Hire Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;