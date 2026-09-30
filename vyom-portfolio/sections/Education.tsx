"use client";
import { useEffect, useRef } from "react";

export function Education() {
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
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const courses = [
    "Programming Fundamentals",
    "Machine Learning",
    "Data Structures & Algorithms",
    "Data Analysis",
    "Artificial Intelligence",
    "Mathematics for Computing",
    "Computer Vision",
    "Deep Learning",
  ];

  return (
    <section
      id="education"
      data-section="education"
      className="section-chapter overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="reveal-fade mb-16 border-b border-border/50 pb-8">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-2">
            05 // Education
          </span>
          <span className="font-space font-bold text-4xl sm:text-5xl text-foreground block leading-none tracking-tight">
            ACADEMIC
          </span>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">

          {/* Main degree card */}
          <div className="md:col-span-7 reveal-fade relative group">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent/5 rounded-full blur-2xl group-hover:bg-accent/10 transition-colors pointer-events-none"></div>
            <div className="border border-border bg-surface-1 p-8 h-full">
              <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-6 border-b border-border/50 pb-4">
                {"// PRIMARY DEGREE"}
              </div>
              
              <h3 className="font-space font-bold text-2xl text-foreground mb-1">
                B.Tech Computer Science
              </h3>
              <p className="font-inter text-base text-muted mb-8">
                Specialization in Artificial Intelligence & Machine Learning
              </p>

              <div className="grid grid-cols-2 gap-6">
                {[
                  ["INSTITUTION", "REVA University"],
                  ["TIMELINE",   "2024 – 2028"],
                  ["STATUS",       "2nd Year"],
                  ["LOCATION",     "Bengaluru, India"],
                ].map(([label, value]) => (
                  <div key={label}>
                    <div className="font-mono text-[10px] text-muted uppercase tracking-widest mb-1">
                      {label}
                    </div>
                    <div className="font-inter font-semibold text-foreground text-sm">
                      {value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Coursework + activities */}
          <div className="md:col-span-5 reveal-fade space-y-8" style={{ transitionDelay: "0.15s" }}>
            
            <div className="border border-border bg-surface-1 p-8">
              <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4">
                {"// RELEVANT COURSEWORK"}
              </div>
              <div className="flex flex-wrap gap-2">
                {courses.map((c) => (
                  <span
                    key={c}
                    className="font-mono text-[10px] font-semibold px-2 py-1 uppercase tracking-wider text-muted border border-border/50 bg-surface-2"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div className="border border-border bg-surface-1 p-8">
              <div className="font-mono text-[10px] text-accent uppercase tracking-widest mb-4">
                {"// CAMPUS INVOLVEMENT"}
              </div>
              <ul className="space-y-4">
                {[
                  "IEEE Student Member",
                  "Active Hackathon Participant",
                  "AI/ML Lab Contributor",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-accent mt-0.5">›</span>
                    <span className="font-inter text-sm text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
