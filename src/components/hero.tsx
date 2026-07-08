import React, { useState, useEffect } from 'react';
import { Starfield } from './starfield';
import { Moon, ChevronDown } from 'lucide-react';

const ROTATING_QUOTES = [
  "When the world gets quiet, the thoughts get loud.",
  "Midnight is for the overthinkers.",
  "Everything feels different at 2am.",
  "Sleep is just a pause button on reality."
];

export function Hero() {
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % ROTATING_QUOTES.length);
        setFade(true);
      }, 500); // Wait for fade out before changing
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col items-center justify-center text-center px-4 pt-20">
      <Starfield />
      
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto mt-[-5dvh]">
        <div className="mb-6 relative text-teal-glow">
          <Moon className="w-12 h-12 animate-pulse-glow" strokeWidth={1.5} />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-script text-foreground tracking-wide mb-2 text-glow">
          12am quoter
        </h1>
        
        <p className="text-xl md:text-2xl font-serif italic text-muted-foreground mb-16">
          late-night thoughts.
        </p>

        <div className="h-16 flex items-center justify-center">
          <p className={`text-accent text-lg md:text-xl transition-opacity duration-500 font-medium ${fade ? 'opacity-100' : 'opacity-0'}`}>
            "{ROTATING_QUOTES[quoteIndex]}"
          </p>
        </div>
      </div>

      <button 
        onClick={scrollToNext}
        className="absolute bottom-12 text-muted-foreground hover:text-teal-glow transition-colors duration-300 animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-6 h-6" />
      </button>
    </section>
  );
}
