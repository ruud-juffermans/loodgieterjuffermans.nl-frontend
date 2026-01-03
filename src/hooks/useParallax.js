import { useEffect, useRef } from "react";

export function useParallax(strength = 0.1, smoothness = 0.12) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect reduced motion
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) return;

    let rafId = 0;
    let target = window.scrollY * strength;
    let current = target;

    const clamp01 = (v) => Math.max(0.01, Math.min(1, v));
    const alpha = clamp01(smoothness); // higher = snappier, lower = smoother

    const update = () => {
      // exponential smoothing toward target
      current += (target - current) * alpha;

      // Avoid thrashing tiny subpixel changes
      const rounded = Math.abs(target - current) < 0.001 ? target : current;

      el.style.transform = `translate3d(0, ${rounded}px, 0)`;
      rafId = requestAnimationFrame(update);
    };

    const onScroll = () => {
      target = window.scrollY * strength;
    };

    // Initialize immediately so it doesn't "jump" on first scroll
    el.style.willChange = "transform";
    rafId = requestAnimationFrame(update);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(rafId);
      el.style.willChange = "";
    };
  }, [strength, smoothness]);

  return ref;
}
