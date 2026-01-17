"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

const DarkModeToggle = () => {
  const { isDark, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <div className="w-20 h-10 bg-slate-200 dark:bg-slate-700 rounded-full animate-pulse"></div>
    );
  }

  return (
    <div className="relative group">
      <motion.button
        onClick={toggleTheme}
        className="relative w-20 h-10 rounded-full p-1 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 dark:focus:ring-offset-slate-800 overflow-hidden"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
        style={{
          background: isDark 
            ? "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)"
            : "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)"
        }}
      >
        {/* Animated background layers */}
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            background: isDark 
              ? "radial-gradient(circle at 30% 30%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)"
              : "radial-gradient(circle at 70% 70%, rgba(251, 191, 36, 0.4) 0%, transparent 50%)"
          }}
          transition={{ duration: 0.8 }}
        />

        {/* Stars background for dark mode */}
        <AnimatePresence>
          {isDark && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={`bg-star-${i}`}
                  className="absolute w-0.5 h-0.5 bg-white rounded-full"
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Clouds background for light mode */}
        <AnimatePresence>
          {!isDark && (
            <motion.div
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={`cloud-${i}`}
                  className="absolute bg-white/20 rounded-full"
                  animate={{
                    x: [-10, 10, -10],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: `${8 + i * 4}px`,
                    height: `${4 + i * 2}px`,
                    left: `${20 + i * 25}%`,
                    top: `${30 + i * 10}%`,
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Toggle circle with enhanced design */}
        <motion.div
          className="relative w-8 h-8 rounded-full shadow-xl flex items-center justify-center border-2"
          animate={{
            x: isDark ? 40 : 0,
            backgroundColor: isDark ? "#1e293b" : "#ffffff",
            borderColor: isDark ? "#475569" : "#e2e8f0",
            boxShadow: isDark 
              ? "0 10px 25px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
              : "0 10px 25px rgba(0, 0, 0, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)"
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 30
          }}
        >
          {/* Inner glow effect */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              background: isDark 
                ? "radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%)"
                : "radial-gradient(circle, rgba(251, 191, 36, 0.3) 0%, transparent 70%)"
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Icon container with enhanced animations */}
          <div className="relative w-5 h-5 overflow-hidden">
            <AnimatePresence mode="wait">
              {isDark ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Enhanced Moon Icon */}
                  <svg
                    className="w-4 h-4 text-slate-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z"/>
                  </svg>
                  
                  {/* Crater details */}
                  <motion.div
                    className="absolute w-1 h-1 bg-slate-400 rounded-full"
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{ top: "25%", left: "60%" }}
                  />
                  <motion.div
                    className="absolute w-0.5 h-0.5 bg-slate-400 rounded-full"
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                    style={{ top: "60%", left: "30%" }}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  {/* Enhanced Sun Icon with rays */}
                  <motion.svg
                    className="w-4 h-4 text-amber-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  >
                    <path d="M12,18a6,6,0,1,1,6-6A6.006,6.006,0,0,1,12,18ZM12,8a4,4,0,1,0,4,4A4,4,0,0,0,12,8Z"/>
                    <path d="M12,4a1,1,0,0,1-1-1V1a1,1,0,0,1,2,0V3A1,1,0,0,1,12,4Z"/>
                    <path d="M21,13H19a1,1,0,0,1,0-2h2a1,1,0,0,1,0,2Z"/>
                    <path d="M5,13H3a1,1,0,0,1,0-2H5a1,1,0,0,1,0,2Z"/>
                    <path d="M12,21a1,1,0,0,1-1-1V18a1,1,0,0,1,2,0v2A1,1,0,0,1,12,21Z"/>
                    <path d="M18.36,7.64a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42l1.42-1.41a1,1,0,0,1,1.41,1.41L18.07,7.35A1,1,0,0,1,18.36,7.64Z"/>
                    <path d="M6.64,19.36a1,1,0,0,1-.71-.29,1,1,0,0,1,0-1.42L7.35,16.24a1,1,0,0,1,1.41,1.41l-1.41,1.42A1,1,0,0,1,6.64,19.36Z"/>
                    <path d="M5.64,7.64a1,1,0,0,1-.71-.29L3.52,5.93A1,1,0,0,1,4.93,4.52L6.35,5.93a1,1,0,0,1,0,1.42A1,1,0,0,1,5.64,7.64Z"/>
                    <path d="M17.36,19.36a1,1,0,0,1-.71-.29L15.24,17.66a1,1,0,0,1,1.41-1.41l1.42,1.41a1,1,0,0,1,0,1.42A1,1,0,0,1,17.36,19.36Z"/>
                  </motion.svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Floating particles around the toggle */}
          <AnimatePresence>
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className={`absolute w-1 h-1 rounded-full ${
                  isDark ? "bg-blue-400" : "bg-yellow-400"
                }`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: [0, 1, 0], 
                  scale: [0, 1, 0],
                  x: [0, (Math.random() - 0.5) * 30],
                  y: [0, (Math.random() - 0.5) * 30]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
                style={{
                  left: "50%",
                  top: "50%",
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Outer glow effect */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          animate={{
            boxShadow: isDark 
              ? "0 0 30px rgba(59, 130, 246, 0.4), inset 0 0 20px rgba(59, 130, 246, 0.1)" 
              : "0 0 30px rgba(251, 191, 36, 0.5), inset 0 0 20px rgba(251, 191, 36, 0.2)"
          }}
          transition={{ duration: 0.5 }}
        />
      </motion.button>

      {/* Enhanced Tooltip */}
      <motion.div
        className="absolute -top-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0, y: 10 }}
        whileHover={{ opacity: 1, y: 0 }}
      >
        <div className="bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 text-xs px-3 py-2 rounded-lg shadow-lg border border-slate-700 dark:border-slate-300 whitespace-nowrap font-medium">
          {isDark ? "Switch to light mode" : "Switch to dark mode"}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900 dark:border-t-slate-100"></div>
        </div>
      </motion.div>

      {/* Keyboard shortcut indicator */}
      <motion.div
        className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 0.6 }}
      >
        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono">
          ⌘⇧D
        </div>
      </motion.div>
    </div>
  );
};

export default DarkModeToggle;