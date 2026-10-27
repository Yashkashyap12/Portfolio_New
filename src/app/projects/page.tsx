"use client";

import Link from "next/link";

import { motion } from "motion/react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

import { FiArrowUpRight, FiExternalLink, FiGithub } from "react-icons/fi";

type Project = {
  number: string;

  title: string;

  category: string;

  description: string;

  technologies: string[];

  gradient: string;

  accent: string;

  initials: string;

  featured?: boolean;

  liveUrl?: string;

  githubUrl?: string;
};

const projects: Project[] = [
  {
    number: "01",

    title: "Admin Dashboard",

    category: "Dashboard / Full Stack",

    description:
      "A structured dashboard interface for managing users, roles, products, and application data through reusable components and API integration.",

    technologies: ["React", "TypeScript", "Redux Toolkit", "Node.js", "MySQL"],

    gradient: "from-amber-100 dark:from-amber-950/50 via-white dark:via-zinc-900 to-orange-100 dark:to-orange-950/40",

    accent: "text-amber-700 dark:text-amber-400",

    initials: "AD",

    featured: true,
  },

  {
    number: "02",

    title: "Portfolio API",

    category: "Backend / REST API",

    description:
      "A backend foundation for portfolio data, featuring structured API layers, database integration, and request validation.",

    technologies: ["Node.js", "Express", "Sequelize", "MySQL"],

    gradient: "from-orange-100 dark:from-orange-950/40 via-white dark:via-zinc-900 to-amber-50 dark:to-zinc-900",

    accent: "text-orange-700",

    initials: "API",
  },

  {
    number: "03",

    title: "Personal Portfolio",

    category: "Frontend / Web Design",

    description:
      "A responsive developer portfolio built around editorial typography, clean layouts, and a consistent visual design system.",

    technologies: ["Next.js", "TypeScript", "Tailwind CSS"],

    gradient: "from-amber-100 dark:from-amber-950/50 via-white dark:via-zinc-900 to-zinc-100 dark:to-zinc-900",

    accent: "text-amber-700 dark:text-amber-400",

    initials: "YK",
  },
];

const reveal = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const stagger = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,

      delayChildren: 0.1,
    },
  },
};

