import React from 'react';
import { Moon, Instagram } from 'lucide-react';

export function Footer() {
  const year = new Date().getFullYear();
  // Brief says "2026", but let's use actual year or 2026 if specifically requested. We'll stick to 2026.
  
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-5xl flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-2 text-muted-foreground">
          <Moon className="w-4 h-4 text-accent" />
          <span className="text-sm">&copy; 2026 12AM Quoter</span>
        </div>

        <p className="text-sm font-serif italic text-muted-foreground">
          Made with late-night energy.
        </p>

        <a 
          href="https://www.instagram.com/12am.quoter/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-teal-glow transition-colors"
          aria-label="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>

      </div>
    </footer>
  );
}
