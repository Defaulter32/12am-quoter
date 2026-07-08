import React, { useState, useEffect } from 'react';
import { Moon, Instagram } from 'lucide-react';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 max-w-5xl flex items-center justify-between">
        <button
          type="button"
          onClick={() => scrollTo('hero')}
          className="flex items-center gap-3 focus:outline-none focus-visible:ring-1 focus-visible:ring-teal-glow rounded-full"
          aria-label="Scroll to top"
        >
          <div className="relative text-teal-glow">
            <Moon className="w-5 h-5 animate-pulse-glow" />
            <div className="absolute inset-0 bg-teal-glow/20 blur-md rounded-full"></div>
          </div>
        </button>

        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm tracking-wide text-muted-foreground">
            <button onClick={() => scrollTo('quotes')} className="hover:text-foreground transition-colors">Quotes</button>
            <button onClick={() => scrollTo('about')} className="hover:text-foreground transition-colors">About</button>
            <button onClick={() => scrollTo('contact')} className="hover:text-foreground transition-colors">Contact</button>
          </div>
          
          <a 
            href="https://www.instagram.com/12am.quoter/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full bg-card border border-border text-foreground hover:border-teal-glow hover:text-teal-glow hover:box-glow transition-all duration-300"
            aria-label="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
        </div>
      </div>
    </nav>
  );
}
