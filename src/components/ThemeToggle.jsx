import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const ThemeToggle = () => {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2.5 rounded-full bg-slate-200 dark:bg-cyber-card border border-slate-300 dark:border-cyber-border text-slate-800 dark:text-cyber-silver transition-all hover:scale-105 hover:shadow-glow-purple focus:outline-none focus:ring-2 focus:ring-cyber-purple-light cursor-pointer"
      aria-label="Toggle Theme"
      title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      {darkMode ? (
        <Sun className="w-5 h-5 text-amber-400 transition-transform duration-300 hover:rotate-45" />
      ) : (
        <Moon className="w-5 h-5 text-cyber-purple transition-transform duration-300 hover:-rotate-12" />
      )}
    </button>
  );
};
