import React from 'react';
import { Server, Activity, ShieldCheck, Zap } from 'lucide-react';

export const StatsBanner = () => {
  const stats = [
    {
      icon: Server,
      value: '99.999%',
      label: 'SLA System Availability',
      subtext: 'High-availability active redundancy'
    },
    {
      icon: Activity,
      value: '₦18.4B+',
      label: 'Daily Transaction Clearing',
      subtext: 'Automated escrow & reconciliation'
    },
    {
      icon: ShieldCheck,
      value: '25M+',
      label: 'Protected Identity Records',
      subtext: 'Air-gapped biometric security'
    },
    {
      icon: Zap,
      value: '< 45ms',
      label: 'Average Telemetry Latency',
      subtext: 'Real-time low-latency routing'
    }
  ];

  return (
    <section className="py-12 bg-slate-100 dark:bg-cyber-card/60 border-y border-slate-200 dark:border-cyber-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border/80 shadow-md hover:border-cyber-purple-light/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-cyber-purple/10 dark:bg-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light border border-cyber-purple/20 group-hover:scale-110 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono uppercase px-2 py-1 rounded bg-slate-100 dark:bg-cyber-dark text-slate-500 dark:text-slate-400">
                    VERIFIED METRIC
                  </span>
                </div>
                <div className="text-3xl font-extrabold font-mono text-slate-900 dark:text-white group-hover:text-cyber-purple-light transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
