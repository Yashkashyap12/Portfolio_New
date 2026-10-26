"use client";

import Link from "next/link";
import { useState } from "react";
import { FiArrowUpRight, FiCommand, FiMenu, FiX } from "react-icons/fi";

type NavLink = {
  name: string;
  href: string;
};

const navLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contacts", href: "/contact" },
];

const Header = () => {
  const [activeLink, setActiveLink] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop vertical navigation */}
      <header className="fixed left-0 top-0 z-50 hidden h-screen w-25 flex-col items-center border-l border-zinc-200/80 bg-white/90 py-7 backdrop-blur-xl lg:flex xl:w-28">
        {/* Brand */}
        <Link
          href="/"
          aria-label="Go to homepage"
          onClick={() => setActiveLink("/")}
          className="group flex flex-col items-center gap-2"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 text-white transition-all duration-300 group-hover:rotate-12 group-hover:bg-violet-700">
            <FiCommand size={20} />
          </span>

          <span className="text-[11px] font-bold tracking-tight text-zinc-950">
            YourName<span className="text-violet-600">.</span>
          </span>
        </Link>

        {/* Vertical divider */}
        <div className="my-6 h-px w-8 bg-zinc-200" />

        {/* Navigation links */}
        <nav
          aria-label="Main navigation"
          className="flex flex-1 flex-col items-center gap-5"
        >
          {navLinks.map((link) => {
            const isActive = activeLink === link.href;

            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.href)}
                aria-current={isActive ? "location" : undefined}
                className="group relative flex flex-col items-center gap-2 py-1"
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "scale-100 bg-violet-600"
                      : "scale-75 bg-zinc-300 group-hover:scale-100 group-hover:bg-violet-400"
                  }`}
                />

                <span
                  className={`text-[15px] font-medium tracking-wide transition-colors duration-300 ${
                    isActive
                      ? "text-zinc-950"
                      : "text-zinc-400 group-hover:text-zinc-900"
                  }`}
                  style={{
                    writingMode: "vertical-rl",
                    transform: "rotate(180deg)",
                  }}
                >
                  {link.name}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Bottom CTA */}
        <Link
          href="/contact"
          className="group flex flex-col items-center gap-3"
          aria-label="Contact me"
        >

          <span
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 transition-colors group-hover:text-violet-600"
            style={{ writingMode: "vertical-rl" }}
          >
            Let's Talk
          </span>
          
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white transition-all duration-300 group-hover:border-violet-600 group-hover:bg-violet-600 group-hover:text-white">
            <FiArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:rotate-45"
            />
          </span>
        </Link>

        {/* Availability indicator */}
        <div className="mt-8 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="text-[8px] uppercase tracking-wider text-zinc-400">
            Available
          </span>
        </div>
      </header>

      {/* Mobile navigation */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-xl lg:hidden">
        <nav className="flex h-19 items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            onClick={() => setMobileOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 text-white">
              <FiCommand size={19} />
            </span>

            <span className="text-sm font-bold tracking-tight text-zinc-950">
              YourName<span className="text-violet-600">.</span>
              <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-400">
                Developer & Creator
              </span>
            </span>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 text-zinc-900 transition-colors hover:border-violet-600 hover:text-violet-600"
          >
            {mobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </nav>

        {mobileOpen && (
          <div className="border-t border-zinc-200 bg-white px-5 pb-6 pt-4 sm:px-8">
            <nav aria-label="Mobile navigation" className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setMobileOpen(false);
                  }}
                  className="flex items-center justify-between border-b border-zinc-100 py-4 text-sm font-medium text-zinc-600 transition-colors hover:text-violet-600"
                >
                  <span>{link.name}</span>
                </Link>
              ))}

              <Link
                href="/contact"
                onClick={() => setMobileOpen(false)}
                className="mt-5 flex items-center justify-between rounded-full bg-zinc-950 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-violet-700"
              >
                Let's Talk
                <FiArrowUpRight size={18} />
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
