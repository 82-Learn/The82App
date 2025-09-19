'use client';

import * as React from 'react';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="relative w-14 h-7 rounded-full bg-muted p-1 transition-colors duration-300 hover:bg-muted/80"
      aria-label="Toggle theme"
    >
      <motion.div
        className="h-5 w-5 rounded-full bg-primary shadow-lg"
        animate={{
          x: theme === 'dark' ? 28 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 700,
          damping: 30,
        }}
      />
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}