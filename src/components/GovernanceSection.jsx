import React from 'react';
import { ShieldCheck, FileText, CheckCircle, Scale, Lock, Award, Eye } from 'lucide-react';

export const GovernanceSection = () => {
  const complianceStandards = [
    { title: "NDPR Compliance", desc: "Full alignment with Nigeria Data Protection Regulation standards.", icon: ShieldCheck },
    { title: "ISO/IEC 27001:2022", desc: "Certified Information Security Management Systems.", icon: Award },
    { title: "Air-Gapped Sovereign Vault", desc: "Local cryptographic key isolation for state registries.", icon: Lock },
    { title: "Immutable Audit Trails", desc: "Cryptographically signed logs for zero unauthorized tampering.", icon: FileText }
  ];

  return (
    <section id="governance" className="py-20 bg-cyber-light dark:bg-cyber-dark text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-semibold">
              <Scale className="w-3.5 h-3.5" />
              <span>SOVEREIGN GOVERNANCE FRAMEWORK</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">
              State-Grade Integrity & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light to-amber-500">Corporate Oversight</span>
            </h2>

            <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
              Cybernet Systems Limited operates under a rigid corporate governance matrix overseen by veteran software architects, legal counsel, and cybersecurity auditors. We safeguard national digital sovereignty across all 36 states and federal territories.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {complianceStandards.map((std, idx) => {
                const Icon = std.icon;
                return (
                  <div key={idx} className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-cyber-dark/80 border border-slate-200 dark:border-cyber-border/60">
                    <Icon className="w-5 h-5 text-cyber-purple-light shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold">{std.title}</div>
                      <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{std.desc}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-cyber-purple/20 to-transparent border border-cyber-purple/30 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-cyber-border">
                <div className="text-sm font-mono text-cyber-silver flex items-center gap-2">
                  <Eye className="w-4 h-4 text-cyber-bronze-light" />
                  <span>AUDIT STATUS REPORT</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
                  COMPLIANT
                </span>
              </div>

              <blockquote className="italic text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed">
                "Our software architecture is built on the fundamental principle that national data is a sovereign asset. We engineer systems that ensure zero data footprint leaves sovereign territory."
              </blockquote>

              <div className="flex items-center gap-4 pt-2">
                <div className="w-12 h-12 rounded-full bg-cyber-purple text-white flex items-center justify-center font-bold text-lg font-mono">
                  CS
                </div>
                <div>
                  <div className="text-sm font-bold">Cybernet Systems Directorate</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400">Board of Architecture & Technical Governance</div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
