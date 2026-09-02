import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Pages
import { Home } from '../pages/Home';
import { Capabilities } from '../pages/Capabilities';
import { Governance } from '../pages/Governance';
import { ShagoPage } from '../pages/solutions/ShagoPage';
import { RidoPage } from '../pages/solutions/RidoPage';
import { IsmsPage } from '../pages/solutions/IsmsPage';
import { MedXPage } from '../pages/solutions/MedXPage';
import { SokIpcrsPage } from '../pages/solutions/SokIpcrsPage';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 16,
    scale: 0.99
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.99,
    transition: {
      duration: 0.25,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const PageTransition = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        className="w-full"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/solutions/shago" element={<ShagoPage />} />
          <Route path="/solutions/rido" element={<RidoPage />} />
          <Route path="/solutions/isms" element={<IsmsPage />} />
          <Route path="/solutions/med-x" element={<MedXPage />} />
          <Route path="/solutions/sok-ipcrs" element={<SokIpcrsPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
};