const Projects = () => {
  const shouldReduceMotion = useReducedMotion();

  const featured = projects[0];

  const secondaryProjects = projects.slice(1);

  const revealAnimation = shouldReduceMotion
    ? { hidden: { opacity: 1 }, visible: { opacity: 1 } }
    : reveal;

  const staggerAnimation = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : stagger;

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden bg-[#faf9f6] dark:bg-[#0b0b0c] text-[#171717] dark:text-zinc-100"
    >
      {/* Ambient background */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -left-40 top-40 h-96 w-96 rounded-full bg-amber-100/25 dark:bg-amber-500/10 blur-[110px]"
          animate={
            shouldReduceMotion ? undefined : { x: [0, 35, 0], y: [0, -25, 0] }
          }
          transition={{
            duration: 18,

            repeat: Infinity,

            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-amber-100/35 dark:bg-amber-500/10 blur-[110px]"
          animate={
            shouldReduceMotion ? undefined : { x: [0, -30, 0], y: [0, 25, 0] }
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
          variants={revealAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-amber-600 sm:w-12" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400 sm:text-xs">
              03 / Selected work
            </span>
          </div>

          <span className="hidden text-xs text-zinc-400 dark:text-zinc-500 sm:block">
            Ideas into applications
          </span>
        </motion.div>

        {/* Editorial introduction */}

        <motion.div
          variants={staggerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-14 grid gap-8 lg:mt-20 lg:grid-cols-[1.1fr_0.65fr] lg:items-end lg:gap-16"
        >
          <motion.div variants={revealAnimation}>
            <p className="mb-6 text-sm font-medium tracking-wide text-zinc-500 dark:text-zinc-400">
              A selection of things I&apos;ve built.
            </p>

            <h2
              id="projects-heading"
              className="text-[clamp(3.5rem,8vw,7.5rem)] font-semibold leading-[0.86] tracking-[-0.08em]"
            >
              Selected
              <br />
              <span className="text-zinc-400 dark:text-zinc-500">work</span>
              <span className="text-amber-700 dark:text-amber-400">.</span>
            </h2>
          </motion.div>

          <motion.div
            variants={revealAnimation}
            className="max-w-md lg:ml-auto lg:pb-2"
          >
            <p className="text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg sm:leading-9">
              A closer look at my approach to frontend engineering, backend
              architecture, and building complete digital experiences.
            </p>

            <p className="mt-4 text-xs leading-6 text-zinc-400 dark:text-zinc-500">
              Selected projects · Web applications · API development
            </p>
          </motion.div>
        </motion.div>

        {/* Featured project */}

        <motion.article
          variants={revealAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="group mt-16 sm:mt-20 lg:mt-24"
        >
          {/* Featured preview */}

          <div
            className={`relative overflow-hidden rounded-[1.5rem] border border-zinc-200/80 dark:border-zinc-800/80 bg-linear-to-br ${featured.gradient} p-5 sm:rounded-[2rem] sm:p-9 lg:p-12`}
          >
            <motion.div
              aria-hidden="true"
              className="absolute right-0 top-0 h-64 w-64 rounded-full bg-amber-100/30 dark:bg-amber-500/10 blur-[80px]"
              whileHover={shouldReduceMotion ? undefined : { scale: 1.2 }}
              transition={{ duration: 1.1 }}
            />

            <div className="relative flex items-center justify-between gap-4">
              <span className="rounded-full border border-white/80 dark:border-white/10 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400 backdrop-blur-sm">
                Featured project
              </span>

              <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                {featured.number} / 03
              </span>
            </div>

            {/* Dashboard mockup */}

            <motion.div
              initial={
                shouldReduceMotion
                  ? undefined
                  : { opacity: 0, y: 28, scale: 0.98 }
              }
              whileInView={
                shouldReduceMotion ? undefined : { opacity: 1, y: 0, scale: 1 }
              }
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.3, ease: "easeOut" }}
              className="relative mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900 shadow-[0_25px_80px_-35px_rgba(39,39,42,0.22)] sm:mt-10 sm:rounded-2xl"
            >
              <div className="flex items-center justify-between border-b border-zinc-100 dark:border-zinc-800 px-4 py-3 sm:px-6">
                <div className="flex items-center gap-1.5">
                  <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />

                  <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />

                  <span className="size-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                </div>

                <span className="text-[9px] font-medium tracking-wide text-zinc-400 dark:text-zinc-500 sm:text-[10px]">
                  PROJECT PREVIEW
                </span>

                <span className="size-5 rounded-md bg-amber-50 dark:bg-amber-500/10" />
              </div>

              <div className="grid min-h-57.5 grid-cols-[64px_1fr] sm:min-h-75 sm:grid-cols-[100px_1fr]">
                {/* Sidebar */}

                <div className="border-r border-zinc-100 dark:border-zinc-800 bg-zinc-50/80 dark:bg-zinc-900/60 p-3 sm:p-5">
                  <div className="mb-7 flex size-7 items-center justify-center rounded-lg bg-zinc-950 dark:bg-amber-600 text-[9px] font-bold text-white sm:size-9 sm:text-xs">
                    AD
                  </div>

                  <div className="space-y-4">
                    <div className="h-1.5 rounded-full bg-amber-200 dark:bg-amber-500/30" />

                    <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />

                    <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />

                    <div className="h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700" />
                  </div>
                </div>

                {/* Dashboard content */}

                <div className="min-w-0 p-4 sm:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="h-3 w-24 rounded bg-zinc-800 sm:w-36" />

                      <div className="mt-2 h-1.5 w-32 rounded bg-zinc-100 dark:bg-zinc-800 sm:w-44" />
                    </div>

                    <div className="h-7 w-16 rounded-lg bg-amber-600 sm:h-9 sm:w-24" />
                  </div>

                  <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className={`rounded-lg border border-zinc-100 dark:border-zinc-800 p-3 sm:rounded-xl sm:p-4 ${
                          item === 3 ? "hidden sm:block" : ""
                        }`}
                      >
                        <div className="h-1.5 w-10 rounded bg-zinc-200 dark:bg-zinc-700 sm:w-14" />

                        <div className="mt-3 h-4 w-12 rounded bg-zinc-800 sm:w-16" />

                        <div className="mt-3 h-1 w-full rounded-full bg-amber-100 dark:bg-amber-500/15">
                          <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{
                              width: `${item * 25 + 25}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.5,

                              delay: item * 0.15,

                              ease: "easeOut",
                            }}
                            className="h-1 rounded-full bg-amber-500"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-lg border border-zinc-100 dark:border-zinc-800 p-3 sm:mt-5 sm:rounded-xl sm:p-5">
                    <div className="h-2 w-24 rounded bg-zinc-200 dark:bg-zinc-700" />

                    <div className="mt-5 flex h-12 items-end gap-2 sm:h-20 sm:gap-3">
                      {[35, 65, 45, 85, 55, 100, 70, 90, 50, 75].map(
                        (height, index) => (
                          <motion.div
                            key={index}
                            initial={{ height: "0%" }}
                            whileInView={{ height: `${height}%` }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.1,

                              delay: index * 0.08,

                              ease: "easeOut",
                            }}
                            className="flex-1 rounded-t-sm bg-amber-200 dark:bg-amber-500/30 transition-colors duration-500 group-hover:bg-amber-400"
                          />
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Featured details */}

          <div className="grid gap-6 pt-7 sm:pt-9 lg:grid-cols-[1fr_auto] lg:items-start">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
                {featured.category}
              </p>

              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.055em] sm:text-4xl">
                {featured.title}

                <span className="text-amber-700 dark:text-amber-400">.</span>
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400 sm:text-base sm:leading-8">
                {featured.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {featured.technologies.map((technology) => (
                  <motion.span
                    key={technology}
                    whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.25 }}
                    className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-3 py-2 text-[11px] font-medium text-zinc-600 dark:text-zinc-400 transition-colors hover:border-amber-200 dark:hover:border-amber-500/30 hover:text-amber-700 dark:hover:text-amber-400"
                  >
                    {technology}
                  </motion.span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 lg:pt-8">
              {featured.liveUrl && (
                <Link
                  href={featured.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-zinc-900 dark:bg-amber-600 px-5 py-3 text-xs font-semibold text-white transition-colors hover:bg-amber-700"
                >
                  Live demo <FiExternalLink size={15} />
                </Link>
              )}

              {featured.githubUrl && (
                <Link
                  href={featured.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View featured project on GitHub"
                  className="flex size-11 items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 transition-colors hover:border-amber-300 dark:hover:border-amber-500/30 hover:text-amber-700 dark:hover:text-amber-400"
                >
                  <FiGithub size={18} />
                </Link>
              )}
            </div>
          </div>
        </motion.article>

        {/* Secondary projects */}

        <motion.div
          variants={staggerAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 grid gap-12 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-10 sm:mt-24 sm:gap-10 sm:pt-12 lg:grid-cols-2 lg:gap-12"
        >
          {secondaryProjects.map((project) => (
            <motion.article
              key={project.number}
              variants={revealAnimation}
              className="group min-w-0"
            >
              {/* Project preview */}

              <div
                className={`relative flex aspect-[1.35/1] items-center justify-center overflow-hidden rounded-[1.5rem] border border-zinc-200/80 dark:border-zinc-800/80 bg-linear-to-br ${project.gradient} p-6 sm:rounded-[1.75rem] sm:p-8`}
              >
                <motion.div
                  aria-hidden="true"
                  className="absolute -right-10 -top-10 size-48 rounded-full bg-amber-200/30 dark:bg-amber-500/10 blur-[60px]"
                  whileHover={shouldReduceMotion ? undefined : { scale: 1.3 }}
                  transition={{ duration: 1 }}
                />

                <div className="absolute left-5 top-5 flex items-center gap-3 sm:left-7 sm:top-7">
                  <span className="text-xs font-medium text-zinc-400 dark:text-zinc-500">
                    {project.number}
                  </span>

                  <span className="h-px w-7 bg-zinc-300 dark:bg-zinc-600" />

                  <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-400 dark:text-zinc-500">
                    {project.category}
                  </span>
                </div>

                {project.number === "02" ? (
                  <motion.div
                    whileHover={shouldReduceMotion ? undefined : { y: -5 }}
                    transition={{ duration: 0.6 }}
                    className="relative w-full max-w-sm rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/90 dark:bg-zinc-900/90 p-5 shadow-[0_20px_60px_-30px_rgba(39,39,42,0.2)] sm:p-7"
                  >
                    <div className="flex items-center gap-2">
                      <span className="size-2 rounded-full bg-amber-500" />

                      <span className="text-[10px] font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                        REST API
                      </span>
                    </div>

                    <p className="mt-5 font-mono text-sm font-medium text-zinc-800 dark:text-zinc-200">
                      GET /api/v1/projects
                    </p>

                    <div className="mt-4 space-y-2">
                      <div className="h-2 w-full rounded bg-zinc-100 dark:bg-zinc-800" />

                      <div className="h-2 w-4/5 rounded bg-zinc-100 dark:bg-zinc-800" />

                      <div className="h-2 w-3/5 rounded bg-amber-100 dark:bg-amber-500/15" />
                    </div>

                    <div className="mt-5 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4">
                      <span className="text-[10px] text-zinc-400 dark:text-zinc-500">
                        Structured architecture
                      </span>

                      <span className="rounded-md bg-emerald-50 dark:bg-emerald-500/10 px-2 py-1 text-[9px] font-semibold text-emerald-700 dark:text-emerald-400">
                        JSON
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="relative flex w-full max-w-sm items-center justify-center">
                    <motion.div
                      animate={shouldReduceMotion ? undefined : { rotate: 360 }}
                      transition={{
                        duration: 50,

                        repeat: Infinity,

                        ease: "linear",
                      }}
                      className="absolute size-48 rounded-full border border-amber-200/80 dark:border-amber-500/30 sm:size-60"
                    />

                    <motion.div
                      animate={
                        shouldReduceMotion ? undefined : { rotate: -348 }
                      }
                      transition={{
                        duration: 60,

                        repeat: Infinity,

                        ease: "linear",
                      }}
                      className="absolute size-36 rotate-12 rounded-[2rem] border border-dashed border-amber-300/80 dark:border-amber-500/30 sm:size-44"
                    />

                    <motion.div
                      whileHover={
                        shouldReduceMotion
                          ? undefined
                          : { rotate: 0, scale: 1.06 }
                      }
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="relative flex size-28 -rotate-6 items-center justify-center rounded-[1.75rem] border border-white/80 dark:border-white/10 bg-linear-to-br from-amber-500 via-amber-600 to-orange-700 text-white shadow-[0_25px_60px_-20px_rgba(109,40,217,0.45)] sm:size-36"
                    >
                      <span className="text-3xl font-semibold tracking-[-0.08em] sm:text-4xl">
                        {project.initials}

                        <span className="text-amber-200">.</span>
                      </span>
                    </motion.div>
                  </div>
                )}

                <span className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full border border-white/80 dark:border-white/10 bg-white/80 dark:bg-zinc-900/80 text-zinc-700 dark:text-zinc-300 shadow-sm transition-all duration-300 group-hover:border-amber-300 dark:group-hover:border-amber-500/30 group-hover:bg-amber-600 group-hover:text-white sm:bottom-7 sm:right-7">
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </div>

              {/* Project details */}

              <div className="pt-6">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-amber-700 dark:text-amber-400">
                  {project.category}
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tighter transition-colors group-hover:text-amber-700 dark:group-hover:text-amber-400 sm:text-3xl">
                  {project.title}

                  <span className="text-amber-700 dark:text-amber-400">.</span>
                </h3>

                <p className="mt-3 max-w-xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <motion.span
                      key={technology}
                      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                      transition={{ duration: 0.25 }}
                      className="rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 px-3 py-1.5 text-[10px] font-medium text-zinc-500 dark:text-zinc-400 sm:text-[11px]"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>

                {(project.liveUrl || project.githubUrl) && (
                  <div className="mt-5 flex flex-wrap gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors hover:text-amber-700 dark:hover:text-amber-400"
                      >
                        Live demo <FiExternalLink size={14} />
                      </Link>
                    )}

                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors hover:text-amber-700 dark:hover:text-amber-400"
                      >
                        Source code <FiGithub size={14} />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Bottom CTA */}

        <motion.div
          variants={revealAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 flex flex-col gap-5 border-t border-zinc-200/80 dark:border-zinc-800/80 pt-8 sm:mt-24 sm:flex-row sm:items-center sm:justify-between lg:mt-28"
        ></motion.div>
      </div>
    </section>
  );
};

export default Projects;