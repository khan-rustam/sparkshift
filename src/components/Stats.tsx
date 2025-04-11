import { motion } from 'framer-motion';
import { 
  RiUserStarFill, 
  RiCheckboxCircleFill, 
  Ri24HoursFill, 
  RiAwardFill 
} from 'react-icons/ri';

const Stats = () => {
  const stats = [
    {
      icon: <RiUserStarFill className="w-8 h-8" />,
      value: "10+",
      label: "Happy Clients",
    },
    {
      icon: <RiCheckboxCircleFill className="w-8 h-8" />,
      value: "40+",
      label: "Projects Completed",
    },
    {
      icon: <Ri24HoursFill className="w-8 h-8" />,
      value: "24/7",
      label: "Support Available",
    },
    {
      icon: <RiAwardFill className="w-8 h-8" />,
      value: "5 +",
      label: "Years of Experience",
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group relative"
            >
              {/* Purple glow effect */}
              <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 rounded-2xl blur-2xl transition-all duration-300 -z-10" />
              
              <div className="relative p-6 rounded-2xl bg-gray-900/50 backdrop-blur-sm border border-gray-800 group-hover:border-purple-500/50 transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-purple-500/10 mb-4 text-purple-500 group-hover:text-purple-400 group-hover:scale-110 transition-all duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-br from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                  {stat.value}
                </h3>
                <p className="text-gray-400 group-hover:text-purple-200 transition-colors duration-300">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats; 