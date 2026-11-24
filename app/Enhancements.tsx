"use client";

import { useEffect } from "react";
import renderMathInElement from "katex/contrib/auto-render";

// Client-side behaviour for the static page markup: theme toggle, KaTeX, search, active nav link.
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

    // Search
    const q = document.getElementById("q") as HTMLInputElement;
    const sections = [...document.querySelectorAll<HTMLElement>("section.chap")];
    const norm = (s: string) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
    const onSearch = () => {
      const term = norm(q.value.trim());
      let any = false;
      sections.forEach((sec) => {
        const head = norm(sec.querySelector(".chap-head")!.textContent ?? "");
        let visible = 0;
        sec.querySelectorAll(".card").forEach((card) => {
          if (card.parentElement!.closest(".card")) return;
          const hit = !term || head.includes(term) || norm(card.textContent ?? "").includes(term);
          card.classList.toggle("hidden", !hit);
          if (hit) visible++;
        });
        sec.classList.toggle("hidden", visible === 0);
        if (visible) any = true;
      });
      document.getElementById("empty")!.classList.toggle("hidden", any);
    };
    q.addEventListener("input", onSearch);

    // Active nav link
    const links = [...document.querySelectorAll("nav.side a")];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting)
            links.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        });
      },
      { rootMargin: "-90px 0px -65% 0px" }
    );
    sections.forEach((s) => obs.observe(s));

    return () => {
      themeBtn.removeEventListener("click", toggleTheme);
      q.removeEventListener("input", onSearch);
      obs.disconnect();
    };
  }, []);

  return null;
}
