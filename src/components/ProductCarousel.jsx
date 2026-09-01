import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShoppingBag, 
  Car, 
  GraduationCap, 
  Activity, 
  ShieldAlert, 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../data/solutionsData';

export const ProductCarousel = () => {
  const [activeTab, setActiveTab] = useState('shago');
  const solutionsList = Object.values(SOLUTIONS_DATA);
  const currentSolution = SOLUTIONS_DATA[activeTab];

  const getTabIcon = (id) => {
    switch (id) {
      case 'shago': return ShoppingBag;
      case 'rido': return Car;
      case 'isms': return GraduationCap;
      case 'med-x': return Activity;
      case 'sok-ipcrs': return ShieldAlert;
      default: return Activity;
    }
  };

  return (
    <section id="solutions" className="py-20 bg-cyber-light dark:bg-cyber-dark text-slate-900 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyber-purple-glow/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 dark:bg-cyber-purple/30 border border-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light text-xs font-semibold">
            <span>PROPRIETARY SUITE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Mission-Critical Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light to-cyber-bronze-light">Platforms</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Dedicated sovereign digital infrastructure tailored for government ministries, state agencies, and enterprise logistics networks.
          </p>
        </div>

        {/* Tab Navigation Pill Bar */}
        <div className="flex items-center justify-start md:justify-center gap-2 overflow-x-auto pb-4 no-scrollbar">
          {solutionsList.map((sol) => {
            const Icon = getTabIcon(sol.id);
            const isActive = activeTab === sol.id;
            return (
              <button
                key={sol.id}
                onClick={() => setActiveTab(sol.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold transition-all whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-cyber-purple to-cyber-purple-glow text-white shadow-glow-purple scale-105'
                    : 'bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-slate-700 dark:text-slate-300 hover:border-cyber-purple-light/50'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{sol.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Solution Feature Card Preview */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="mt-8 rounded-3xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-2xl p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Left Info Column */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-cyber-purple/20 border border-cyber-purple/30 text-cyber-purple-light text-xs font-mono">
                  {currentSolution.badge}
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                  {currentSolution.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
                {currentSolution.subtitle}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {currentSolution.description}
              </p>

              {/* Core Modules Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentSolution.coreModules.slice(0, 4).map((mod) => (
                  <div key={mod.id} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-cyber-dark/60 border border-slate-200 dark:border-cyber-border/50">
                    <CheckCircle2 className="w-4 h-4 text-cyber-purple-light mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">{mod.title}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 line-clamp-1">{mod.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Stats Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 border-y border-slate-200 dark:border-cyber-border/60">
                {currentSolution.stats.map((s, idx) => (
                  <div key={idx}>
                    <div className="text-base sm:text-lg font-bold font-mono text-cyber-bronze-light">{s.value}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Deep Dive Route CTA */}
              <div className="pt-2 flex flex-col sm:flex-row gap-4">
                <Link
                  to={currentSolution.path}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-purple-glow text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glow-purple hover:opacity-95 transition-all"
                >
                  Explore Dedicated {currentSolution.title} Page <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Graphic Preview Banner */}
            <div className="lg:col-span-6">
              <div className="relative p-2 rounded-2xl bg-gradient-to-br from-cyber-border to-transparent border border-cyber-border/60 shadow-xl overflow-hidden group">
                <img 
                  src={currentSolution.heroImage} 
                  alt={currentSolution.title} 
                  className="w-full h-auto rounded-xl object-cover transform group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/shago_banner.png';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-dark/80 via-transparent to-transparent opacity-60 pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-white">
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/20">
                    STATUS: ACTIVE OPERATIONAL
                  </span>
                  <span className="px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/20 text-cyber-bronze-light">
                    Sovereign Core
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
