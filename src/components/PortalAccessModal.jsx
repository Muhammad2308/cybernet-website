import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShieldCheck, Lock, CheckCircle, ArrowRight, Building, Mail, User } from 'lucide-react';

export const PortalAccessModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    agency: '',
    platform: 'shago',
    accessLevel: 'Enterprise Tier',
    notes: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-white"
        >
          {/* Header Ambient Glow */}
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyber-purple-light via-cyber-bronze-light to-amber-500" />
          
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-cyber-border/50 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {!submitted ? (
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2.5 rounded-xl bg-cyber-purple/10 dark:bg-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light border border-cyber-purple/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Request Sovereign Portal Access</h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
                    Confidential clearance credentials for enterprise partners & state agencies
                  </p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Dr. Aliyu Ibrahim"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Official Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="email"
                        required
                        placeholder="a.ibrahim@gov.ng"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Organization / State Agency *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input
                        type="text"
                        required
                        placeholder="Ministry of Innovation & Science"
                        value={formData.agency}
                        onChange={(e) => setFormData({ ...formData, agency: e.target.value })}
                        className="w-full pl-9 pr-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                      Target Platform *
                    </label>
                    <select
                      value={formData.platform}
                      onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                    >
                      <option value="shago">SHAGO Metro eCommerce & Logistics</option>
                      <option value="rido">RIDO Intelligent Urban Mobility</option>
                      <option value="isms">ISMS SmartSchool Management</option>
                      <option value="med-x">MED-X Healthcare EMR Ecosystem</option>
                      <option value="sok-ipcrs">SOK-IPCRS Policing & Crime Registry</option>
                      <option value="all">Full Cybernet Sovereign Suite</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                    Integration Context / Scope
                  </label>
                  <textarea
                    rows="3"
                    placeholder="Briefly outline your deployment requirements or API access objectives..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                  ></textarea>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Lock className="w-3.5 h-3.5 text-cyber-bronze-light" />
                    <span>Air-Gapped Encrypted Portal Transmission</span>
                  </div>

                  <button
                    type="submit"
                    className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-purple-glow hover:opacity-95 text-white text-sm font-semibold flex items-center gap-2 shadow-glow-purple transition-all"
                  >
                    Submit Access Request <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                <CheckCircle className="w-8 h-8 animate-bounce" />
              </div>
              <h3 className="text-2xl font-bold">Clearance Dispatch Initialized</h3>
              <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-cyber-purple-light">{formData.fullName}</span>. Your portal credentials dispatch request for <span className="font-semibold">{formData.agency}</span> has been securely transmitted to Cybernet Systems Directorate.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-2.5 rounded-xl bg-cyber-purple text-white text-sm font-semibold hover:bg-cyber-purple-glow transition-all"
                >
                  Return to Platform
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
