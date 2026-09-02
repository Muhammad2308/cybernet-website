import React from 'react';
import { motion } from 'framer-motion';

export const FadeIn = ({ children, delay = 0, duration = 0.5, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({ children, delay = 0, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.92 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerContainer = ({ children, className = "", delayChildren = 0, staggerChildren = 0.1 }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-40px" }}
    variants={{
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          delayChildren,
          staggerChildren
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 24, scale: 0.96 },
      show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1]
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);
