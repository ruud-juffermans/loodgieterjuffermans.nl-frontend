import React from "react";

function useActiveSection(sectionIds, rootMargin = "-30% 0px -50% 0px") {
    const [active, setActive] = React.useState(sectionIds[0] ?? "");
  
    React.useEffect(() => {
      const els = sectionIds
        .map((id) => document.getElementById(id))
        .filter(Boolean);
  
      if (!els.length) return;
  
      const ratios = new Map();
      let rafId = 0;
  
      const pickActive = () => {
        rafId = 0;
        let bestId = active;
        let bestRatio = 0;
  
        for (const el of els) {
          const id = el.id;
          const r = ratios.get(id) ?? 0;
          if (r > bestRatio) {
            bestRatio = r;
            bestId = id;
          }
        }
  
        // Fallback: if nothing intersects, choose the closest section above the fold
        if (bestRatio === 0) {
          const headerOffset = 72;
          const y = window.scrollY + headerOffset + 1;
          let closest = els[0]?.id ?? "";
          for (const el of els) {
            if (el.offsetTop <= y) closest = el.id;
          }
          bestId = closest;
        }
  
        if (bestId) setActive(bestId);
      };
  
      const obs = new IntersectionObserver(
        (entries) => {
          for (const e of entries) {
            ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0);
          }
          // Batch updates to animation frame to avoid thrashing
          if (!rafId) rafId = requestAnimationFrame(pickActive);
        },
        {
          root: null,
          // Threshold needs enough granularity for ratios to move smoothly
          threshold: Array.from({ length: 21 }, (_, i) => i / 20), // 0..1 step 0.05
          rootMargin,
        }
      );
  
      els.forEach((el) => obs.observe(el));
  
      return () => {
        if (rafId) cancelAnimationFrame(rafId);
        obs.disconnect();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sectionIds.join("|"), rootMargin]);
  
    return active;
  }

export default useActiveSection;