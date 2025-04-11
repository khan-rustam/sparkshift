import { motion } from "framer-motion";
import { Target, Zap, Linkedin, ArrowUpRight } from "lucide-react";
import Shazia from "../assets/team/Shazia.jpg";
import Rustam from "../assets/team/Rustam.jpg";
import Pradeependra from "../assets/team/PP.jpg";
import AliAsgar from "../assets/team/ali.jpg";

const team = [
  {
    image: Shazia,
    name: "Shazia",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/shazia-praveen/",
    color: "from-purple-600/20 to-pink-600/20"
  },
  {
    image: Rustam,
    name: "Rustam",
    role: "Development Director",
    linkedin: "https://www.linkedin.com/in/khan-rustam/",
    color: "from-blue-600/20 to-cyan-600/20"
  },
  {
    image: Pradeependra,
    name: "Pradeependra",
    role: "Technical Director",
    linkedin: "https://www.linkedin.com/in/pradeependra-pratap/",
    color: "from-green-600/20 to-emerald-600/20"
  },
  {
    image: AliAsgar,
    name: "Ali Asgar",
    role: "Creative Director",
    linkedin: "https://www.linkedin.com/in/ali-asgar-ui2002",
    color: "from-orange-600/20 to-yellow-600/20"
  },
];

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen pt-32 pb-16 relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/5"
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 20,
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
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Our Story
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We're a team of passionate individuals dedicated to transforming the
            digital landscape with innovation and creativity.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            <div className="glass-panel p-8 relative border border-gray-800 group-hover:border-primary/50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Mission
              </h2>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                To empower businesses with innovative digital solutions that drive
                growth and create lasting impact in the digital world.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            <div className="glass-panel p-8 relative border border-gray-800 group-hover:border-purple-500/50 transition-colors duration-300">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-purple-400" />
              </div>
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Vision
              </h2>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                To be the leading force in digital transformation, setting new
                standards for innovation and creativity.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The creative minds behind SPARK SHIFT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500`} />
              
              <div className="glass-panel p-6 text-center relative border border-gray-800 group-hover:border-primary/50 transition-colors duration-300">
                <div className="relative mb-6">
                  <motion.div
                    className="w-32 h-32 mx-auto relative"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/50 to-purple-500/50 rounded-full blur-md" />
                    <motion.img
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover relative z-10 border-2 border-white/10"
                    />
                  </motion.div>
                </div>
                <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {member.name}
                </h3>
                <p className="text-primary mb-4">{member.role}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                  <span>Connect</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
