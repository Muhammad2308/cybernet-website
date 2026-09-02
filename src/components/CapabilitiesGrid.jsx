import React from 'react';
import { Shield, Lock, Server, Cpu, Radio, Database, RefreshCw, Key } from 'lucide-react';
import { FadeIn, StaggerContainer, StaggerItem } from './AnimatedSection';

export const CapabilitiesGrid = () => {
  const pillars = [
    {
      icon: Shield,
      title: "Sovereign Data Residency",
      desc: "Strict adherence to national data protection acts with on-premise and local air-gapped hosting infrastructure. Zero telemetry data is routed outside national boundaries.",
      badge: "ISO 27001 / NDPR"
    },
    {
      icon: Lock,
      title: "Zero-Trust Architecture",
      desc: "Attribute-based access control (ABAC), encrypted session tokens, and cryptographic hardware security modules (HSM) verifying every inter-service API request.",
      badge: "FIPS 140-3 Hardware"
    },
    {
      icon: Server,
      title: "Active-Active High Availability",
      desc: "Multi-region distributed clustering with automatic failover, maintaining continuous 99.999% service availability during peak load or network partitions.",
      badge: "99.999% SLA Target"
    },
    {
      icon: Radio,
      title: "Low-Latency Edge Telemetry",
      desc: "Event-driven WebSocket and gRPC streaming pipelines processing over 50,000 telemetry events per second with sub-45ms roundtrip latency.",
      badge: "< 45ms Telemetry"
    }
  ];

  return (
    <section id="capabilities" className="py-20 bg-slate-50 dark:bg-cyber-dark/80 text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeIn className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 dark:bg-cyber-purple/30 border border-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light text-xs font-semibold">
            <span>ENGINEERING PRINCIPLES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light via-cyber-bronze-light to-amber-500">Uncompromising Resilience</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Our sovereign engineering framework powers mission-critical operations where failure, data leakage, or downtime is not an option.
          </p>
        </FadeIn>

        {/* Pillars Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" staggerChildren={0.12}>
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <StaggerItem key={idx}>
                <div className="p-8 rounded-3xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-xl hover:shadow-glow-purple hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group h-full">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-2xl bg-cyber-purple/10 dark:bg-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light border border-cyber-purple/30 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-cyber-dark text-cyber-bronze-light border border-slate-200 dark:border-cyber-border">
                        {pillar.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-cyber-purple-light transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 dark:border-cyber-border/60 flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Cpu className="w-3.5 h-3.5 text-cyber-purple-light" />
                    <span>ARCHITECTURE NODE #{idx + 1}</span>
                  </div>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>

      </div>
    </section>
  );
};
