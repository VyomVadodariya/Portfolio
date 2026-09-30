import React from "react";

export function Footer() {
  return (
    <footer className="border-t border-border/30 bg-background py-10 pb-24 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <span className="font-space font-bold text-sm text-foreground tracking-wider">
            VYOM VADODARIYA
          </span>
          <span className="font-mono text-[10px] text-muted tracking-widest uppercase mt-1">
            AI/ML · SOFTWARE · RESEARCH
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/VyomVadodariya"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vyomvadodariya/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:vyomvadodariya2@gmail.com"
            className="font-mono text-[10px] uppercase tracking-widest text-muted hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>

        <div className="font-mono text-[10px] text-muted/50 uppercase tracking-widest">
          © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
