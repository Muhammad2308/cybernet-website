import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck, Clock } from 'lucide-react';

export const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    subject: 'General Enterprise Inquiry',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-slate-100 dark:bg-cyber-dark text-slate-900 dark:text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Contact Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-purple/10 dark:bg-cyber-purple/30 border border-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light text-xs font-semibold mb-4">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>CONFIDENTIAL ENGAGEMENT</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Connect with Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-purple-light to-cyber-bronze-light">Engineering Directorate</span>
              </h2>
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base mt-3 leading-relaxed">
                Schedule an executive demonstration, discuss state deployment procurement, or request sovereign API access credentials.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-sm">
                <div className="p-3 rounded-xl bg-cyber-purple/10 dark:bg-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Cybernet Corporate Headquarters</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    Cybernet Systems Tower, Central Business District, Abuja & Victoria Island, Lagos, Nigeria
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-sm">
                <div className="p-3 rounded-xl bg-cyber-purple/10 dark:bg-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Enterprise Communications</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    governance@cybernetsystems.ng | solutions@cybernetsystems.ng
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-sm">
                <div className="p-3 rounded-xl bg-cyber-purple/10 dark:bg-cyber-purple/30 text-cyber-purple dark:text-cyber-purple-light">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold">Sovereign Operations Hours</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    24/7/365 Always-On Infrastructure Control Center
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h3 className="text-xl font-bold">Send Confidential Inquiry</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Chief Engr. Tunde Bakare"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Official Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tunde.bakare@org.ng"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        placeholder="+234 803 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                        Organization / Agency
                      </label>
                      <input
                        type="text"
                        placeholder="State Security & Logistics Agency"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Inquiry Category
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                    >
                      <option value="SHAGO Deployment">SHAGO Metro eCommerce & Logistics Partnership</option>
                      <option value="RIDO Transit">RIDO Urban Mobility Fleet Procurement</option>
                      <option value="ISMS Integration">ISMS SmartSchool State Education Deployment</option>
                      <option value="MED-X EMR">MED-X Healthcare EMR & Claims Integration</option>
                      <option value="SOK-IPCRS Security">SOK-IPCRS Policing & Master Criminal Registry</option>
                      <option value="General Sovereign Platform Access">Custom Sovereign Software Procurement</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold mb-1 text-slate-700 dark:text-slate-300">
                      Detailed Message / Technical Scope *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please describe your operational requirements, expected user capacity, or integration timeline..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm bg-slate-50 dark:bg-cyber-dark/80 border border-slate-300 dark:border-cyber-border focus:ring-2 focus:ring-cyber-purple-light focus:outline-none transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-purple-glow text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-glow-purple hover:opacity-95 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Dispatch Confidential Message</span>
                  </button>
                </form>
              ) : (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center border border-emerald-500/30">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold">Inquiry Transmitted</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    Your transmission has been logged. An executive technical officer from Cybernet Systems Directorate will respond within 4 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-cyber-purple text-white text-sm font-semibold hover:bg-cyber-purple-glow transition-all"
                  >
                    Send Another Message
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
