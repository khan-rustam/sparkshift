import { motion } from "framer-motion";
import { Target, Zap } from "lucide-react";

const team = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQF0Tlk4pEKB6Q/profile-displayphoto-shrink_800_800/B56ZRvZcVnH0Ac-/0/1737035730026?e=1743033600&v=beta&t=1f27wk9TSlgzhntbYCFs9xr1A7Hdt3qMAq2vgmApcN8",
    name: "Shazia",
    role: "Founder & CEO",
    linkedin: "https://www.linkedin.com/in/shazia-praveen/",
  },
   {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHnkQjGYwZUnQ/profile-displayphoto-shrink_800_800/B56ZXfzwBRGsAg-/0/1743216641652?e=1748476800&v=beta&t=1wSIBjha2J9cWXj6zM_56Ru9VvxbYIKnwjB44FmE1Zg",
    name: "Rustam",
    role: "Development Director",
    linkedin: "https://www.linkedin.com/in/khan-rustam/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEFGuEQur0ZWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719334653333?e=1738800000&v=beta&t=3Ja9ePNn2P64tqWC1-nisqNyPL7XbsGL_A6e0DlVuHo",
    name: "Pradeependra",
    role: "Technical Director",
    linkedin: "https://www.linkedin.com/in/pradeependra-pratap/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHMyfdmq3Qi1g/profile-displayphoto-shrink_800_800/B56ZRKM7ojGQAc-/0/1736411692083?e=1743033600&v=beta&t=cj0JwbQjV8Vw5xmyZ0BgOXgKXOxYuRO9XI43lpISsec",
    name: "Ali Asgar",
    role: "Creative Director",
    linkedin: "https://www.linkedin.com/in/ali-asgar-ui2002",
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
      className="min-h-screen pt-32 pb-16"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're a team of passionate individuals dedicated to transforming the
            digital landscape.
          </p>
        </motion.div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-8"
          >
            <Target className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-300">
              To empower businesses with innovative digital solutions that drive
              growth and create lasting impact in the digital world.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="glass-panel p-8"
          >
            <Zap className="w-12 h-12 text-primary mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-300">
              To be the leading force in digital transformation, setting new
              standards for innovation and creativity.
            </p>
          </motion.div>
        </div>

        {/* Team Section */}
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            The creative minds behind SPARK SHIFT
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.a
              key={index}
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-6 text-center relative group"
            >
              <motion.img
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-primary mb-4">{member.role}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
