"use client";
import { useEffect, useRef } from "react";
import { skills } from "@/data/achievements";

const CATEGORIES = [
  { key: "core",      title: "AI / ML" },
  { key: "languages", title: "LANGUAGES" },
  { key: "tools",     title: "TOOLS & LIBRARIES" },
  { key: "learning",  title: "CURRENTLY LEARNING" },
] as const;

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal-fade, .skill-tag-item").forEach((node, i) => {
            setTimeout(() => {
              node.classList.add("visible");
              (node as HTMLElement).style.opacity = "1";
              (node as HTMLElement).style.transform = "translateY(0) scale(1)";
            }, i * 40);
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
      id="skills"
      data-section="skills"
      className="section-chapter overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="reveal-fade mb-16 border-b border-border/50 pb-8">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-2">
            03 // Capabilities
          </span>
          <span className="font-space font-bold text-4xl sm:text-5xl text-foreground block leading-none tracking-tight">
            HOW I BUILD
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {CATEGORIES.map((cat) => {
            const items = skills[cat.key as keyof typeof skills];
            return (
              <div
                key={cat.key}
                className="reveal-fade border border-border bg-surface-1 p-8 group hover:border-accent transition-colors"
              >
                <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6 pb-4 border-b border-border/50">
                  {"// "} {cat.title}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span
                      key={skill}
                      className="skill-tag-item font-mono text-[11px] font-semibold px-3 py-2 uppercase tracking-wider text-muted border border-border/50 bg-surface-2 transition-colors group-hover:border-border cursor-default"
                      style={{
                        opacity: 0,
                        transform: "translateY(8px) scale(0.95)",
                        transition: `opacity 0.4s ease ${i * 0.04}s, transform 0.4s ease ${i * 0.04}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Languages section */}
        <div className="reveal-fade mt-8 border border-border bg-surface-1 p-8 flex flex-col md:flex-row md:items-center justify-between gap-6" style={{ transitionDelay: "0.3s" }}>
          <div className="font-mono text-[10px] text-muted uppercase tracking-widest">
            {"// HUMAN LANGUAGES"}
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { lang: "Gujarati", level: "Native" },
              { lang: "Hindi",    level: "Native" },
              { lang: "English",  level: "Fluent" },
              { lang: "Spanish",  level: "Partial" },
            ].map((l) => (
              <div key={l.lang} className="flex items-center gap-2">
                <span className="font-inter text-sm font-semibold text-foreground">{l.lang}</span>
                <span className="font-mono text-[10px] uppercase text-muted tracking-widest">{l.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
