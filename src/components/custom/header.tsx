"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import ThemeToggle from "./theme-toggle";
import { FaCode } from "react-icons/fa";
import {
  FiArrowUpRight,
  FiCommand,
  FiMenu,
  FiX,
} from "react-icons/fi";
import Image from "next/image";
import DP from "../../assets/dp.png"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Experience", href: "/experience" },
  { name: "Projects", href: "/projects" },
  { name: "Contacts", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const shouldReduceMotion = useReducedMotion();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileOpen]);

  const closeMenu = () => setMobileOpen(false);

  return (
    <>
      {/* Desktop sidebar */}
      <header className="fixed left-0 top-0 z-50 hidden h-dvh w-25 flex-col items-center border-r border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 py-7 backdrop-blur-xl lg:flex xl:w-28">
        <Link href="/" aria-label="Homepage" className="group flex flex-col items-center gap-2">
          <motion.span
            whileHover={shouldReduceMotion ? undefined : { rotate: 12, scale: 1.06 }}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-zinc-950 dark:bg-amber-600 text-white transition-colors group-hover:bg-amber-600"
          >
            {/* <FaCode size={20} /> */}
            <Image height={40} width={40} src={DP} alt="img"/>
          </motion.span>
          <span className="text-[11px] font-bold text-zinc-950 dark:text-white">
            YASH KASHYAP<span className="text-amber-600">.</span>
          </span>
        </Link>

        <div className="my-6 h-px w-8 bg-zinc-200 dark:bg-zinc-700" />

        <nav aria-label="Main navigation" className="flex flex-1 flex-col items-center gap-5">
          {navLinks.map((link) => {
            const active =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(`${link.href}/`));

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`group flex flex-col items-center gap-2 py-1 ${
                  active ? "text-zinc-950 dark:text-white" : "text-zinc-400 dark:text-zinc-500 hover:text-amber-700 dark:hover:text-amber-400"
                }`}
              >
                <span
                  className="text-[15px] font-medium"
                  style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                  {link.name}
                </span>
                <motion.span
                  animate={{ scale: active ? 1 : 0.65, opacity: active ? 1 : 0.5 }}
                  className={`h-1.5 w-1.5 rounded-full ${
                    active ? "bg-amber-600" : "bg-zinc-300 dark:bg-zinc-600"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <ThemeToggle className="mb-6" />

        <Link href="/contact" className="flex flex-col items-center gap-3">
          <span
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400"
            style={{ writingMode: "vertical-rl" }}
          >
            Let&apos;s Talk
          </span>
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 transition-colors hover:border-amber-600 hover:bg-amber-600 hover:text-white">
            <FiArrowUpRight size={19} />
          </span>
        </Link>
      </header>

      {/* Mobile header */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-xl lg:hidden">
        <nav className="flex h-19 items-center justify-between px-5 sm:px-8">
          <Link href="/" onClick={closeMenu} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-950 dark:bg-amber-600 text-white">
              <FiCommand size={19} />
            </span>
            <span className="text-sm font-bold text-zinc-950 dark:text-white">
              YASH KASHYAP<span className="text-amber-600">.</span>
              <span className="mt-0.5 block text-[9px] font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                Developer &amp; Creator
              </span>
            </span>
          </Link>

          <div className="flex items-center gap-2">
          <ThemeToggle />
          <motion.button
            type="button"
            whileTap={shouldReduceMotion ? undefined : { scale: 0.9 }}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:border-amber-600 hover:text-amber-700 dark:hover:text-amber-400"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={mobileOpen ? "close" : "open"}
                initial={shouldReduceMotion ? false : { opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={shouldReduceMotion ? undefined : { opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.15 }}
              >
                {mobileOpen ? <FiX size={21} /> : <FiMenu size={21} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
          </div>
        </nav>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation"
              key="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="max-h-[calc(100dvh-4.75rem)] overflow-y-auto border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900"
            >
              <motion.nav
                aria-label="Mobile navigation"
                className="flex flex-col px-5 pb-6 pt-2 sm:px-8"
              >
                {navLinks.map((link, index) => {
                  const active =
                    pathname === link.href ||
                    (link.href !== "/" && pathname.startsWith(`${link.href}/`));

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.25, delay: 0.08 + index * 0.06 }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        aria-current={active ? "page" : undefined}
                        className={`flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 py-4 text-sm font-medium ${
                          active ? "text-amber-700 dark:text-amber-400" : "text-zinc-600 dark:text-zinc-400 hover:text-amber-700 dark:hover:text-amber-400"
                        }`}
                      >
                        <span>{link.name}</span>
                        <span className="flex items-center gap-3">
                          <span className="text-xs text-zinc-300 dark:text-zinc-600">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <FiArrowUpRight size={16} />
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}

                <motion.div
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.25, delay: 0.08 + navLinks.length * 0.06 }}
                  className="pt-5"
                >
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="flex items-center justify-between rounded-full bg-zinc-950 dark:bg-amber-600 px-5 py-3.5 text-sm font-medium text-white transition-colors hover:bg-amber-700"
                  >
                    Let&apos;s Talk
                    <FiArrowUpRight size={18} />
                  </Link>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}