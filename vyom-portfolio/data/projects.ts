export interface Project {
  id: string;
  name: string;
  colorTab: string;
  problem: string;
  solution: string;
  tech: string[];
  outcome: string;
  stats: { value: string; label: string }[];
  github: string;
  live?: string;
}

export const projects: Project[] = [
  {
    id: "optcell",
    name: "OptCELL-global",
    colorTab: "#2563EB",
    problem: "Cellular networks waste bandwidth on static routing that can't adapt to live load patterns.",
    solution: "Built an ML-driven optimiser that dynamically reroutes traffic based on predicted congestion, cutting dropped connections.",
    tech: ["Python", "ML", "Network Simulation"],
    outcome: "Demonstrated measurable throughput gains in simulated multi-cell environments.",
    stats: [
      { value: "↑ Throughput", label: "Measured gain" },
      { value: "ML-driven", label: "Routing engine" },
      { value: "Real-world", label: "Problem domain" },
    ],
    github: "https://github.com/VyomVadodariya/OptCELL-global",
  },
  {
    id: "terrasense",
    name: "TerraSense",
    colorTab: "#059669",
    problem: "Geospatial intelligence is trapped behind expensive proprietary tools inaccessible to student researchers.",
    solution: "Developed an open-source earth-observation pipeline using ML models to classify terrain types from satellite imagery.",
    tech: ["Python", "Computer Vision", "Geospatial ML", "OpenCV"],
    outcome: "Delivered an accessible analysis tool applicable to disaster response and land-use planning.",
    stats: [
      { value: "CV-powered", label: "Classification" },
      { value: "Satellite", label: "Data source" },
      { value: "Open source", label: "Access model" },
    ],
    github: "https://github.com/VyomVadodariya/TerraSense",
  },
  {
    id: "autosre",
    name: "AutoSRE-PostMortem",
    colorTab: "#7C3AED",
    problem: "Post-incident write-ups take hours and are inconsistent, leaving teams without actionable patterns.",
    solution: "Built an AI pipeline that ingests incident logs and auto-generates structured post-mortem reports with root-cause analysis.",
    tech: ["Python", "LLM", "Incident Analysis", "Automation"],
    outcome: "Reduced report generation from hours to minutes with consistent, engineer-ready output.",
    stats: [
      { value: "Hours → Min", label: "Report time" },
      { value: "LLM-native", label: "Analysis engine" },
      { value: "SRE-grade", label: "Output quality" },
    ],
    github: "https://github.com/VyomVadodariya/AutoSRE-PostMortem",
  },
  {
    id: "medhavi",
    name: "Medhavi",
    colorTab: "#E05A3A",
    problem: "Competitive exam prep is generic — students need adaptive, personalised guidance at scale.",
    solution: "Designed an AI-powered tutoring platform that tracks weak areas and generates targeted practice, not one-size-fits-all drills.",
    tech: ["Python", "AI", "Adaptive Learning", "NLP"],
    outcome: "Functional prototype demonstrating personalised learning loops with measurable comprehension tracking.",
    stats: [
      { value: "Adaptive", label: "Learning engine" },
      { value: "AI-native", label: "Architecture" },
      { value: "Personalised", label: "Guidance" },
    ],
    github: "https://github.com/VyomVadodariya/Medhavi",
  },
  {
    id: "smps",
    name: "SMPS Portal",
    colorTab: "#F59E0B",
    problem: "Campus management systems are bloated, slow, and built for admins, not students.",
    solution: "Shipped a clean, role-based student management portal with real-time dashboards and a responsive UI.",
    tech: ["JavaScript", "HTML/CSS", "Dashboard Design"],
    outcome: "A fully functional institutional tool with clear UX hierarchy and live data views.",
    stats: [
      { value: "Full-stack", label: "Build" },
      { value: "Role-based", label: "Access" },
      { value: "Real-time", label: "Dashboards" },
    ],
    github: "https://github.com/VyomVadodariya/smps-portal",
  },
  {
    id: "graphics",
    name: "2D Graphics Editor",
    colorTab: "#0891B2",
    problem: "Learning computer graphics without building one is like learning swimming in a textbook.",
    solution: "Engineered a browser-based 2D vector + raster editor from scratch: drawing tools, layers, and export — no canvas libraries.",
    tech: ["JavaScript", "Canvas API", "Graphics Engine"],
    outcome: "A fully working creative tool built from primitives, proving low-level graphics mastery.",
    stats: [
      { value: "From scratch", label: "No libraries" },
      { value: "Vector + Raster", label: "Dual engine" },
      { value: "Browser-native", label: "Runtime" },
    ],
    github: "https://github.com/VyomVadodariya/2d-graphics-editor",
  },
];
