import React, { useState, useEffect } from 'react';
import { FadeIn } from '@/hooks/use-scroll-fade';

const RANDOM_THOUGHTS = [
  "You're allowed to go to bed without having everything figured out.",
  "Sometimes the most productive thing you can do is rest.",
  "It's okay if the only thing you did today was breathe.",
  "Stop shrinking to fit places you've outgrown.",
  "The version of you they created in their mind is not your responsibility.",
  "You don't have to rebuild everything in one night.",
  "Forgive yourself for not knowing what you didn't know.",
];

export function RandomThought() {
  const [thought, setThought] = useState<string | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const getThought = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setThought(null);
    
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * RANDOM_THOUGHTS.length);
      setThought(RANDOM_THOUGHTS[randomIndex]);
      setIsAnimating(false);
    }, 600);
  };

  return (
    <section className="py-24 px-4 bg-card border-y border-border/50">
      <div className="container mx-auto max-w-2xl text-center">
        <FadeIn>
          <div className="flex flex-col items-center min-h-[250px] justify-center space-y-8">
            <div className="h-32 flex items-center justify-center">
              <p 
                className={`font-serif italic text-2xl md:text-3xl text-foreground transition-opacity duration-500 ${
                  thought && !isAnimating ? 'opacity-100' : 'opacity-0'
                }`}
              >
                {thought ? `"${thought}"` : ''}
              </p>
            </div>
            
            <button
              onClick={getThought}
              className="px-8 py-4 rounded-full bg-background border border-border text-foreground hover:border-teal-glow hover:text-teal-glow hover:box-glow transition-all duration-300 font-medium tracking-wide shadow-lg"
            >
              Give me a thought
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
