"use client";

import { useEffect } from "react";
import renderMathInElement from "katex/contrib/auto-render";
import { setupCourseInteractions } from "./course-interactions";

// Enable theme switching, KaTeX, and course interactions after hydration.
export default function Enhancements() {
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

    const cleanup = setupCourseInteractions();
    return () => {
      themeBtn.removeEventListener("click", toggleTheme);
      cleanup();
    };
  }, []);

  return null;
}
