
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  FiArrowDownRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMove,
} from "react-icons/fi";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Yashkashyap12",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/yash-kashyap-2038b6241/",
    icon: FiLinkedin,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.2,
      ease: "easeOut" as const,
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = shouldReduceMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : fadeUp;

  const stagger = shouldReduceMotion
    ? { hidden: {}, visible: {} }
    : staggerContainer;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden bg-[#faf9f6] px-6 py-24 text-[#171717] sm:px-10 sm:py-32 lg:px-12 lg:py-32"
    >
      {/* Ambient gradients */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <motion.div
          className="absolute -right-40 top-20 h-125 w-125 rounded-full bg-violet-200/40 blur-[140px]"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -25, 0],
                  y: [0, 25, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-40 -left-32 h-100 w-100 rounded-full bg-indigo-100/60 blur-[120px]"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 25, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Dotted texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.17]"
        style={{
          backgroundImage:
            "radial-gradient(#777 0.7px, transparent 0.7px)",
          backgroundSize: "17px 17px",
          maskImage:
            "linear-gradient(to bottom, black, transparent 85%)",
        }}
      />

      <div className="mx-auto max-w-7xl">
        {/* Eyebrow */}
        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              {!shouldReduceMotion && (
                <motion.span
                  animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute inline-flex h-full w-full rounded-full bg-violet-500/50"
                />
              )}

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-violet-600" />
            </span>

            <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-neutral-500">
              Contact / 04
            </span>
          </div>

          <span className="hidden text-xs text-neutral-400 sm:block">
            HAVE AN IDEA? LET&apos;S TALK.
          </span>
        </motion.div>

        {/* Hero heading */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <motion.p
            variants={reveal}
            className="mb-6 text-sm font-medium text-neutral-500"
          >
            The next great thing starts here.
          </motion.p>

          <motion.h2
            variants={reveal}
            id="contact-heading"
            className="max-w-6xl text-[clamp(3.5rem,10vw,9rem)] font-semibold leading-[0.88] tracking-[-0.075em]"
          >
            Let&apos;s create
            <br />

            <span className="relative inline-block bg-linear-to-r from-violet-700 via-violet-600 to-indigo-500 bg-clip-text pb-3 text-transparent">
              something
            </span>

            <br />

            <span className="flex items-center gap-3 sm:gap-7">
              <span>remarkable</span>

              <motion.span
                animate={
                  shouldReduceMotion
                    ? undefined
                    : { x: [0, 6, 0], y: [0, 6, 0] }
                }
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="mt-3 inline-flex shrink-0 text-violet-600 sm:mt-5"
              >
                <FiArrowDownRight className="h-[0.5em] w-[0.5em]" />
              </motion.span>
            </span>
          </motion.h2>

          <motion.div
            variants={reveal}
            className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between"
          >
            <p className="max-w-lg text-base leading-8 text-neutral-600 sm:text-lg">
              Have a project, an idea, or an opportunity in mind?
              I&apos;d love to hear about it. Let&apos;s turn your
              vision into something real.
            </p>

            <span className="text-xs uppercase tracking-[0.2em] text-neutral-400">
              Available for select projects
            </span>
          </motion.div>
        </motion.div>

        {/* Contact area */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-20 grid gap-6 lg:mt-28 lg:grid-cols-[0.85fr_1.15fr]"
        >
          {/* Left contact card */}
          <motion.div
            variants={reveal}
            className="group relative flex min-h-97.5 flex-col justify-between overflow-hidden rounded-[2rem] bg-[#191720] p-7 text-white sm:p-10"
          >
            <motion.div
              aria-hidden="true"
              animate={
                shouldReduceMotion
                  ? undefined
                  : {
                      scale: [1, 1.15, 1],
                      opacity: [0.3, 0.5, 0.3],
                    }
              }
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-violet-600/35 blur-[80px]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-0 right-0 h-48 w-48 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#c4b5fd 1px, transparent 1px)",
                backgroundSize: "14px 14px",
              }}
            />

            <div className="relative">
              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { rotate: 8, scale: 1.05 }
                }
                transition={{ duration: 0.5 }}
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/6"
              >
                <FiMove className="text-xl text-violet-300" />
              </motion.div>

              <p className="mt-8 text-xs font-medium uppercase tracking-[0.24em] text-white/45">
                Direct connection
              </p>

              <h3 className="mt-4 max-w-sm text-3xl font-medium leading-tight tracking-[-0.045em] sm:text-4xl">
                Let&apos;s skip the formalities.
                <span className="text-violet-300"> Just talk.</span>
              </h3>

              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Tell me what you&apos;re working on. I&apos;m always
                interested in good ideas and meaningful collaborations.
              </p>
            </div>

            <div className="relative mt-12">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/40">
                Write me an email
              </p>

              <a
                href="mailto:gyashkashyap123456@gmail.com"
                className="group/email inline-flex max-w-full items-center gap-3 text-sm font-medium transition-colors hover:text-violet-300 sm:text-base"
              >
                <span className="break-all">
                  gyashkashyap123456@gmail.com
                </span>

                <FiArrowUpRight className="h-5 w-5 shrink-0 transition-transform duration-300 group-hover/email:-translate-y-1 group-hover/email:translate-x-1" />
              </a>

              <div className="mt-8 flex gap-3">
                {socials.map(({ label, href, icon: Icon }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    initial={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 0, y: 12 }
                    }
                    whileInView={
                      shouldReduceMotion
                        ? undefined
                        : { opacity: 1, y: 0 }
                    }
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.7,
                      delay: index * 0.2,
                    }}
                    whileHover={
                      shouldReduceMotion ? undefined : { y: -4 }
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white/70 transition-all duration-300 hover:border-violet-400 hover:bg-violet-500/15 hover:text-white"
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right form card */}
          <motion.div
            variants={reveal}
            className="rounded-[2rem] border border-neutral-200/80 bg-white/65 p-7 shadow-[0_20px_80px_-45px_rgba(50,35,90,0.22)] backdrop-blur-sm sm:p-10 lg:p-12"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-700">
                  Start a conversation
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.045em] sm:text-3xl">
                  Tell me about it.
                </h3>

                <p className="mt-2 text-sm leading-6 text-neutral-500">
                  A few details are all I need to get started.
                </p>
              </div>

              <motion.div
                whileHover={
                  shouldReduceMotion ? undefined : { rotate: 10, scale: 1.05 }
                }
                transition={{ duration: 0.5 }}
                className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-700 sm:flex"
              >
                <FiMail className="text-xl" />
              </motion.div>
            </div>

            {/* UI only: connect this form to your ContactsAPI to submit data. */}
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-10 space-y-7"
            >
              <div className="grid gap-7 sm:grid-cols-2">
                <div className="group">
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 transition-colors group-focus-within:text-violet-700"
                  >
                    Your name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="John Doe"
                    required
                    className="w-full border-b border-neutral-200 bg-transparent px-0 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-violet-600"
                  />
                </div>

                <div className="group">
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 transition-colors group-focus-within:text-violet-700"
                  >
                    Email address
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="john@example.com"
                    required
                    className="w-full border-b border-neutral-200 bg-transparent px-0 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-violet-600"
                  />
                </div>
              </div>

              <div className="group">
                <label
                  htmlFor="contact-subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 transition-colors group-focus-within:text-violet-700"
                >
                  What&apos;s this about?
                </label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Project, opportunity, collaboration..."
                  required
                  className="w-full border-b border-neutral-200 bg-transparent px-0 py-3 text-sm text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-violet-600"
                />
              </div>

              <div className="group">
                <label
                  htmlFor="contact-message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-neutral-500 transition-colors group-focus-within:text-violet-700"
                >
                  Your message
                </label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows={3}
                  placeholder="A little context about your idea..."
                  required
                  className="w-full resize-y border-b border-neutral-200 bg-transparent px-0 py-3 text-sm leading-7 text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-violet-600"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={
                  shouldReduceMotion ? undefined : { y: -2 }
                }
                whileTap={
                  shouldReduceMotion ? undefined : { scale: 0.98 }
                }
                transition={{ duration: 0.25 }}
                className="group flex w-full items-center justify-between rounded-full bg-[#191720] px-6 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:bg-violet-700 sm:w-auto sm:min-w-56"
              >
                <span>Send your message</span>

                <span className="ml-5 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:rotate-45 group-hover:bg-white/20">
                  <FiArrowUpRight className="text-lg" />
                </span>
              </motion.button>

              <p className="text-xs leading-5 text-neutral-400">
                Your details will only be used to respond to your enquiry.
              </p>
            </form>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
