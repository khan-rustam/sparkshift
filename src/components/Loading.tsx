import { motion } from 'framer-motion';

interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
}

const Loading = ({ size = 'md' }: LoadingProps) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className="flex justify-center items-center perspective-[1000px]">
      <div className={`${sizes[size]} relative transform-style-preserve-3d animate-spin-slow`}>
        {/* Front face */}
        <motion.div
          className={`${sizes[size]} absolute bg-primary/80 rounded-lg`}
          initial={{ rotateX: 0, rotateY: 0, scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
            rotateX: [0, 180, 360],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        {/* Right face */}
        <motion.div
          className={`${sizes[size]} absolute bg-secondary/80 rounded-lg`}
          initial={{ rotateX: 90, rotateY: 0, scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
            rotateX: [90, 270, 450],
            rotateY: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.2
          }}
        />
        {/* Bottom face */}
        <motion.div
          className={`${sizes[size]} absolute bg-primary/60 rounded-lg`}
          initial={{ rotateX: 0, rotateY: 90, scale: 1 }}
          animate={{
            scale: [1, 1.2, 1],
            rotateX: [0, 180, 360],
            rotateY: [90, 270, 450],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4
          }}
        />
      </div>
    </div>
  );
};

export default Loading;
