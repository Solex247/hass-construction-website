"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, MenuIcon, XIcon } from "./icons";

const links = [
  ["About", "#about"],
  ["Services", "#services"],
  ["Projects", "#projects"],
  ["Process", "#process"],
  ["Contact", "#contact"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">
        <a href="#top" className="group flex items-center gap-3" aria-label="Hass Construction home">
          <Image src="/images/logo-clean-generated.png" alt="Hass Construction Company" width={112} height={64} className="h-12 w-auto object-contain mix-blend-screen" priority />
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => <a key={href} href={href} className="text-sm text-white/80 transition hover:text-white">{label}</a>)}
        </nav>
        <a href="#contact" className="hidden items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:bg-white hover:text-black md:flex">Start a project <ArrowUpRight /></a>
        <button className="rounded-full border border-white/20 bg-black/20 p-2 backdrop-blur-md md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <XIcon /> : <MenuIcon />}</button>
      </div>
      {open && <div className="mx-4 rounded-3xl border border-white/10 bg-[#111312]/95 p-5 shadow-2xl backdrop-blur-xl md:hidden">
        <div className="flex flex-col gap-1">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)} className="rounded-2xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white">{label}</a>)}
        </div>
      </div>}
    </header>
  );
}
