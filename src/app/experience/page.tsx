"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import {
  FiArrowDownRight,
  FiBriefcase,
} from "react-icons/fi";

type ExperienceItem = {
  number: string;
  role: string;
  company: string;
  duration: string;
  type: string;
  description: string;
  technologies: string[];
};

const experiences: ExperienceItem[] = [
  {
    number: "01",
    role: "Full Stack Developer",
    company: "Personal Projects",
    duration: "Ongoing",
    type: "Independent Development",
    description:
      "Building full-stack applications with responsive interfaces, reusable components, REST APIs, authentication, and structured database integration.",
    technologies: ["Next.js", "TypeScript", "Node.js", "MySQL"],
  },
  {
    number: "02",
    role: "Frontend Development",
    company: "Portfolio & Web Applications",
    duration: "Ongoing",
    type: "Project-Based Learning",
    description:
      "Developing polished user interfaces with an emphasis on responsive layouts, reusable architecture, form validation, and maintainable code.",
    technologies: ["React", "Tailwind CSS", "Zod", "Axios"],
  },
  {
    number: "03",
    role: "Backend Development",
    company: "API Development Projects",
    duration: "Ongoing",
    type: "Project-Based Learning",
    description:
      "Working on REST API architecture, request validation, authentication, authorization, database operations, and centralized error handling.",
    technologies: ["Express", "Sequelize", "MySQL", "JWT"],
  },
];

const Experience = () => {
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

  const timelineItem = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      y: shouldReduceMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: shouldReduceMotion ? 0 : 1.1,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  const viewport = {
    once: true,
    amount: 0.1,
  };

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative isolate overflow-hidden bg-[#faf9f6] dark:bg-[#0b0b0c] text-[#171717] dark:text-zinc-100"
    >
      {/* Background effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -right-40 top-20 h-96 w-96 rounded-full bg-amber-100/30 dark:bg-amber-500/10 blur-[110px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -15, 0], y: [0, 15, 0] }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-orange-100/35 dark:bg-amber-500/10 blur-[110px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 15, 0], y: [0, -15, 0] }
          }
          transition={{
            duration: 20,
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
              02 / Experience
            </span>
          </motion.div>

          <motion.span
            variants={fadeUp}
            className="hidden text-xs text-zinc-400 dark:text-zinc-500 sm:block"
          >
            My development journey
          </motion.span>
        </motion.div>

        {/* Editorial heading */}
        <div className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-16">
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
              Learning. Building. Improving.
            </motion.p>

            <motion.h2
              id="experience-heading"
              variants={fadeUp}
              className="text-[clamp(3.5rem,7.5vw,7rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
            >
              The work
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">behind the</span>
              <br />
              <span>
                progress<span className="text-amber-700 dark:text-amber-400">.</span>
              </span>
            </motion.h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-md lg:ml-auto lg:pb-2"
          >
            <motion.p
              variants={fadeUp}
              className="text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-9"
            >
              Every project is an opportunity to strengthen my engineering
              skills, understand real-world problems, and build better
              software.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-6 flex items-center gap-3"
            >
              <span className="flex size-10 items-center justify-center rounded-xl border border-amber-100 dark:border-amber-500/20 bg-white/80 dark:bg-zinc-900/80 text-amber-700 dark:text-amber-400 shadow-sm">
                <FiBriefcase size={19} />
              </span>

              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                Development experience &amp; selected work
              </span>
            </motion.div>
          </motion.div>
        </div>

        {/* Timeline heading */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-20 flex items-center justify-between border-y border-zinc-200/80 dark:border-zinc-800/80 py-5 sm:mt-24 lg:mt-28"
        >
          <motion.span
            variants={fadeUp}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400 dark:text-zinc-500"
          >
            Selected experience
          </motion.span>

          <motion.span
            variants={fadeUp}
            className="text-xs text-zinc-400 dark:text-zinc-500"
          >
            01 — 03
          </motion.span>
        </motion.div>

        {/* Experience timeline */}
        <div>
          {experiences.map((item, index) => (
            <motion.article
              key={item.number}
              variants={timelineItem}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              transition={{
                delay: shouldReduceMotion ? 0 : index * 0.15,
              }}
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : {
                      backgroundColor: "rgba(255, 255, 255, 0.35)",
                      transition: { duration: 0.3 },
                    }
              }
              className="group grid gap-5 border-b border-zinc-200/80 dark:border-zinc-800/80 py-8 transition-colors duration-300 sm:py-10 lg:grid-cols-[100px_1fr_0.85fr] lg:gap-8 lg:py-12"
            >
              {/* Number and timeline marker */}
              <div className="flex items-center gap-3 lg:flex-col lg:items-start lg:gap-5">
                <span className="text-xs font-medium text-amber-700 dark:text-amber-400">
                  {item.number}
                </span>

                <span className="h-px w-8 bg-zinc-300 dark:bg-zinc-600 transition-colors group-hover:bg-amber-500 lg:w-10" />

                <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400 dark:text-zinc-500 lg:mt-auto">
                  {item.duration}
                </span>
              </div>

              {/* Role and organization */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400 dark:text-zinc-500">
                  {item.type}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.045em] text-zinc-900 dark:text-zinc-100 transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-400 sm:text-3xl">
                  {item.role}
                </h3>

                <p className="mt-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
                  {item.company}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 lg:hidden">
                  {item.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-3 py-1.5 text-[11px] font-medium text-zinc-500 dark:text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description and technologies */}
              <div className="lg:pt-1">
                <p className="max-w-lg text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base sm:leading-8">
                  {item.description}
                </p>

                <div className="mt-6 hidden flex-wrap gap-2 lg:flex">
                  {item.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : {
                              y: -3,
                              transition: { duration: 0.2 },
                            }
                      }
                      className="rounded-full border border-zinc-200/90 dark:border-zinc-800/90 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 transition-colors group-hover:border-amber-200 dark:group-hover:border-amber-500/30"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom transition */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <motion.p
            variants={fadeUp}
            className="max-w-md text-xs leading-6 text-zinc-400 dark:text-zinc-500"
          >
            Focused on writing maintainable code, learning through practice,
            and improving with every build.
          </motion.p>

          <motion.div variants={fadeUp}>
            <Link
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 py-3 pl-5 pr-3 text-sm font-semibold text-zinc-800 dark:text-zinc-200 transition-all duration-300 hover:border-amber-300 dark:hover:border-amber-500/30 hover:bg-amber-50 dark:hover:bg-amber-500/10 hover:text-amber-700 dark:hover:text-amber-400"
            >
              Explore projects

              <span className="flex size-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 transition-colors group-hover:bg-amber-100 dark:group-hover:bg-amber-500/15">
                <FiArrowDownRight
                  size={17}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;