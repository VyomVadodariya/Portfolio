"use client";
import { useEffect, useState, useRef } from "react";
import { FileText, Mail, Terminal } from "lucide-react";

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setTimeout(() => setSearch(""), 0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const COMMANDS = [
    { label: "View Work", id: "work", icon: <Terminal size={14} />, type: "scroll" },
    { label: "About (Origin)", id: "about", icon: <Terminal size={14} />, type: "scroll" },
    { label: "Capabilities", id: "skills", icon: <Terminal size={14} />, type: "scroll" },
    { label: "Contact", id: "contact", icon: <Terminal size={14} />, type: "scroll" },
    { label: "GitHub", href: "https://github.com/VyomVadodariya", icon: <GithubIcon size={14} />, type: "link" },
    { label: "Resume", href: "/Portfolio/resume.pdf", icon: <FileText size={14} />, type: "link" },
    { label: "Email", href: "mailto:vyomvadodariya2@gmail.com", icon: <Mail size={14} />, type: "link" },
  ];

  const filtered = COMMANDS.filter((cmd) => cmd.label.toLowerCase().includes(search.toLowerCase()));

  const handleSelect = (cmd: typeof COMMANDS[0]) => {
    if (cmd.type === "scroll" && cmd.id) {
      const el = document.getElementById(cmd.id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (cmd.type === "link" && cmd.href) {
      window.open(cmd.href, "_blank");
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-24 sm:pt-32 px-4 backdrop-blur-sm bg-background/50">
      <div 
        className="absolute inset-0"
        onClick={() => setIsOpen(false)}
      />
      <div 
        className="relative w-full max-w-xl bg-surface-1 border border-border rounded-xl shadow-2xl overflow-hidden flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center px-4 py-3 border-b border-border">
          <Terminal size={16} className="text-muted mr-3" />
          <input
            ref={inputRef}
            type="text"
            className="flex-1 bg-transparent text-foreground placeholder:text-muted focus:outline-none font-mono text-sm"
            placeholder="Search commands... (e.g., 'Work', 'GitHub')"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="font-mono text-[10px] text-muted border border-border/50 px-1.5 py-0.5 rounded bg-surface-2 uppercase">
            Esc
          </div>
        </div>

        <div className="max-h-[60vh] overflow-y-auto p-2 scrollbar-none">
          {filtered.length === 0 ? (
            <div className="py-8 text-center font-mono text-sm text-muted">
              No results found.
            </div>
          ) : (
            filtered.map((cmd) => (
              <button
                key={cmd.label}
                className="w-full flex items-center justify-between px-3 py-3 rounded-lg text-left transition-colors hover:bg-surface-2 focus:bg-surface-2 focus:outline-none group"
                onClick={() => handleSelect(cmd)}
              >
                <div className="flex items-center gap-3">
                  <div className="text-muted group-hover:text-accent transition-colors">
                    {cmd.icon}
                  </div>
                  <span className="font-mono text-sm text-foreground">{cmd.label}</span>
                </div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  {cmd.type === "scroll" ? "Scroll" : "Open Link"}
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
