"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiCode,
  FiLayers,
} from "react-icons/fi";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
];

const About = () => {
  const shouldReduceMotion = useReducedMotion() ?? false;

  const fadeUp = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 24,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.2,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.12,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const viewport = {
    once: true,
    amount: 0.1,
  };

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden bg-[#faf9f6] dark:bg-[#0b0b0c] text-[#171717] dark:text-zinc-100"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-amber-200/25 dark:bg-amber-500/10 blur-[110px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 15, 0], y: [0, -15, 0] }
          }
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-orange-100/35 dark:bg-amber-500/10 blur-[110px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -20, 0], y: [0, 15, 0] }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(#27272a 0.7px, transparent 0.7px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 sm:py-28 lg:px-12 lg:py-24">
        {/* Section label */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="flex items-center justify-between gap-4"
        >
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span className="h-px w-8 bg-amber-600 sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 sm:text-xs">
              01 / About me
            </span>
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="hidden text-xs text-zinc-400 dark:text-zinc-500 sm:block"
          >
            A little about my approach
          </motion.span>
        </motion.div>

        {/* Main editorial content */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
          {/* Heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={fadeUp}
              className="mb-6 text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400"
            >
              More than just code.
            </motion.p>

            <motion.h2
              id="about-heading"
              variants={fadeUp}
              className="text-[clamp(3.5rem,7.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
            >
              I build
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">things that</span>
              <br />
              <span>
                matter<span className="text-amber-700 dark:text-amber-400">.</span>
              </span>
            </motion.h2>
          </motion.div>

          {/* Description */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="lg:pb-2"
          >
            <motion.div
              variants={fadeUp}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -3, transition: { duration: 0.3 } }
              }
              className="mb-6 flex size-12 items-center justify-center rounded-2xl border border-amber-100 dark:border-amber-500/20 bg-white/80 dark:bg-zinc-900/80 text-amber-700 dark:text-amber-400 shadow-sm"
            >
              <FiCode size={23} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="max-w-xl text-lg font-medium leading-8 tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-xl sm:leading-9"
            >
              I&apos;m a Full Stack Developer focused on creating
              reliable applications with clean architecture and
              thoughtful user experiences.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base sm:leading-8"
            >
              I enjoy working across the stack — from building intuitive
              interfaces with React and Next.js to developing APIs and
              connecting databases. My goal is to turn complex requirements
              into practical, maintainable solutions.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 w-fit">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 py-3 pl-5 pr-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-500/30 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400"
              >
                See what I build

                <span className="flex size-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 transition-colors group-hover:bg-amber-100 dark:group-hover:bg-amber-500/15">
                  <FiArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Minimal details */}
        <div className="mt-20 grid gap-10 border-y border-zinc-200/80 dark:border-zinc-800/80 py-8 sm:mt-24 sm:grid-cols-2 sm:items-center lg:mt-28 lg:grid-cols-[0.7fr_1.3fr] lg:py-10">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.p
              variants={fadeUp}
              className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500"
            >
              My approach
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-xl font-medium tracking-tight text-zinc-800 dark:text-zinc-200 sm:text-2xl"
            >
              Think clearly. Build thoughtfully.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="sm:justify-self-end"
          >
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-amber-100 dark:border-amber-500/20 bg-white/80 dark:bg-zinc-900/80 text-amber-700 dark:text-amber-400">
                <FiLayers size={19} />
              </span>

              <div>
                <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                  Technologies I work with
                </p>

                <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
                  My development toolkit
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="mt-5 flex flex-wrap gap-2"
            >
              {technologies.map((technology) => (
                <motion.span
                  key={technology}
                  variants={fadeUp}
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: -3,
                          transition: { duration: 0.2 },
                        }
                  }
                  className="rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/70 px-3.5 py-2 text-xs font-medium text-zinc-600 dark:text-zinc-400 transition-colors duration-300 hover:border-amber-300 dark:hover:border-amber-500/30 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400"
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom transition */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 flex items-center justify-between"
        >
          <motion.span
            variants={fadeUp}
            className="text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500"
          >
            Curiosity into creation
          </motion.span>

          <motion.div variants={fadeUp}>
            <Link
              href="/experience"
              aria-label="Continue to experience section"
              className="group flex size-10 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 text-zinc-600 dark:text-zinc-400 transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-500/30 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400"
            >
              <FiArrowDownRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;