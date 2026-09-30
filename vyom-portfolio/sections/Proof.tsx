"use client";
import { useEffect, useRef } from "react";

const BADGES = [
  {
    number: "KARATE",
    label: "Black Belt",
    sub: "Years of discipline on the mat",
  },
  {
    number: "FOOTBALL",
    label: "State Captain",
    sub: "Led a team to state-level competition",
  },
  {
    number: "TAEKWONDO",
    label: "State Champion",
    sub: "1st place, state championship",
  },
  {
    number: "IEEE",
    label: "Member",
    sub: "Institute of Electrical & Electronics Engineers",
  },
];

export function Proof() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.querySelectorAll(".reveal-fade").forEach((node, i) => {
            setTimeout(() => node.classList.add("visible"), i * 100);
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
      id="achievements"
      data-section="achievements"
      className="section-chapter overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal-fade mb-16 border-b border-border/50 pb-8">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-2">
            06 // Beyond Code
          </span>
          <span className="font-space font-bold text-4xl sm:text-5xl text-foreground block leading-none tracking-tight">
            THE HUMAN ELEMENT
          </span>
        </div>

        <p className="reveal-fade font-inter text-base mb-14 text-muted max-w-2xl" style={{ transitionDelay: "0.1s" }}>
          Execution beats theory every single time. The discipline required for competitive sports directly translates to engineering complex systems.
        </p>

        {/* Minimal stat cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {BADGES.map((b, i) => (
            <div
              key={b.label}
              className="reveal-fade p-8 bg-surface-1 border border-border group hover:border-accent transition-colors"
              style={{
                transitionDelay: `${i * 0.1}s`,
              }}
            >
              <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4">
                {"// "} {b.number}
              </div>
              <div className="font-space font-bold text-xl text-foreground leading-tight mb-2">{b.label}</div>
              <div className="font-inter text-sm text-muted leading-relaxed">{b.sub}</div>
            </div>
          ))}
        </div>

        {/* IBM Certifications row */}
        <div className="mt-16 reveal-fade" style={{ transitionDelay: "0.4s" }}>
          <div className="font-mono text-xs text-muted uppercase tracking-widest mb-6 border-b border-border/50 pb-4">
            {"// CERTIFICATIONS"}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              "Python for Data Science",
              "Data Visualization",
              "Data Analysis",
            ].map((cert) => (
              <div
                key={cert}
                className="flex items-center gap-4 p-6 bg-surface-1 border border-border group hover:bg-surface-2 transition-colors"
              >
                <div className="w-1.5 h-1.5 bg-accent rounded-full group-hover:scale-150 transition-transform"></div>
                <div>
                  <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                    IBM · Coursera
                  </div>
                  <div className="font-inter text-sm font-semibold text-foreground">
                    {cert}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
