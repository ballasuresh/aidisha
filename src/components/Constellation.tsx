import { useEffect, useRef } from "react";

export function Constellation() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const stars = Array.from({ length: 64 }, () => ({
      x: Math.random(),
      y: Math.random(),
      r: Math.random() * 1.2 + 0.3,
      p: Math.random() * Math.PI * 2,
    }));

    const mouse = { x: 0.72, y: 0.38 };
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      if (rect.width === 0) return;
      mouse.x = (e.clientX - rect.left) / rect.width;
      mouse.y = (e.clientY - rect.top) / rect.height;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let frame = 0;
    let raf = 0;

    const draw = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth || window.innerWidth;
      const h = canvas.clientHeight || window.innerHeight;
      if (canvas.width !== w * dpr || canvas.height !== h * dpr) {
        canvas.width = w * dpr;
        canvas.height = h * dpr;
        canvas.style.width = `${w}px`;
        canvas.style.height = `${h}px`;
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      }

      ctx.clearRect(0, 0, w, h);
      frame += reduced ? 0 : 0.008;

      const pts = stars.map((s) => ({
        x: s.x * w + Math.sin(frame + s.p) * 8,
        y: s.y * h + Math.cos(frame * 0.8 + s.p) * 8,
        r: s.r,
      }));

      const mx = mouse.x * w;
      const my = mouse.y * h;

      ctx.strokeStyle = "rgba(196,165,116,0.14)";
      ctx.lineWidth = 1;
      pts.forEach((a, i) => {
        const dx = a.x - mx;
        const dy = a.y - my;
        if (dx * dx + dy * dy < 160 * 160) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(mx, my);
          ctx.stroke();
        }
        for (let j = i + 1; j < pts.length; j++) {
          const b = pts[j];
          const ddx = a.x - b.x;
          const ddy = a.y - b.y;
          if (ddx * ddx + ddy * ddy < 110 * 110) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      });

      pts.forEach((a) => {
        ctx.beginPath();
        ctx.fillStyle = "rgba(243,236,226,0.55)";
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.beginPath();
      ctx.fillStyle = "#c9a45b";
      ctx.arc(mx, my, 2.2, 0, Math.PI * 2);
      ctx.fill();

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="pointer-events-none absolute inset-0 h-full w-full" aria-hidden="true" />;
}
