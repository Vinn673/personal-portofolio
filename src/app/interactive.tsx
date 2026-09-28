"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

/**
 * Adds .in-view to [data-reveal] elements as they enter the viewport.
 * Re-runs on route change so newly mounted pages animate in.
 * Respects prefers-reduced-motion.
 */
export function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!els.length) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) {
      els.forEach((el) => el.classList.add("in-view"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay ?? "0";
            window.setTimeout(() => el.classList.add("in-view"), Number(delay));
            io.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}

/** Animated cursor-follow highlight on the hero signal card. */
export function SignalCardEffect() {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const card = document.querySelector<HTMLDivElement>(".signal-card");
    if (!card) return;
    cardRef.current = card;

    const handleMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };

    card.addEventListener("mousemove", handleMove);
    return () => card.removeEventListener("mousemove", handleMove);
  }, [pathname]);

  return null;
}
