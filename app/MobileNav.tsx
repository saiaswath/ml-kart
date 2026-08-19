"use client";

import { useEffect, useRef, useState } from "react";

const links = [
  ["Products", "#products"],
  ["AI Layer", "#layer"],
  ["How we deliver", "#delivery"],
  ["Industries", "#industries"],
  ["Pricing", "#plans"],
  ["Contact", "#contact"],
] as const;

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 52.01rem)");
    const closeAtDesktop = () => desktop.matches && setOpen(false);
    desktop.addEventListener("change", closeAtDesktop);
    return () => desktop.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!open) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpen(false);
      button.current?.focus();
    };
    const closeOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [open]);

  return (
    <div className="mobile-nav" ref={root}>
      <button
        className="menu-toggle"
        ref={button}
        type="button"
        aria-label={open ? "Close navigation" : "Open navigation"}
        aria-controls="mobile-menu"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <span />
        <span />
      </button>

      <div className="mobile-menu" id="mobile-menu" hidden={!open}>
        <nav aria-label="Mobile">
          <p>Explore ML Kart</p>
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}<span aria-hidden="true">↗</span>
            </a>
          ))}
          <a
            className="mobile-overview"
            href="/ML_Kart_Company_Overview.pdf"
            download
            onClick={() => setOpen(false)}
          >
            Download company overview<span aria-hidden="true">↓</span>
          </a>
        </nav>
      </div>
    </div>
  );
}
