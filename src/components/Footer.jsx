import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Award, Server, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 dark:bg-black border-t border-slate-800 dark:border-cyber-border transition-colors duration-300">
      
      {/* Top Banner Badges */}
      <div className="border-b border-slate-800/80 dark:border-cyber-border/60 py-6 bg-slate-950/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyber-purple-light" />
            <span>ISO/IEC 27001:2022 CERTIFIED</span>
          </div>
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-cyber-bronze-light" />
            <span>NDPR DATA SOVEREIGNTY COMPLIANT</span>
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>FIPS 140-3 HARDWARE ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-emerald-400" />
            <span>99.999% ACTIVE-ACTIVE SLA UPTIME</span>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-1 rounded-xl bg-gradient-to-br from-cyber-purple-light to-cyber-bronze-light">
                <img 
                  src="/assets/img/cybernet-logo-trans.png" 
                  alt="Cybernet Logo" 
                  className="w-9 h-9 rounded-lg object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/img/cybernet-logo-back.jpg';
                  }}
                />
              </div>
              <span className="text-xl font-extrabold text-white tracking-tight">
                CYBERNET <span className="text-cyber-purple-light">SYSTEMS</span>
              </span>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Engineering sovereign digital infrastructure, enterprise commerce clearing, urban transit telemetry, and law enforcement registries for Cybernet Systems Limited.
            </p>

            <div className="pt-2 text-xs font-mono text-cyber-bronze-light">
              HIGH-AVAILABILITY MISSION-CRITICAL INFRASTRUCTURE
            </div>
          </div>

          {/* Col 2: Solutions Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Proprietary Platforms
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/solutions/shago" className="hover:text-cyber-purple-light transition-colors flex items-center gap-1">
                  <span>SHAGO Logistics</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/solutions/rido" className="hover:text-amber-400 transition-colors flex items-center gap-1">
                  <span>RIDO Mobility</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/solutions/isms" className="hover:text-blue-400 transition-colors flex items-center gap-1">
                  <span>ISMS SmartSchool</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/solutions/med-x" className="hover:text-emerald-400 transition-colors flex items-center gap-1">
                  <span>MED-X Healthcare</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
              <li>
                <Link to="/solutions/sok-ipcrs" className="hover:text-red-400 transition-colors flex items-center gap-1">
                  <span>SOK-IPCRS Registry</span>
                  <ArrowUpRight className="w-3 h-3 opacity-60" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Capabilities & Tech */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Architecture & Blueprint
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Sovereign Cloud Nodes</Link></li>
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Zero-Trust Security (ABAC)</Link></li>
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Sub-45ms Edge Telemetry</Link></li>
              <li><Link to="/capabilities" className="hover:text-white transition-colors">Active-Active Redundancy</Link></li>
            </ul>
          </div>

          {/* Col 4: Corporate Governance */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
              Governance & Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/governance" className="hover:text-white transition-colors">Board Governance Matrix</Link></li>
              <li><Link to="/governance" className="hover:text-white transition-colors">NDPR Data Privacy Policy</Link></li>
              <li><Link to="/governance" className="hover:text-white transition-colors">Executive Advisory Council</Link></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Confidential Inquiry</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright & Disclaimer */}
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Cybernet Systems Limited. All Rights Reserved. Sovereign Software Architecture.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/governance" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link to="/governance" className="hover:text-slate-300 transition-colors">Terms of Clearance</Link>
            <a href="#contact" className="hover:text-slate-300 transition-colors">Portal Support</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
