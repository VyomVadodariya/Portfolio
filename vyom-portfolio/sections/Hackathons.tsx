"use client";
import { useEffect, useRef } from "react";

const SPRINT_DETAILS = [
  {
    name: "Smart India Hackathon",
    role: "Team Lead",
    outcome: "Built an AI-based campus safety solution",
    tech: ["Python", "Computer Vision", "ML"],
  },
  {
    name: "HackReva",
    role: "Participant",
    outcome: "Shipped a working prototype in 24h",
    tech: ["JavaScript", "REST API", "ML"],
  },
  {
    name: "AI Innovation Challenge",
    role: "Participant",
    outcome: "Delivered an LLM-powered automation tool",
    tech: ["Python", "LLM", "Automation"],
  },
];

export function Hackathons() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal-fade").forEach((n, i) => {
            setTimeout(() => n.classList.add("visible"), i * 100);
          });
        }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="hackathons"
      data-section="hackathons"
      className="section-chapter overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="reveal-fade mb-16 border-b border-border/50 pb-8">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-2">
            02 // Sprints
          </span>
          <span className="font-space font-bold text-4xl sm:text-5xl text-foreground block leading-none tracking-tight">
            HACKATHONS
          </span>
        </div>

        <p className="reveal-fade font-inter text-base mb-14 text-muted max-w-2xl" style={{ transitionDelay: "0.1s" }}>
          Rapid engineering under constraints. Hackathons are where I stress-test ideas and build minimum viable products in 24-48 hour cycles.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {SPRINT_DETAILS.map((h, i) => (
            <div
              key={h.name}
              className="reveal-fade border border-border bg-surface-1 p-8 group hover:border-accent transition-colors"
              style={{
                transitionDelay: `${i * 0.12}s`,
              }}
            >
              <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4">
                {"// "} {h.role}
              </div>
              
              <h3 className="font-space text-xl font-bold mb-2 text-foreground">
                {h.name}
              </h3>
              
              <p className="font-inter text-sm mb-6 text-muted leading-relaxed">
                {h.outcome}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {h.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] font-semibold px-2 py-1 uppercase tracking-wider text-muted border border-border/50 bg-surface-2"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="reveal-fade mt-16 border-t border-border/50 pt-8" style={{ transitionDelay: "0.4s" }}>
          <div className="font-mono text-xs text-muted tracking-widest uppercase">
            &quot;The best way to learn is to ship something real under pressure.&quot;
          </div>
        </div>
      </div>
    </section>
  );
}
