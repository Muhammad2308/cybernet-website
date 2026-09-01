import React, { useEffect } from 'react';
import { GovernanceSection } from '../components/GovernanceSection';
import { ContactForm } from '../components/ContactForm';
import { Scale, ShieldCheck, Award, FileText, CheckCircle2 } from 'lucide-react';

export const Governance = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Corporate Governance & Compliance | Cybernet Systems";
  }, []);

  return (
    <div className="pt-24 pb-20 bg-cyber-light dark:bg-cyber-dark text-slate-900 dark:text-white transition-colors duration-300 min-h-screen">
      
      {/* Hero Header */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-slate-200 dark:border-cyber-border/80">
        <div className="max-w-7xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-purple/10 dark:bg-cyber-purple/30 border border-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light text-xs font-mono font-semibold">
            <Scale className="w-4 h-4" />
            <span>CORPORATE GOVERNANCE & COMPLIANCE</span>
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight max-w-4xl mx-auto leading-tight">
            Institutional Trust & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light via-cyber-bronze-light to-amber-500">Regulatory Oversight</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Cybernet Systems Limited operates with total transparency, strict ethical oversight, and complete adherence to national data protection acts.
          </p>
        </div>
      </section>

      {/* Main Governance Section */}
      <GovernanceSection />

      {/* Audit Matrix */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-cyber-card/30">
        <div className="max-w-5xl mx-auto space-y-8">
          <h2 className="text-2xl font-bold text-center">Quarterly Compliance Audits & Verification</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border flex items-center justify-between">
              <span className="font-semibold text-sm">NDPR Data Protection Audit</span>
              <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">VERIFIED</span>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border flex items-center justify-between">
              <span className="font-semibold text-sm">ISO 27001 Security Management</span>
              <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">CERTIFIED</span>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border flex items-center justify-between">
              <span className="font-semibold text-sm">PCI-DSS Payment Gateway Escrow</span>
              <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">LEVEL 1</span>
            </div>
            <div className="p-4 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border flex items-center justify-between">
              <span className="font-semibold text-sm">Air-Gapped Sovereign Key Audit</span>
              <span className="text-xs font-mono px-2 py-1 rounded bg-emerald-500/20 text-emerald-400 font-bold">PASSED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

    </div>
  );
};
