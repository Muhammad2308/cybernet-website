import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, ArrowRight, Activity, Lock, Server } from 'lucide-react';

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-cyber-light dark:bg-cyber-dark text-slate-900 dark:text-white py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      {/* Visual Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 sm:w-[500px] sm:h-[500px] bg-cyber-purple-glow/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
        
        {/* Left Column Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 text-center lg:text-left space-y-6"
        >
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-purple/10 dark:bg-cyber-purple/30 border border-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light text-xs sm:text-sm font-semibold"
          >
            <ShieldCheck className="w-4 h-4"/>
            <span>Sovereign Software Architecture</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
          >
            Engineering Secure, Resilient Systems That <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light via-cyber-bronze-light to-amber-500">Keep Nigeria Moving</span>.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
          >
            Cybernet Systems Limited builds always-on, high-availability digital infrastructure for enterprise commerce, national security, healthcare, and urban mobility.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
          >
            <a 
              href="#solutions" 
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-purple-glow text-white font-semibold flex items-center justify-center gap-2 shadow-glow-purple hover:opacity-95 hover:scale-105 transition-all"
            >
              Explore Platforms <ArrowRight className="w-4 h-4"/>
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-cyber-border bg-white dark:bg-cyber-card text-slate-800 dark:text-slate-200 font-semibold flex items-center justify-center gap-2 hover:bg-slate-50 dark:hover:bg-cyber-card/80 hover:scale-105 transition-all"
            >
              <Activity className="w-4 h-4 text-cyber-bronze-light"/> Request Consultation
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200 dark:border-cyber-border/60 max-w-md mx-auto lg:mx-0"
          >
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyber-purple-light">99.999%</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">SLA Uptime Target</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-cyber-bronze-light">5 Core</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Sovereign Suites</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">Zero-Trust</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Security Architecture</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column Badge / Isometric Graphic */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 30 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative p-4 rounded-3xl bg-gradient-to-b from-cyber-border/40 to-transparent border border-cyber-border/50 backdrop-blur-md shadow-2xl max-w-sm sm:max-w-md group hover:border-cyber-purple-light/50 transition-colors">
            <div className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-mono flex items-center gap-1.5 backdrop-blur-sm z-20">
              <Lock className="w-3 h-3 text-amber-400" />
              <span>ISO & NDPR CERTIFIED</span>
            </div>
            <img 
              src="/assets/img/cybernet-logo-trans.png" 
              alt="Cybernet Systems Logo Seal" 
              className="w-full h-auto rounded-2xl shadow-glow-purple object-contain p-4 bg-cyber-card/40 hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/img/cybernet-logo-back.jpg';
              }}
            />
            <div className="mt-4 p-3 rounded-xl bg-slate-900/60 border border-cyber-border text-center text-xs font-mono text-cyber-silver">
              CYBERNET CREST // MISSION-CRITICAL INFRASTRUCTURE
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
