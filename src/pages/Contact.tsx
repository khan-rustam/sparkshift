import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Users,
} from "lucide-react";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  // Function to play success sound
  const playSuccessSound = () => {
    const audio = new Audio("/sounds/email-success.mp3");
    audio.play().catch((error) => console.error("Error playing sound:", error));
  };

  // Function to play error sound
  const playErrorSound = () => {
    const audio = new Audio("/sounds/email-error.mp3");
    audio.play().catch((error) => console.error("Error playing sound:", error));
  };

  // Function to validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email format is valid
    if (!isValidEmail(formData.email)) {
      playErrorSound(); // Play error sound
      toast.error("Please enter a valid email address", { duration: 5000 });
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setStatus("success");
      playSuccessSound(); // Play success sound
      toast.success(
        "Thank you! Your form has been successfully submitted. We're excited to connect with you soon!!",
        { duration: 5000 }
      );
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
      toast.error(
        "Oops! It seems something went wrong. We're sorry for the inconvenience. Please try submitting the form again. ",
        { duration: 5000 }
      );
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  const features = [
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "24/7 Support",
      description: "Always here to help with your queries",
    },
    {
      icon: <Clock className="w-6 h-6 text-primary" />,
      title: "Quick Response",
      description: "Get responses within 24 hours",
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: "Dedicated Team",
      description: "Personal account manager for your project",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 relative overflow-hidden">
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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to transform your digital presence? We're here to help!
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-purple-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="glass-panel p-6 text-center relative border border-gray-800 group-hover:border-primary/50 transition-colors duration-300">
                <div className="inline-block p-3 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  {feature.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ scale: 1.01 }}
            className="relative group"
          >
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
            
            <div className="glass-panel p-8 relative border border-gray-800 group-hover:border-primary/50 transition-colors duration-300">
              <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Send Us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="peer w-full px-4 py-2 rounded-lg bg-dark-light border border-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 -top-2 px-1 text-sm text-gray-400 bg-dark-light peer-focus:text-primary peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-200"
                    >
                      Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="peer w-full px-4 py-2 rounded-lg bg-dark-light border border-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 -top-2 px-1 text-sm text-gray-400 bg-dark-light peer-focus:text-primary peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-200"
                    >
                      Email
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="peer w-full px-4 py-2 rounded-lg bg-dark-light border border-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder=" "
                    required
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 -top-2 px-1 text-sm text-gray-400 bg-dark-light peer-focus:text-primary peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-200"
                  >
                    Subject
                  </label>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="peer w-full px-4 py-2 rounded-lg bg-dark-light border border-white/20 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                    placeholder=" "
                    required
                  ></textarea>
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-2 px-1 text-sm text-gray-400 bg-dark-light peer-focus:text-primary peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 transition-all duration-200"
                  >
                    Message
                  </label>
                </div>
                <motion.button
                  type="submit"
                  disabled={status === "loading"}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-blue-600 text-white font-medium flex items-center justify-center group relative overflow-hidden ${
                    status === "loading" ? "opacity-70 cursor-not-allowed" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative z-10">
                    {status === "loading" ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Verifying...
                      </div>
                    ) : status === "success" ? (
                      "Message Sent!"
                    ) : status === "error" ? (
                      "Error Sending Message"
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 w-4 h-4 inline-block group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-primary/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
              
              <div className="glass-panel p-8 relative border border-gray-800 group-hover:border-purple-500/50 transition-colors duration-300">
                <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email Us</h3>
                      <a
                        href="mailto:reachout@sparkshift.digital"
                        className="text-gray-300 hover:text-primary transition-colors"
                      >
                        reachout@sparkshift.digital
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Call Us</h3>
                      <p className="text-gray-300">+91 90790-57892</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4 group">
                    <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Visit Us</h3>
                      <p className="text-gray-300">Delhi INDIA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
 
