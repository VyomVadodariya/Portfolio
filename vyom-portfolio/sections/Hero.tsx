"use client";
import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    
    const elements = el.querySelectorAll('.reveal');
    elements.forEach((node, i) => {
      (node as HTMLElement).style.opacity = "0";
      (node as HTMLElement).style.transform = "translateY(16px)";
      
      setTimeout(() => {
        (node as HTMLElement).style.transition = "opacity 0.7s ease, transform 0.7s ease";
        (node as HTMLElement).style.opacity = "1";
        (node as HTMLElement).style.transform = "translateY(0)";
      }, 200 + i * 120);
    });
  }, []);

  return (
    <section
      id="home"
      data-section="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "var(--background)", paddingTop: "clamp(80px, 12vh, 140px)", paddingBottom: "clamp(60px, 8vh, 100px)" }}
      ref={containerRef}
    >
      {/* Subtle grid */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        {/* Name label */}
        <div className="reveal font-mono text-sm text-accent mb-8 tracking-widest uppercase">
          Vyom Vadodariya
        </div>
        
        {/* Main heading */}
        <h1 className="reveal font-space font-bold text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.08] tracking-tight text-foreground mb-8 max-w-[18ch]">
          I BUILD{" "}
          <span className="text-muted">INTELLIGENT</span>
          <br />
          <span className="text-muted">SYSTEMS</span> THAT
          <br />
          ACTUALLY DO
          <br />
          SOMETHING.
        </h1>
        
        {/* Supporting metadata */}
        <div className="reveal flex flex-wrap items-center gap-x-6 gap-y-3 mb-12 font-mono text-xs text-muted tracking-wider uppercase">
          <span>AI / ML</span>
          <span className="text-border/60">·</span>
          <span>Software Engineering</span>
          <span className="text-border/60">·</span>
          <span>Automation</span>
          <span className="text-border/60">·</span>
          <span>Research</span>
        </div>
        
        {/* CTAs */}
        <div className="reveal flex flex-wrap items-center gap-4">
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); document.getElementById("work")?.scrollIntoView({ behavior: "smooth" }); }}
            className="px-7 py-3.5 bg-foreground text-background font-space font-bold uppercase tracking-wider text-sm transition-colors hover:bg-accent hover:text-white"
          >
            Explore Work
          </a>
          
          <a
            href="https://github.com/VyomVadodariya"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-7 py-3.5 border border-border text-foreground font-space font-bold uppercase tracking-wider text-sm transition-colors hover:border-accent hover:text-accent"
          >
            <GithubIcon size={16} />
            GitHub
          </a>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="reveal absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted/40">
        <ArrowDown size={16} className="animate-bounce" />
      </div>
    </section>
  );
}
