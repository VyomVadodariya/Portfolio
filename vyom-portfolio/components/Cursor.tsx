"use client";
import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  age: number;
  pressure: number;
}

export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef  = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const trail = useRef<TrailPoint[]>([]);
  const mouse = useRef({ x: -200, y: -200 });
  const ring  = useRef({ x: -200, y: -200 });

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      trail.current.push({ x: e.clientX, y: e.clientY, age: 0, pressure: 1 });
      if (trail.current.length > 60) trail.current.shift();
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top  = `${e.clientY}px`;
      }
    };

    const onEnterLink = () => ringRef.current?.classList.add("cursor-hover");
    const onLeaveLink = () => ringRef.current?.classList.remove("cursor-hover");

    window.addEventListener("mousemove", onMove);
    document.querySelectorAll("a, button, [role='button']").forEach((el) => {
      el.addEventListener("mouseenter", onEnterLink);
      el.addEventListener("mouseleave", onLeaveLink);
    });

    let raf: number;
    const animate = () => {
      // Smooth ring follow
      ring.current.x += (mouse.current.x - ring.current.x) * 0.12;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top  = `${ring.current.y}px`;
      }

      // Ink trail canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      trail.current.forEach((pt) => { pt.age += 0.8; });
      trail.current = trail.current.filter((pt) => pt.age < 60);

      if (trail.current.length > 2) {
        for (let i = 1; i < trail.current.length; i++) {
          const prev = trail.current[i - 1];
          const curr = trail.current[i];
          const alpha = Math.max(0, 1 - curr.age / 60);
          const width  = Math.max(0.5, (1 - curr.age / 60) * 3.5);

          ctx.beginPath();
          ctx.moveTo(prev.x, prev.y);
          ctx.lineTo(curr.x, curr.y);
          ctx.strokeStyle = `rgba(59,130,246,${alpha * 0.7})`;
          ctx.lineWidth = width;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} id="ink-canvas" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef}  className="cursor-dot"  aria-hidden="true" />
    </>
  );
}
