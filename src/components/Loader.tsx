import React from 'react';
import { motion } from 'framer-motion';

interface LoaderProps {
  size?: number;
  color?: string;
}

const Loader: React.FC<LoaderProps> = ({ size = 50, color = '#4A5568' }) => {
  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-2 z-[200]">
      <motion.div
        style={{
          width: size,
          height: size,
          border: `4px solid ${color}`,
          borderBottomColor: 'transparent',
          borderRadius: '50%',
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: 'linear',
        }}
      />
    </div>
  );
};

export default Loader;
