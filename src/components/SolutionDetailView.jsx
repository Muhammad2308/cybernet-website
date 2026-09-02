import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle, 
  Cpu, 
  Database, 
  Lock, 
  Zap, 
  Activity, 
  Layers, 
  Send,
  Building,
  Mail,
  User,
  CheckCircle2,
  Terminal
} from 'lucide-react';
import { PortalAccessModal } from './PortalAccessModal';
import { FadeIn, StaggerContainer, StaggerItem } from './AnimatedSection';

export const SolutionDetailView = ({ solution }) => {
  const [portalOpen, setPortalOpen] = useState(false);
  const [interactiveSimActive, setInteractiveSimActive] = useState(false);
  const [simOutput, setSimOutput] = useState(null);

  const runSimulation = () => {
    setInteractiveSimActive(true);
    setTimeout(() => {
      setInteractiveSimActive(false);
      setSimOutput({
        timestamp: new Date().toISOString(),
        status: "200 EXECUTION OK",
        latency: "14ms",
        hash: "0x8F9A" + Math.floor(Math.random() * 899999 + 100000).toString(16),
        message: `Successfully performed live telemetry verification across ${solution.title} node.`
      });
    }, 1200);
  };

  return (
    <div className="pt-24 pb-20 bg-cyber-light dark:bg-cyber-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
      
      {/* 1. Hero Header */}
      <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-cyber-border/80 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyber-purple-glow/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-7/12 space-y-6 text-center lg:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-purple/10 dark:bg-cyber-purple/30 border border-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light text-xs font-mono font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>{solution.badge}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
                {solution.title}: <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light via-cyber-bronze-light to-amber-500">{solution.subtitle}</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                {solution.description}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  onClick={() => setPortalOpen(true)}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-purple-glow text-white text-sm font-semibold flex items-center gap-2 shadow-glow-purple hover:opacity-95 hover:scale-105 transition-all cursor-pointer"
                >
                  Request Dedicated Portal Demo <ArrowRight className="w-4 h-4" />
                </button>
                
                <button
                  onClick={runSimulation}
                  disabled={interactiveSimActive}
                  className="px-6 py-3.5 rounded-xl border border-slate-300 dark:border-cyber-border bg-white dark:bg-cyber-card text-slate-800 dark:text-slate-200 text-sm font-semibold flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-cyber-card/80 hover:scale-105 transition-all cursor-pointer"
                >
                  <Terminal className="w-4 h-4 text-cyber-bronze-light" />
                  <span>{interactiveSimActive ? 'Executing Sim...' : 'Run Telemetry Sim'}</span>
                </button>
              </div>
            </motion.div>

            {/* Banner Graphic Preview */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, x: 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full lg:w-5/12"
            >
              <div className="relative p-3 rounded-3xl bg-gradient-to-b from-cyber-border to-transparent border border-cyber-border/80 backdrop-blur-md shadow-2xl overflow-hidden group">
                <img 
                  src={solution.heroImage} 
                  alt={solution.title} 
                  className="w-full h-auto rounded-2xl object-cover shadow-glow-purple group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/shago_banner.png';
                  }}
                />
                <div className="absolute top-6 left-6 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-cyber-silver border border-white/20">
                  {solution.category}
                </div>
              </div>
            </motion.div>

          </div>

          {/* Key Metrics Row */}
          <StaggerContainer className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4" staggerChildren={0.1}>
            {solution.stats.map((st, idx) => (
              <StaggerItem key={idx}>
                <div className="p-5 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border text-center hover:border-cyber-purple-light/50 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyber-purple-light">{st.value}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-1">{st.label}</div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Interactive Simulation Output Drawer */}
      {simOutput && (
        <motion.section 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="py-6 bg-slate-900 border-b border-cyber-border text-white font-mono"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                {simOutput.status}
              </span>
              <span>{simOutput.message}</span>
            </div>
            <div className="hidden sm:flex items-center gap-4 text-slate-400">
              <span>LATENCY: {simOutput.latency}</span>
              <span>HASH: {simOutput.hash}</span>
            </div>
          </div>
        </motion.section>
      )}

      {/* 2. Key Capabilities Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          
          <FadeIn className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Core Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light to-cyber-bronze-light">Modules</span>
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Architected for high throughput, sub-second execution, and zero data leakage.
            </p>
          </FadeIn>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" staggerChildren={0.12}>
            {solution.coreModules.map((mod) => (
              <StaggerItem key={mod.id}>
                <div className="p-8 rounded-3xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-xl hover:shadow-glow-purple hover:-translate-y-2 transition-all duration-300 group h-full">
                  <div className="p-3.5 rounded-2xl bg-cyber-purple/10 dark:bg-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light border border-cyber-purple/30 w-fit mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-cyber-purple-light transition-colors">
                    {mod.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {mod.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* 3. Architecture & Security Standard */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-cyber-dark/80 border-y border-slate-200 dark:border-cyber-border">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <FadeIn className="lg:col-span-6 space-y-6">
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                System Architecture & <span className="text-cyber-purple-light">Data Sovereignty Standard</span>
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                Every {solution.title} deployment utilizes air-gapped cryptographic vaults and active-active read replicas designed to operate independently in high-latency or offline environments.
              </p>

              <div className="space-y-3 font-mono text-xs">
                <div className="p-3.5 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Microservice Pipeline:</span>
                  <span className="font-bold text-cyber-silver">{solution.architecture.framework}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Response Latency:</span>
                  <span className="font-bold text-cyber-bronze-light">{solution.architecture.latency}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border flex items-center justify-between">
                  <span className="text-slate-500 dark:text-slate-400">Encryption Standard:</span>
                  <span className="font-bold text-emerald-400">{solution.architecture.security}</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-xl space-y-4">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <Layers className="w-5 h-5 text-cyber-purple-light" />
                  <span>Target Operational Domain & Use Cases</span>
                </h4>
                <ul className="space-y-3 pt-2">
                  {solution.useCases.map((uc, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-cyber-bronze-light shrink-0" />
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* 4. Action & Integration Portal */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <FadeIn className="max-w-4xl mx-auto text-center space-y-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-cyber-purple/20 via-cyber-card to-cyber-dark border border-cyber-purple/40 shadow-2xl space-y-6">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Deploy {solution.title} for Your Organization
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
              Schedule a technical briefing or request confidential sandbox API documentation with our engineering team.
            </p>
            <button
              onClick={() => setPortalOpen(true)}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-purple-glow text-white text-base font-semibold inline-flex items-center gap-2 shadow-glow-purple hover:opacity-95 hover:scale-105 transition-all cursor-pointer"
            >
              Request Access Portal Credentials <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </FadeIn>
      </section>

      <PortalAccessModal isOpen={portalOpen} onClose={() => setPortalOpen(false)} />
    </div>
  );
};
