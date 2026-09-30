"use client";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "home",    label: "VYOM" },
  { id: "work",    label: "WORK" },
  { id: "skills",  label: "LAB" },
  { id: "about",   label: "ABOUT" },
  { id: "contact", label: "CONTACT" },
];

export function PillNav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      sections.forEach((sec) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(sec.getAttribute("data-section") ?? "home");
        }
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav 
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex gap-0.5 p-1.5 rounded-full bg-surface-1/90 backdrop-blur-md border border-border/50" 
      aria-label="Site navigation"
    >
      {NAV_ITEMS.map((item) => (
        <a
          key={item.id}
          href={`#${item.id}`}
          className={`px-4 py-2 rounded-full text-[11px] font-semibold tracking-widest transition-all ${
            active === item.id
              ? "bg-accent text-white"
              : "text-muted hover:text-foreground hover:bg-surface-2"
          }`}
          onClick={(e) => { e.preventDefault(); scrollTo(item.id); }}
          aria-current={active === item.id ? "page" : undefined}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}
