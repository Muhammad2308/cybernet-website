import React, { useEffect } from 'react';
import { CapabilitiesGrid } from '../components/CapabilitiesGrid';
import { ShieldCheck, Cpu, Database, Server, Terminal, Lock, RefreshCw, Layers } from 'lucide-react';

export const Capabilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Operating Model & Technical Capabilities | Cybernet Systems";
  }, []);

  return (
    <div className="pt-24 pb-20 bg-cyber-light dark:bg-cyber-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
      
      {/* Hero Header */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-cyber-border/80">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-purple/10 dark:bg-cyber-purple/30 border border-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light text-xs font-mono font-semibold">
            <Cpu className="w-4 h-4" />
            <span>OPERATING MODEL & ARCHITECTURE</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Sovereign Software <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light via-cyber-bronze-light to-amber-500">Engineering Blueprint</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover how Cybernet Systems Limited engineers high-availability, low-latency platforms with hardware-grade cryptographic isolation and zero single points of failure.
          </p>
        </div>
      </section>

      {/* Main Capabilities Grid */}
      <CapabilitiesGrid />

      {/* Deep Architecture Breakdown Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 dark:bg-cyber-card/40">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <h2 className="text-3xl font-extrabold tracking-tight">
              High-Availability Infrastructure Topology
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base">
              Air-gapped data residency specs and real-time distributed consensus pipelines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border space-y-4">
              <div className="p-3 rounded-xl bg-cyber-purple/20 text-cyber-purple-light w-fit">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">1. Multi-Region Data Isolation</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Primary and secondary database nodes with synchronous local replication and encrypted asynchronous cross-zone backups within sovereign state borders.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border space-y-4">
              <div className="p-3 rounded-xl bg-cyber-purple/20 text-cyber-purple-light w-fit">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">2. Hardware Security Modules</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                FIPS 140-3 compliant hardware encryption modules for key derivation, signing biometric fingerprints, and securing high-volume escrow payments.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border space-y-4">
              <div className="p-3 rounded-xl bg-cyber-purple/20 text-cyber-purple-light w-fit">
                <RefreshCw className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold">3. Sub-Second Circuit Breakers</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300">
                Resilience logic enforcing automated rate limiting, retry backoff with jitter, and graceful offline fallback states during network stress.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
