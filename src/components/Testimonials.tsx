import { motion } from 'framer-motion';
import { Star, Quote, Sparkles } from 'lucide-react';
import ScrollAnimation from './ScrollAnimation';

const testimonials = [
  {
    id: 1,
    name: "Nivedita Bhasin",
    role: "Client",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/1726162733435Nivedita%20Bhasin.jpg?alt=media&token=6d5690aa-448f-49f6-98ed-d6a1905d046c",
    content: "Rustam and his team worked very hard and helped us make a wonderful website within the timeframe and to our specific requirements. A job done well.",
    rating: 5
  },
  {
    id: 2,
    name: "Bobby Choudhury",
    role: "Client",
    image: "https://firebasestorage.googleapis.com/v0/b/fir-india-77ae4.appspot.com/o/1726159477018BOBBY%20CHOUDHURY.jpg?alt=media&token=9996b3c7-3984-444b-a099-2014ccf0e415",
    content: "Excellent service and great attention to detail. The team provided clear guidance on file formats and delivered outstanding results.",
    rating: 5
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder, GrowthLabs",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    content: "Working with SPARKSHIFT was a game-changer for our business. They delivered beyond our expectations.",
    rating: 5
  }
];

const Testimonials = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-dark-light relative overflow-hidden">
      {/* Animated Background Elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 20, repeat: Infinity }}
        className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{ duration: 15, repeat: Infinity }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
      />

      <div className="container mx-auto px-4 relative">
        <ScrollAnimation>
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-primary" />
              <h2 className="text-4xl font-bold">Success Stories</h2>
              <Sparkles className="w-6 h-6 text-primary" />
            </div>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transforming businesses through digital excellence
            </p>
          </div>
        </ScrollAnimation>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="glass-panel p-6 relative hover:transform hover:scale-105 transition-all duration-300"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-primary text-sm">{testimonial.role}</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
