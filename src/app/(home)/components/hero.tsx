"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiLayers,
} from "react-icons/fi";
import { FaCode } from "react-icons/fa";

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Express",
  "MySQL",
];

const Hero = () => {
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

  const cardEntrance = {
    hidden: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: shouldReduceMotion ? 0 : 35,
      scale: shouldReduceMotion ? 1 : 0.97,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: shouldReduceMotion ? 0 : 0.8,
        delay: shouldReduceMotion ? 0 : 0.25,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[#faf9f6] text-[#171717]"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -right-40 -top-20 h-125 w-125 rounded-full bg-amber-100/30 blur-[110px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, -20, 0], y: [0, 25, 0] }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          aria-hidden="true"
          className="absolute -left-40 bottom-0 h-87.5 w-87.5 rounded-full bg-orange-100/40 blur-[100px]"
          animate={
            shouldReduceMotion
              ? undefined
              : { x: [0, 20, 0], y: [0, -15, 0] }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(#27272a 0.7px, transparent 0.7px)",
            backgroundSize: "18px 18px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-32 sm:px-10 lg:px-12 lg:pt-12">
        <div className="grid flex-1 items-center gap-14 pb-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* Left content */}
          <motion.div
            className="relative z-10"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {/* Availability */}
            <motion.div
              variants={fadeUp}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/80 px-4 py-2.5 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                {!shouldReduceMotion && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                )}
                <span className="relative h-2 w-2 rounded-full bg-emerald-500" />
              </span>

              <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-zinc-600">
                Open to opportunities
              </span>
            </motion.div>

            {/* Introduction */}
            <motion.p
              variants={fadeUp}
              className="mb-5 text-sm font-medium tracking-wide text-zinc-500"
            >
              Hello, I&apos;m
            </motion.p>

            {/* Name and profession */}
            <motion.h1
              variants={fadeUp}
              className="max-w-4xl text-[clamp(3.2rem,6.5vw,6rem)] font-semibold leading-[0.92] tracking-[-0.065em]"
            >
              <span className="block whitespace-nowrap text-zinc-950">
                YASH
              </span>

              <span className="mt-2 block whitespace-nowrap text-zinc-500">
                KASHYAP<span className="text-amber-600">.</span>
              </span>

              <span className="mt-5 block text-[0.32em] font-semibold leading-tight tracking-tight text-amber-700 sm:text-[0.35em]">
                Full Stack Developer
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="mt-8 max-w-xl text-base leading-8 text-zinc-600 sm:text-lg"
            >
              I build scalable applications, thoughtful user experiences,
              and reliable digital products that solve real-world problems.
              Turning complex ideas into simple, effective solutions.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/projects"
                className="group inline-flex items-center gap-7 rounded-full hover:bg-amber-500 px-6 py-4 text-sm font-semibold text-white transition-all duration-300 bg-amber-700 hover:shadow-lg hover:shadow-amber-900/10"
              >
                Explore my work

                <FiArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/70 px-6 py-4 text-sm font-semibold text-zinc-800 transition-all duration-300 hover:border-amber-500 hover:bg-amber-50"
              >
                Let&apos;s connect

                <FiArrowDownRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                />
              </Link>
            </motion.div>

            {/* Social links */}
            <motion.div
              variants={fadeUp}
              className="mt-12 flex items-center gap-5"
            >
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                Find me on
              </span>

              <span className="h-px w-8 bg-zinc-300" />

              <Link
                href="https://github.com/Yashkashyap12"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-zinc-500 transition-colors hover:text-amber-700"
              >
                <FiGithub size={20} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/yash-kashyap-2038b6241/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-zinc-500 transition-colors hover:text-amber-700"
              >
                <FiLinkedin size={20} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right profile visual */}
          <motion.div
            className="relative mx-auto w-full max-w-115 py-10 lg:ml-auto"
            variants={cardEntrance}
            initial="hidden"
            animate="visible"
          >
            {/* Decorative frames */}
            <motion.div
              aria-hidden="true"
              className="absolute inset-3 rotate-3 rounded-[2rem] border border-amber-200/80"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { rotate: [3, 4.5, 3] }
              }
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              aria-hidden="true"
              className="absolute inset-3 -rotate-3 rounded-[2rem] border border-zinc-200/80"
              animate={
                shouldReduceMotion
                  ? undefined
                  : { rotate: [-3, -4.5, -3] }
              }
              transition={{
                duration: 9,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Profile card */}
            <motion.div
              whileHover={
                shouldReduceMotion
                  ? undefined
                  : { y: -5, transition: { duration: 0.3 } }
              }
              className="relative overflow-hidden rounded-[1.75rem] border border-zinc-200/80 bg-white shadow-[0_25px_80px_-35px_rgba(39,39,42,0.18)]"
            >
              {/* Card header */}
              <div className="flex items-center justify-between border-b border-zinc-100 px-6 py-5">
                <div>
                  <p className="text-xs font-semibold text-zinc-900">
                    Developer profile
                  </p>

                  <p className="mt-1 text-[11px] text-zinc-400">
                    Building with intention
                  </p>
                </div>

                <motion.div
                  whileHover={
                    shouldReduceMotion
                      ? undefined
                      : { rotate: 12, scale: 1.05 }
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 text-amber-700"
                >
                  <FiLayers size={21} />
                </motion.div>
              </div>

              {/* Abstract illustration */}
              <div className="relative flex h-70 items-center justify-center overflow-hidden bg-linear-to-br from-[#fffbeb] via-white to-[#fff7ed] sm:h-80">
                <motion.div
                  aria-hidden="true"
                  className="absolute h-61.25 w-61.25 rounded-full border border-amber-200/80"
                  animate={
                    shouldReduceMotion ? undefined : { rotate: 360 }
                  }
                  transition={{
                    duration: 40,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute h-50 w-50 rounded-full border border-dashed border-amber-300/80"
                  animate={
                    shouldReduceMotion ? undefined : { rotate: -360 }
                  }
                  transition={{
                    duration: 55,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                <motion.div
                  className="absolute h-40 w-40 -rotate-12 rounded-[40px] border border-white bg-linear-to-br from-amber-500 via-amber-600 to-orange-700 shadow-[0_25px_60px_-20px_rgba(217,119,6,0.45)]"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          y: [0, -10, 0],
                          rotate: [-12, -8, -12],
                        }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute flex h-28.75 w-28.75 rotate-[8deg] items-center justify-center rounded-[30px] border border-white/30 bg-white/10 text-white shadow-inner backdrop-blur-sm"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : { y: [0, 5, 0], rotate: [8, 11, 8] }
                  }
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <span className="text-4xl font-semibold tracking-[-0.08em]">
                    YK<span className="text-amber-200"> .</span>
                  </span>
                </motion.div>

                {/* Focus badge */}
                <motion.div
                  initial={{
                    opacity: shouldReduceMotion ? 1 : 0,
                    x: shouldReduceMotion ? 0 : -12,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: shouldReduceMotion ? 0 : 0.8,
                  }}
                  className="absolute left-6 top-6 rounded-xl border border-zinc-200/80 bg-white/90 px-3 py-2.5 shadow-sm"
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    Focus
                  </p>

                  <p className="mt-1 text-xs font-semibold text-zinc-800">
                    Full-stack development
                  </p>
                </motion.div>

                {/* Philosophy badge */}
                <motion.div
                  initial={{
                    opacity: shouldReduceMotion ? 1 : 0,
                    x: shouldReduceMotion ? 0 : 12,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.6,
                    delay: shouldReduceMotion ? 0 : 1,
                  }}
                  className="absolute bottom-6 right-6 rounded-xl border border-zinc-200/80 bg-white/95 px-3 py-2.5 shadow-sm"
                >
                  <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-zinc-400">
                    Philosophy
                  </p>

                  <p className="mt-1 text-xs font-semibold text-amber-700">
                    Build better.
                  </p>
                </motion.div>
              </div>

              {/* Card footer */}
              <div className="flex items-center justify-between gap-4 border-t border-zinc-100 px-6 py-5">
                <div>
                  <p className="text-sm font-semibold text-zinc-900">
                    Yash Kashyap
                  </p>

                  <p className="mt-1 text-xs text-zinc-500">
                    Developer &amp; problem solver
                  </p>
                </div>

                <span className="rounded-full bg-amber-100 px-3 py-3 text-[10px] font-semibold text-emerald-700">
                  <FaCode className="size-4"/>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Technology strip */}
        <div className="border-t border-zinc-200 py-7">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
              Technologies I use
            </p>

            <motion.div
              className="flex flex-wrap items-center gap-x-7 gap-y-4 lg:gap-x-9"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {technologies.map((technology) => (
                <motion.span
                  key={technology}
                  variants={fadeUp}
                  className="text-xs font-semibold tracking-wide text-zinc-500 transition-colors hover:text-amber-700 sm:text-sm"
                >
                  {technology}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;