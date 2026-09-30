"use client";
import { useEffect, useRef, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

const GithubIcon = ({ size = 20, className }: { size?: number, className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);
import { projects } from "@/data/projects";

export function Work() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    setTimeout(() => onSelect(), 0);
  }, [emblaApi, onSelect]);

  const prev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const next = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.querySelectorAll(".reveal-fade").forEach((n, i) => {
        setTimeout(() => n.classList.add("visible"), i * 100);
      }); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="work"
      data-section="work"
      className="section-chapter overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-6xl mx-auto px-6">

        <div className="reveal-fade mb-16 flex items-end justify-between flex-wrap gap-6 border-b border-border/50 pb-8">
          <div>
            <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-2">
              01 // Selected Work
            </span>
            <span className="font-space font-bold text-4xl sm:text-5xl text-foreground block leading-none tracking-tight">
              CASE STUDIES
            </span>
          </div>
          {/* Carousel controls */}
          <div className="flex items-center gap-4 font-mono">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-surface-2 border border-border"
              aria-label="Previous project"
            >
              <ChevronLeft size={16} />
            </button>
            <span className="text-muted text-xs">
              {String(selectedIndex + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:bg-surface-2 border border-border"
              aria-label="Next project"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div ref={emblaRef} className="overflow-hidden reveal-fade">
          <div className="flex gap-6" style={{ touchAction: "pan-y" }}>
            {projects.map((p, index) => (
              <div
                key={p.id}
                className="flex-none rounded-xl overflow-hidden group"
                style={{
                  width: "min(600px, 85vw)",
                  background: "var(--surface-1)",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Header */}
                <div className="px-8 pt-8 pb-6 border-b border-border/50 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full blur-2xl transition-all group-hover:bg-accent/10"></div>
                  <div className="font-mono text-muted text-xs mb-3 tracking-widest">
                    PROJECT {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-space font-bold text-2xl text-foreground mb-2">
                    {p.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10px] font-semibold px-2.5 py-1 uppercase tracking-wider text-muted border border-border/50 bg-surface-2"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-8 space-y-8">
                  {/* Problem → Approach → Result */}
                  {[
                    { label: "PROBLEM", text: p.problem },
                    { label: "APPROACH / SYSTEM", text: p.solution },
                    { label: "RESULT / STATUS", text: p.outcome },
                  ].map((row) => (
                    <div key={row.label}>
                      <span className="font-mono text-[10px] text-accent uppercase tracking-widest mb-2 block">
                        {"// "} {row.label}
                      </span>
                      <p className="font-inter text-sm leading-relaxed text-muted">
                        {row.text}
                      </p>
                    </div>
                  ))}

                  {/* Evidence / Stats */}
                  <div>
                    <span className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3 block">
                      {"// EVIDENCE"}
                    </span>
                    <div className="grid grid-cols-3 gap-4">
                      {p.stats.map((s) => (
                        <div key={s.label} className="border border-border/50 bg-surface-2/50 p-3 rounded-lg">
                          <div className="font-space text-lg font-bold text-foreground leading-tight">{s.value}</div>
                          <div className="font-mono text-[9px] mt-1 text-muted uppercase tracking-wider">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4 border-t border-border/50">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center flex-1 gap-2 py-3 bg-surface-2 border border-border text-foreground font-mono text-xs uppercase tracking-widest transition-all hover:bg-accent hover:text-white hover:border-accent"
                    >
                      <GithubIcon size={14} /> Repository
                    </a>
                    {p.live && (
                      <a
                         href={p.live}
                         target="_blank"
                         rel="noopener noreferrer"
                         className="flex items-center justify-center flex-1 gap-2 py-3 bg-foreground text-background font-mono text-xs uppercase tracking-widest transition-all hover:bg-accent hover:text-white"
                      >
                        <ExternalLink size={14} /> View Case Study
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All CTA */}
        <div className="reveal-fade text-center mt-16">
          <a
            href="https://github.com/VyomVadodariya"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest uppercase transition-all hover:text-accent text-muted group"
          >
            <GithubIcon size={14} className="group-hover:text-accent" />
            <span className="border-b border-muted/30 group-hover:border-accent/50 pb-0.5">Explore All Repositories</span>
          </a>
        </div>
      </div>
    </section>
  );
}
