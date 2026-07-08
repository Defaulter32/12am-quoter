import React from 'react';
import { Instagram } from 'lucide-react';
import { FadeIn } from '@/hooks/use-scroll-fade';

export function Cta() {
  return (
    <section id="contact" className="py-32 px-4 bg-background relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-glow/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-3xl text-center relative z-10">
        <FadeIn>
          <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-12 tracking-tight">
            More thoughts land at midnight.
          </h2>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <a 
              href="https://www.instagram.com/12am.quoter/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-teal-glow text-foreground hover:bg-teal-glow/10 hover:box-glow-strong transition-all duration-300 group"
            >
              <Instagram className="w-5 h-5 group-hover:text-teal-glow transition-colors" />
              <span className="font-medium tracking-wide">Follow on Instagram</span>
            </a>
          </div>

          <div className="max-w-md mx-auto p-6 bg-card rounded-2xl border border-border">
            <h3 id="newsletter-heading" className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
              Have something worth saying?
            </h3>
            <p className="text-sm text-muted-foreground/90 mb-6 leading-relaxed">
              We'd genuinely love to hear it. Share your quote, and if it's a good one, we'll post it with your tag — promise!
            </p>
            <form 
              onSubmit={(e) => { e.preventDefault(); alert("Thanks for sharing! (Visual demo only)"); }} 
              className="flex flex-col gap-3"
              aria-labelledby="newsletter-heading"
            >
              <div>
                <label htmlFor="submitter-tag" className="sr-only">Your name / Your tag</label>
                <input 
                  id="submitter-tag"
                  type="text" 
                  placeholder="Your name / Your tag" 
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal-glow focus:ring-1 focus:ring-teal-glow transition-all"
                  required
                />
              </div>
              <div>
                <label htmlFor="submitter-quote" className="sr-only">Your quote</label>
                <textarea 
                  id="submitter-quote"
                  placeholder="Your quote" 
                  rows={3}
                  className="w-full bg-background border border-border rounded-lg py-3 px-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-teal-glow focus:ring-1 focus:ring-teal-glow transition-all resize-none"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="px-6 py-3 bg-foreground text-background rounded-lg font-medium hover:bg-foreground/90 transition-colors"
              >
                Send it in
              </button>
            </form>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
