"use client";
import { useEffect, useState } from "react";

export function StatusBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.round((scrollTop / docHeight) * 100) : 0;
      setProgress(pct);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-9 bg-surface-1/90 backdrop-blur-sm border-b border-border/50 z-50 flex items-center justify-between px-6 font-mono text-[11px] text-muted tracking-wider">
      <span className="font-bold text-foreground tracking-widest">
        VYOM<span className="text-accent">.</span>LAB
      </span>
      
      <div className="hidden sm:flex items-center gap-6 text-[10px] uppercase tracking-widest">
        <span>AI/ML</span>
        <span className="text-border">·</span>
        <span>Systems</span>
        <span className="text-border">·</span>
        <span>Research</span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="w-16 h-[2px] bg-border rounded-full overflow-hidden">
          <div 
            className="h-full bg-accent transition-all duration-300 ease-out" 
            style={{ width: `${progress}%` }} 
          />
        </div>
        <span className="tabular-nums w-8 text-right">{progress}%</span>
      </div>
    </div>
  );
}
