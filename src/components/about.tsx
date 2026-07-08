import React from 'react';
import { FadeIn } from '@/hooks/use-scroll-fade';

export function About() {
  return (
    <section id="about" className="py-24 px-4 bg-background border-t border-border/50 relative">
      <div className="container mx-auto max-w-3xl">
        <FadeIn>
          <div className="flex flex-col items-center text-center space-y-10">
            
            <div className="w-16 h-[1px] bg-teal-glow/30"></div>
            
            <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-foreground/90 max-w-2xl">
              "Sleep is temporary. Overthinking at 2am is forever. Certified night owl, reporting for duty."
            </p>
            
            <div className="w-16 h-[1px] bg-teal-glow/30"></div>

            <div className="max-w-xl text-left space-y-5 text-base md:text-lg leading-relaxed text-foreground/80">
              <p>Hi, I'm the person behind 12AM Quoter.</p>
              <p>
                Honestly, I didn't plan to make this page — I just had way too much free time on my hands,
                and that's how this Instagram account and this website ended up happening.
              </p>
              <p>
                Some of what I post is funny. Some of it's a little too honest. All of it is things I've
                actually thought, at hours I probably should've been asleep.
              </p>
              <p>
                This page isn't trying to be deep or perfect. It's just a small, real place for late-night
                thoughts — the kind you'd text a friend and then immediately say "ignore that."
              </p>
              <p>If any of it makes you feel a little less alone at 1am, then it's doing its job.</p>
              <p className="font-medium text-foreground">Got a thought of your own?</p>
              <p>
                You don't have to keep it to yourself. Send in your own quote along with your tag, and if
                it's good, it'll be featured on the page — with full credit to you. So if there's a thought
                that's been living in your head lately, this is your sign to share it.
              </p>
              <p className="font-serif italic text-foreground/90">— 12AM Quoter</p>
            </div>

          </div>
        </FadeIn>
      </div>
    </section>
  );
}
