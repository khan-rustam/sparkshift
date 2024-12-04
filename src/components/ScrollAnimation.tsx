import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollAnimation = ({ children, className = "" }: ScrollAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    margin: "-100px",
    amount: 0.3 // Controls how much of the element should be in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
