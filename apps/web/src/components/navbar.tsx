'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

export function Navbar() {
  const [searchFocus, setSearchFocus] = useState(false);
  
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 h-[60px] bg-background/80 backdrop-blur-md border-b border-border"
    >
      <div className="h-full mx-auto px-4 sm:px-6 lg:px-8 max-w-[1920px]">
        <div className="flex items-center justify-between h-full">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="text-primary-foreground font-bold text-lg">82</span>
              </div>
              <div className="flex flex-col">
              </div>
            </Link>
          </div>
          
          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className={`relative w-full transition-all duration-200 ${searchFocus ? 'scale-105' : ''}`}>
              <input
                type="text"
                placeholder="Ask 82 anything..."
                className="w-full px-4 py-2 bg-muted/50 rounded-lg text-foreground placeholder:text-muted-foreground border border-border focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20 transition-all"
                onFocus={() => setSearchFocus(true)}
                onBlur={() => setSearchFocus(false)}
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 hover:bg-muted rounded">
                <svg className="w-5 h-5 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a8 8 0 11-16 0 8 8 0 0116 0zm2.93 2.93l4.14 4.14" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Right Controls */}
          <div className="flex items-center space-x-3">
            <span className="hidden lg:block text-sm text-muted-foreground px-3 py-1 rounded-full bg-muted/30">
              12/20 queries
            </span>
            
            <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
            </button>
            
            <ThemeToggle />
            
            <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-all font-medium text-sm">
              Upgrade
            </button>
            
            <button className="p-2 hover:bg-muted/50 rounded-lg transition-colors">
              <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}