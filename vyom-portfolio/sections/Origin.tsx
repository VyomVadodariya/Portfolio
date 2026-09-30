"use client";
import { useEffect, useRef } from "react";

export function Origin() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.querySelectorAll(".reveal-fade").forEach((node, i) => {
        setTimeout(() => node.classList.add("visible"), i * 100);
      }); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      data-section="about"
      className="section-chapter overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="reveal-fade mb-16 border-b border-border/50 pb-8">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-2">
            04 // Origin
          </span>
          <span className="font-space font-bold text-4xl sm:text-5xl text-foreground block leading-none tracking-tight">
            ABOUT
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-16 items-start">
          {/* Editorial Story */}
          <div className="md:col-span-7 space-y-8">
            <p className="reveal-fade font-space text-2xl leading-relaxed text-foreground" style={{ transitionDelay: "0.1s" }}>
              I am a computer science student focused on building practical intelligent systems.
            </p>
            <p className="reveal-fade font-inter text-base leading-relaxed text-muted" style={{ transitionDelay: "0.2s" }}>
              My work spans Machine Learning, AI product development, and systems architecture. Rather than focusing purely on theory, I learn by participating in hackathons, researching emerging technologies, and writing code that solves real problems.
            </p>
            <p className="reveal-fade font-inter text-base leading-relaxed text-muted" style={{ transitionDelay: "0.3s" }}>
              Currently, my primary areas of exploration include Deep Learning, Automation, and Quantitative Technology. I am also highly interested in the future applications of Quantum Computing and how it will intersect with modern artificial intelligence.
            </p>
            
            <div className="reveal-fade pt-8" style={{ transitionDelay: "0.4s" }}>
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-4">
                {"// ACTIVE EXPLORATION"}
              </div>
              <div className="flex flex-wrap gap-4">
                {["Machine Learning", "Quantitative Finance", "Quantum Computing", "AI Systems Architecture"].map((item) => (
                  <span key={item} className="px-4 py-2 bg-surface-1 border border-border text-foreground font-mono text-xs tracking-widest uppercase">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* System Profile Card */}
          <div className="md:col-span-5 relative reveal-fade" style={{ transitionDelay: "0.2s" }}>
            <div className="bg-surface-1 border border-border p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full blur-2xl group-hover:bg-accent/10 transition-colors"></div>
              
              <div className="font-mono text-xs text-accent uppercase tracking-widest mb-8 border-b border-border/50 pb-4">
                {"// SYSTEM PROFILE"}
              </div>
              
              <div className="space-y-6">
                {[
                  ["LOCATION", "Bengaluru, India"],
                  ["INSTITUTION", "REVA University"],
                  ["PROGRAM", "B.Tech CS — AI & ML"],
                  ["STATUS", "Open to Internships"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    <div className="font-space font-bold text-lg text-foreground">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
