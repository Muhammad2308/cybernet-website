import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  Menu, 
  X, 
  ShieldCheck, 
  ShoppingBag, 
  Car, 
  GraduationCap, 
  Activity, 
  Lock,
  ArrowRight,
  Layers,
  Building2
} from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { PortalAccessModal } from './PortalAccessModal';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [portalModalOpen, setPortalModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  }, [location]);

  const solutionItems = [
    {
      name: 'SHAGO Platform',
      tagline: 'Metro eCommerce & Logistics',
      path: '/solutions/shago',
      icon: ShoppingBag,
      color: 'text-purple-400'
    },
    {
      name: 'RIDO Mobility',
      tagline: 'Urban Transit & Fleet Telemetry',
      path: '/solutions/rido',
      icon: Car,
      color: 'text-amber-400'
    },
    {
      name: 'ISMS SmartSchool',
      tagline: 'Academic Governance & anti-fraud EMR',
      path: '/solutions/isms',
      icon: GraduationCap,
      color: 'text-blue-400'
    },
    {
      name: 'MED-X Ecosystem',
      tagline: 'Sovereign EMR & Health Claims',
      path: '/solutions/med-x',
      icon: Activity,
      color: 'text-emerald-400'
    },
    {
      name: 'SOK-IPCRS Registry',
      tagline: 'Intelligent Policing & Crime Records',
      path: '/solutions/sok-ipcrs',
      icon: Lock,
      color: 'text-red-400'
    }
  ];

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/90 dark:bg-cyber-dark/90 backdrop-blur-md border-b border-slate-200 dark:border-cyber-border/80 shadow-lg py-3' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo Brand Crest */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative p-1 rounded-xl bg-gradient-to-br from-cyber-purple-light via-cyber-bronze-light to-amber-500 shadow-glow-purple group-hover:scale-105 transition-transform duration-300">
              <img 
                src="/assets/img/cybernet-logo-trans.png" 
                alt="Cybernet Logo" 
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/img/cybernet-logo-back.jpg';
                }}
              />
            </div>
            <div>
              <span className="text-lg sm:text-xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-1">
                CYBERNET <span className="text-cyber-purple-light">SYSTEMS</span>
              </span>
              <span className="block text-[10px] font-mono tracking-wider text-slate-500 dark:text-cyber-bronze-light uppercase">
                Sovereign Infrastructure
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-700 dark:text-slate-200">
            <Link 
              to="/" 
              className={`transition-colors hover:text-cyber-purple-light ${location.pathname === '/' ? 'text-cyber-purple-light font-bold' : ''}`}
            >
              Home
            </Link>

            {/* Solutions Dropdown Menu */}
            <div 
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button 
                className={`flex items-center gap-1.5 py-2 transition-colors hover:text-cyber-purple-light ${
                  location.pathname.startsWith('/solutions') ? 'text-cyber-purple-light font-bold' : ''
                }`}
              >
                <span>Solutions Suite</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-cyber-purple-light' : ''}`} />
              </button>

              <AnimatePresence>
                {solutionsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 w-80 p-2 rounded-2xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-2xl backdrop-blur-xl"
                  >
                    <div className="p-2 border-b border-slate-100 dark:border-cyber-border/50 mb-1">
                      <p className="text-[11px] font-mono text-slate-400 dark:text-slate-400 uppercase tracking-wider">
                        Enterprise Platforms
                      </p>
                    </div>
                    {solutionItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-slate-100 dark:hover:bg-cyber-dark/80 transition-colors group"
                        >
                          <div className={`p-2 rounded-lg bg-slate-100 dark:bg-cyber-dark border border-slate-200 dark:border-cyber-border ${item.color}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-cyber-purple-light transition-colors">
                              {item.name}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400">
                              {item.tagline}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              to="/capabilities" 
              className={`transition-colors hover:text-cyber-purple-light ${location.pathname === '/capabilities' ? 'text-cyber-purple-light font-bold' : ''}`}
            >
              Capabilities
            </Link>

            <Link 
              to="/governance" 
              className={`transition-colors hover:text-cyber-purple-light ${location.pathname === '/governance' ? 'text-cyber-purple-light font-bold' : ''}`}
            >
              Governance
            </Link>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Portal Access CTA */}
            <button
              onClick={() => setPortalModalOpen(true)}
              className="hidden sm:inline-flex px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-purple-glow text-white text-xs sm:text-sm font-semibold items-center gap-2 shadow-glow-purple hover:opacity-95 transition-all cursor-pointer"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>Request Portal Access</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl lg:hidden bg-slate-100 dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-800 dark:text-cyber-silver"
              aria-label="Open Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-cyber-card border-b border-slate-200 dark:border-cyber-border px-4 py-6 space-y-4"
            >
              <nav className="flex flex-col space-y-3">
                <Link
                  to="/"
                  className="px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-cyber-dark"
                >
                  Home Page
                </Link>

                <div className="px-3 py-2 space-y-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Proprietary Platforms
                  </span>
                  <div className="grid grid-cols-1 gap-2 pt-1">
                    {solutionItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          className="flex items-center gap-3 p-2 rounded-lg bg-slate-50 dark:bg-cyber-dark/60 text-slate-800 dark:text-slate-200 hover:text-cyber-purple-light"
                        >
                          <Icon className={`w-4 h-4 ${item.color}`} />
                          <span className="text-sm font-semibold">{item.name}</span>
                        </Link>
                      );
                    })}
                  </div>
                </div>

                <Link
                  to="/capabilities"
                  className="px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-cyber-dark"
                >
                  Capabilities & Blueprint
                </Link>

                <Link
                  to="/governance"
                  className="px-3 py-2 rounded-lg text-slate-800 dark:text-slate-200 font-semibold hover:bg-slate-100 dark:hover:bg-cyber-dark"
                >
                  Governance & Compliance
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setPortalModalOpen(true);
                  }}
                  className="w-full mt-2 px-4 py-3 rounded-xl bg-gradient-to-r from-cyber-purple to-cyber-purple-glow text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-glow-purple"
                >
                  <ShieldCheck className="w-4 h-4" />
                  <span>Request Portal Access</span>
                </button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Portal Access Modal */}
      <PortalAccessModal isOpen={portalModalOpen} onClose={() => setPortalModalOpen(false)} />
    </>
  );
};
