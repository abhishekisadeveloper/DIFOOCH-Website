import React from "react";
import { motion } from "framer-motion";

const ScrollAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ y: [50, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      viewport={{once: true}}
    >
      {children}
    </motion.div>
  );
};

export default ScrollAnimation;
