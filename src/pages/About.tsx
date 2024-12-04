import { motion } from "framer-motion";
import { Target, Zap } from "lucide-react";

const team = [
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQHe8xNb4nOwsg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1721389008436?e=1738800000&v=beta&t=5iTmN-vD191fxnahaOFrPjtsS5-8eBILaYpXtQpvgjM",
    name: "Shazia ",
    role: "Founder & CEO",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEFGuEQur0ZWg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1719334653333?e=1738800000&v=beta&t=3Ja9ePNn2P64tqWC1-nisqNyPL7XbsGL_A6e0DlVuHo",
    name: "Pradeependra",
    role: "Technical Director",
  },
  {
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH3dthDb-GH_A/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1731403670415?e=1738800000&v=beta&t=UDj0AlskpQSeuQXgI-Ln7657AreJwIIjpYTCefQX3gM",
    name: "Ali Asgar",
    role: "Creative Director",
  },
  {
    image:
      "https://southcentralus1-mediap.svc.ms/transform/thumbnail?provider=spo&farmid=194091&inputFormat=jpg&cs=MDAwMDAwMDAtMDAwMC0wMDAwLTAwMDAtMDAwMDQ4MTcxMGE0fFNQTw&docid=https%3A%2F%2Fmy.microsoftpersonalcontent.com%2F_api%2Fv2.0%2Fdrives%2Fb!JU2-SjlE80yq9YWEOhJAGguqkXQS_tpOs0i184C5N2ktUbc-xmibQ4tlV1Kt9Yuv%2Fitems%2F0175MCW62FMJD7Y64FWBCI2FPJ6I7L5E2W%3Ftempauth%3Dv1e.eyJzaXRlaWQiOiI0YWJlNGQyNS00NDM5LTRjZjMtYWFmNS04NTg0M2ExMjQwMWEiLCJhcHBpZCI6IjAwMDAwMDAwLTAwMDAtMDAwMC0wMDAwLTAwMDA0ODE3MTBhNCIsImF1ZCI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMC9teS5taWNyb3NvZnRwZXJzb25hbGNvbnRlbnQuY29tQDkxODgwNDBkLTZjNjctNGM1Yi1iMTEyLTM2YTMwNGI2NmRhZCIsImV4cCI6IjE3MzMzMTM2MDAifQ.jgEVtByJnn0AbVYGeJxMD-abmTOPtQ8g2ww6MAYoRZcCzUbDKH_JfXU5WUoQP0zbj-CW8Qt3rTnQHHNri5H86FeH5_C3QVbDAjqP4-O7XsxWLGDH8rF_Tm5h9z1-lM80kdbBN_c-BouamPKzuMFFX5ZVgMZ4IFhJBm9T11ZenmBXGXiS0yORVLTTAoP7xwBZGV32IxTd2JtzXgE1SbjuHhIJvK1k3aVB8O5VxsOqi8OsWRrFvSnOYYmD_3Wa69IOCGCoB132RlFgyDC6vytI_87rfPyXaSRCKKI5E8YsDI15KJUPUs8Bo1B-BcKkKfK5hrUMVTD51I91ITK58qtDNpWYdhm-PeQ69WPRNDbEfvpvrD3C5WBOgYXge8F2qhJb.i5Elobv-6ZDC2SWBhZ8rAMl9LbypmJa8eowQdo2iOEg%26version%3DPublished&cb=63868897693&encodeFailures=1&width=649&height=1187&action=Access",
    name: "Rustam",
    role: "Development Director",
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
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="glass-panel p-6 text-center"
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
              <p className="text-primary">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default About;
