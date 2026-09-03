import { useEffect, useState } from "react";
import { navLinks } from "../data";

export function useActiveSection() {
  const [active, setActive] = useState("#top");

  useEffect(() => {
    const ids = ["top", ...navLinks.map((l) => l.href.slice(1))];
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(`#${vis.target.id}`);
      },
      { threshold: [0.18, 0.32, 0.5], rootMargin: "-20% 0px -45% 0px" },
    );
    nodes.forEach((n) => obs.observe(n));
    return () => obs.disconnect();
  }, []);

  return active;
}
