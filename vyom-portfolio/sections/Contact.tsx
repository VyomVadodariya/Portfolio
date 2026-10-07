"use client";
import { useEffect, useRef } from "react";
import { Mail, FileText } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);

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

  const LINKS = [
    {
      icon: <GithubIcon size={18} />,
      label: "GITHUB",
      handle: "VyomVadodariya",
      href: "https://github.com/VyomVadodariya",
    },
    {
      icon: <LinkedinIcon size={18} />,
      label: "LINKEDIN",
      handle: "Connect",
      href: "https://www.linkedin.com/in/vyom-vadodariya-09b721333/",
    },
    {
      icon: <Mail size={18} />,
      label: "EMAIL",
      handle: "Reach out",
      href: "mailto:vyomvadodariya2@gmail.com",
    },
    {
      icon: <FileText size={18} />,
      label: "RESUME",
      handle: "Download PDF",
      href: "/Portfolio/resume.pdf",
      download: true,
    },
  ];

  return (
    <section
      id="contact"
      data-section="contact"
      className="section-chapter overflow-hidden"
      style={{ background: "var(--background)" }}
      ref={ref}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">

        <div className="reveal-fade mb-8">
          <span className="font-mono text-accent text-sm tracking-widest uppercase block mb-4">
            {"// Signal"}
          </span>
          <h2 className="font-space font-bold text-5xl sm:text-7xl text-foreground block leading-none tracking-tight">
            LET&apos;S BUILD<br/>SOMETHING.
          </h2>
        </div>

        <p className="reveal-fade font-inter text-lg mb-16 text-muted max-w-2xl mx-auto" style={{ transitionDelay: "0.1s" }}>
          Open to internships, research collaborations, hackathon teams, and interesting technical conversations.
        </p>

        {/* Contact links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-24">
          {LINKS.map((l, i) => (
            <a
              key={l.label}
              href={l.href}
              target={l.download ? undefined : "_blank"}
              rel={l.download ? undefined : "noopener noreferrer"}
              download={l.download}
              className="reveal-fade group relative p-6 bg-surface-1 border border-border flex flex-col items-center gap-4 transition-all hover:border-accent hover:bg-surface-2"
              style={{ transitionDelay: `${0.15 + i * 0.1}s` }}
            >
              <div className="text-muted group-hover:text-accent transition-colors">
                {l.icon}
              </div>
              <div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted group-hover:text-foreground transition-colors mb-1">
                  {l.label}
                </div>
                <div className="font-inter text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                  {l.handle}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
