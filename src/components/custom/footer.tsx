"use client";

import Link from "next/link";
import {
  FiArrowUp,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiInstagram,
} from "react-icons/fi";

const navigation = [
  { label: "Home", href: "/home" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const socials = [
  { label: "GitHub", href: "https://github.com/Yashkashyap12", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-kashyap-2038b6241/",
    icon: FiLinkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/gyashkashyap123456/",
    icon: FiInstagram,
  },
];

const Footer = () => {
  return (
    <footer className="relative isolate overflow-hidden bg-[#faf9f6] px-6 pb-6 pt-16 text-[#171717] sm:px-10 sm:pt-20 lg:px-12">
      {/* Background texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.16]"
        style={{
          backgroundImage:
            "radial-gradient(#777 0.7px, transparent 0.7px)",
          backgroundSize: "18px 18px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 25%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 left-1/3 -z-10 h-80 w-80 rounded-full bg-violet-200/40 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Main footer */}
        <div className="grid gap-14 border-b border-neutral-200 pb-14 lg:grid-cols-[1.3fr_0.7fr] lg:gap-20 lg:pb-20">
          {/* Brand */}
          <div>
            <Link
              href="/home"
              aria-label="Yash Kashyap home"
              className="inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#191720] text-sm font-bold text-white">
                YK
              </span>

              <span className="text-sm font-semibold tracking-tight">
                Yash Kashyap
                <span className="mt-1 block text-xs font-normal text-neutral-500">
                  Full Stack Developer
                </span>
              </span>
            </Link>

            <h2 className="mt-10 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.065em] sm:text-6xl lg:text-7xl">
              Turning ideas into
              <br />
              <span className="bg-linear-to-r from-violet-700 to-indigo-500 bg-clip-text text-transparent">
                digital experiences.
              </span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-neutral-500">
              Building thoughtful digital products through clean code,
              creative thinking, and purposeful design.
            </p>

            <Link
              href="/contact"
              className="group mt-8 inline-flex items-center gap-4 rounded-full border border-neutral-300 bg-white/70 px-5 py-3 text-sm font-medium transition-all duration-300 hover:border-violet-300 hover:bg-violet-50"
            >
              Let&apos;s work together
              <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Navigation and social links */}
          <div className="grid grid-cols-2 gap-8 lg:pt-2">
            <div>
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
                Explore
              </p>

              <nav
                aria-label="Footer navigation"
                className="flex flex-col items-start gap-4"
              >
                {navigation.map((item, index) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="group flex items-center gap-2 text-sm text-neutral-600 transition-colors hover:text-violet-700"
                  >
                    <span className="text-[10px] text-neutral-400">
                      0{index + 1}
                    </span>

                    {item.label}

                    <FiArrowUpRight className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </Link>
                ))}
              </nav>
            </div>

            <div>
              <p className="mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-neutral-400">
                Connect
              </p>

              <div className="flex flex-col items-start gap-4">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="group flex items-center gap-3 text-sm text-neutral-600 transition-colors hover:text-violet-700"
                  >
                    <Icon className="text-base" />
                    {label}
                    <FiArrowUpRight className="opacity-0 transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-5 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-neutral-500">
            © 2026 Yash Kashyap. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="group flex items-center gap-3 rounded-full border border-neutral-200 bg-white/70 px-4 py-2.5 text-xs font-medium transition-all hover:border-violet-300 hover:bg-violet-50"
            >
              Back to top
              <FiArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;