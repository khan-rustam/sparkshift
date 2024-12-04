import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../assets/logo.png';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-light mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>  
            <img src={logo} alt="SPARKSHIFT" className="w-72 h-20" />
          {/* <h3 className="text-xl font-bold mb-4">SPARK<span className="text-primary">SHIFT</span></h3> */}
            <p className="text-gray-300 mb-4">
              Transforming digital presence with innovative solutions that drive growth and success.
            </p>
            <div className="flex space-x-4">
              <a 
                href="http://www.linkedin.com/company/spark-shift-digital/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/sparkshift.digital" 
                target="_blank" 
                rel="noopener noreferrer"
                className="social-link"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" onClick={scrollToTop} className="text-gray-300 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-gray-300 hover:text-primary transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/portfolio" onClick={scrollToTop} className="text-gray-300 hover:text-primary transition-colors">Portfolio</Link>
              </li>
              <li>
                <Link to="/about" onClick={scrollToTop} className="text-gray-300 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" onClick={scrollToTop} className="text-gray-300 hover:text-primary transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">Digital Marketing</li>
              <li className="text-gray-300">Video Editing</li>
              <li className="text-gray-300">Product Photography</li>
              <li className="text-gray-300">Email Marketing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <a 
                href="mailto:reachout@sparkshift.digital" 
                className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5 text-primary" />
                <span>reachout@sparkshift.digital</span>
              </a>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-gray-300">+91 9999999999</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary" />
                <span className="text-gray-300">Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center">
          <p className="text-gray-300">
            &copy; {new Date().getFullYear()} SPARKSHIFT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;