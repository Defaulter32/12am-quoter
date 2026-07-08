import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { FadeIn } from '@/hooks/use-scroll-fade';

const QUOTES = [
  { id: 1, text: "I say 'it is what it is' because I don't know what else to do.", type: "Reels" },
  { id: 2, text: "I don't need a sign. I need instructions.", type: "Photos" },
  { id: 3, text: "I'm either extremely productive or completely frozen. No in-between.", type: "Reels" },
  { id: 4, text: "My favorite hobby is overthinking a conversation that happened 3 years ago.", type: "Photos" },
  { id: 5, text: "I need a 6 month vacation, twice a year.", type: "Reels" },
  { id: 6, text: "Some days I amaze myself. Other days I look for my phone while I'm talking on it.", type: "Photos" },
  { id: 7, text: "I have two moods: 'I need to go out' and 'please don't make me leave my bed'.", type: "Reels" },
  { id: 8, text: "Currently ghosting everyone to focus on my peace, but also wondering why nobody texts me.", type: "Photos" },
  { id: 9, text: "I am a museum of things I want to say but keep to myself.", type: "Reels" },
];

function CatSVG({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 80 Q25 60 40 50 Q30 35 40 20 L50 30 L60 20 Q70 35 60 50 Q75 60 80 80" />
      <path d="M42 45 Q45 48 48 45" />
      <path d="M52 45 Q55 48 58 45" />
      <path d="M48 55 L50 58 L52 55" />
      <path d="M30 80 Q50 80 70 80" />
      <path d="M25 75 Q10 70 15 55" />
    </svg>
  );
}

export function Gallery() {
  const [filter, setFilter] = useState<'All' | 'Reels' | 'Photos'>('All');

  const filteredQuotes = QUOTES.filter(q => filter === 'All' || q.type === filter);

  return (
    <section id="quotes" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-5xl">
        <FadeIn>
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-2 p-1 rounded-full border border-border bg-card">
              {['All', 'Reels', 'Photos'].map(tab => (
                <button
                  key={tab}
                  onClick={() => setFilter(tab as any)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === tab 
                      ? 'bg-accent/20 text-foreground border border-accent/30' 
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredQuotes.map((quote, idx) => (
            <FadeIn key={quote.id} delay={idx * 100}>
              <a 
                href="https://www.instagram.com/12am.quoter/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group relative aspect-square bg-card rounded-2xl p-8 border border-border flex flex-col justify-center items-center text-center transition-all duration-300 hover:-translate-y-1 hover:border-teal-glow/50 hover:box-glow"
              >
                {quote.type === 'Reels' && (
                  <div className="absolute top-4 right-4 text-muted-foreground group-hover:text-teal-glow transition-colors">
                    <Play className="w-5 h-5" />
                  </div>
                )}
                
                <p className="font-serif italic text-xl text-foreground leading-relaxed">
                  "{quote.text}"
                </p>
                
                <div className="absolute bottom-4 left-0 w-full flex justify-between items-end px-6">
                  <div className="text-accent/60 w-8 h-8 group-hover:text-teal-glow transition-colors">
                    <CatSVG className="w-full h-full" />
                  </div>
                  <span className="text-[10px] tracking-widest text-muted-foreground uppercase opacity-50">
                    12AM QUOTER
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
