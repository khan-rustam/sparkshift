import { motion } from 'framer-motion';
import { 
  RiStarSFill,
  RiCodeSSlashFill,
  RiLineChartFill,
  RiUserHeartFill,
  RiShieldStarFill,
  RiMedalFill
} from 'react-icons/ri';

const WhatWeDeliver = () => {
  const services = [
    {
      icon: <RiStarSFill className="w-8 h-8" />,
      title: "Creative Design",
      description: "Eye-catching visuals that capture attention and communicate your brand message effectively.",
      iconColor: "text-yellow-400 group-hover:text-yellow-300",
      bgColor: "bg-yellow-400/10"
    },
    {
      icon: <RiCodeSSlashFill className="w-8 h-8" />,
      title: "Robust Development",
      description: "Solid code foundations that ensure your platform runs smoothly and scales with your needs.",
      iconColor: "text-blue-400 group-hover:text-blue-300",
      bgColor: "bg-blue-400/10"
    },
    {
      icon: <RiLineChartFill className="w-8 h-8" />,
      title: "Growth Strategy",
      description: "Data-driven approaches to expand your reach and convert visitors into loyal customers.",
      iconColor: "text-green-400 group-hover:text-green-300",
      bgColor: "bg-green-400/10"
    },
    {
      icon: <RiUserHeartFill className="w-8 h-8" />,
      title: "User Experience",
      description: "Intuitive interfaces and seamless interactions that keep users engaged and satisfied.",
      iconColor: "text-pink-400 group-hover:text-pink-300",
      bgColor: "bg-pink-400/10"
    },
    {
      icon: <RiShieldStarFill className="w-8 h-8" />,
      title: "Security First",
      description: "Advanced security measures to protect your data and maintain user trust.",
      iconColor: "text-cyan-400 group-hover:text-cyan-300",
      bgColor: "bg-cyan-400/10"
    },
    {
      icon: <RiMedalFill className="w-8 h-8" />,
      title: "Quality Assurance",
      description: "Rigorous testing and optimization to ensure flawless performance.",
      iconColor: "text-orange-400 group-hover:text-orange-300",
      bgColor: "bg-orange-400/10"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            What We <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Deliver</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            We transform your ideas into reality with cutting-edge technology and creative excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Purple glow effect */}
              <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 rounded-2xl blur-2xl transition-all duration-300 -z-10" />
              
              <div className="relative p-8 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-purple-500/50 transition-all duration-300 h-full">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${service.bgColor} mb-6 ${service.iconColor} group-hover:scale-110 transition-all duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 bg-gradient-to-br from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  {service.title}
                </h3>
                <p className="text-gray-400 group-hover:text-purple-200 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-col md:flex-row items-center gap-4 md:gap-8 p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 group hover:border-purple-500/50 transition-all duration-300">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center text-pink-400 group-hover:text-pink-300 group-hover:scale-110 transition-all duration-300">
                <RiStarSFill className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 group-hover:text-purple-200 transition-colors duration-300">Ready to start your project?</p>
                <h4 className="text-xl font-bold bg-gradient-to-br from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  Let's create something amazing together
                </h4>
              </div>
            </div>
            <button className="px-8 py-3 bg-purple-500 hover:bg-purple-600 text-white rounded-lg transition-colors duration-300 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatWeDeliver; 