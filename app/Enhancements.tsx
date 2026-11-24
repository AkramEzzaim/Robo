"use client";

import { useEffect } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import { setupCourseInteractions } from "./course-interactions";
import { roboticsQuiz } from "./robotique/quiz-data";
import { imagingQuiz } from "./imagerie-medicale/quiz-data";
import { modules } from "./modules";

// Enable theme switching, KaTeX, and course interactions after hydration.
export default function Enhancements({ module }: { module: (typeof modules)[number]["href"] }) {
  useEffect(() => {
    const root = document.documentElement;

    // Theme
    const themeBtn = document.getElementById("theme")!;
    const toggleTheme = () => {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch {}
    };
    themeBtn.addEventListener("click", toggleTheme);

    // KaTeX
    renderMathInElement(document.body, {
      delimiters: [
        { left: "$$", right: "$$", display: true },
        { left: "$", right: "$", display: false },
      ],
      throwOnError: false,
    });

    const cleanupHistograms = Array.from(document.querySelectorAll<HTMLElement>(".bars[data-bars]"), (chart) => {
      const values = chart.dataset.bars!.split(",").map(Number);
      const labels = chart.dataset.labels!.split(",");
      const max = Math.max(1, ...values);
      const bars = values.map((value, index) => {
        const bar = document.createElement("div");
        bar.className = "b";
        bar.style.height = `${value / max * 100}%`;
        const count = document.createElement("i");
        count.textContent = value ? String(value) : "";
        const label = document.createElement("em");
        label.textContent = labels[index];
        bar.append(count, label);
        return bar;
      });
      chart.replaceChildren(...bars);
      return () => chart.replaceChildren();
    });

    const cleanup = setupCourseInteractions(module === "/robotique" ? roboticsQuiz : imagingQuiz);
    return () => {
      themeBtn.removeEventListener("click", toggleTheme);
      cleanup();
      cleanupHistograms.forEach((clear) => clear());
    };
  }, [module]);

  return null;
}
