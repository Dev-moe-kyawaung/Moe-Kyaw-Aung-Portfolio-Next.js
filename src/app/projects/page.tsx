import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata = buildMetadata({
  title: "Projects",
  description:
    "Selected Android, AI/ML, and web projects with case studies, outcomes, and technical details.",
  path: "/projects",
});

const projects = [
  {
    title: "Android Commerce App",
    category: "Android",
    summary:
      "A mobile commerce experience with clean architecture, smooth checkout flows, and maintainable UI modules.",
    stack: "Kotlin, Jetpack Compose, Coroutines, Firebase",
  },
  {
    title: "AI Resume Assistant",
    category: "AI/ML",
    summary:
      "An intelligent workflow for extracting structure, summarizing content, and reducing manual review effort.",
    stack: "Python, NLP, embeddings, automation",
  },
  {
    title: "Premium Portfolio System",
    category: "Web",
    summary:
      "A modular Next.js portfolio built to convert recruiters with strong storytelling and SEO.",
    stack: "Next.js, TypeScript, Tailwind CSS",
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Projects
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Selected work across Android, AI/ML, and web.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          These projects are presented to show engineering depth, product
          thinking, and the ability to deliver polished, useful experiences.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
              {project.category}
            </p>
            <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {project.summary}
            </p>
            <p className="mt-4 text-sm text-slate-400">{project.stack}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            What matters
          </p>
          <h2 className="mt-3 text-3xl font-bold">Case-study signals</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <li>Problem statement and user context.</li>
            <li>Technical decisions and architecture choices.</li>
            <li>Outcome, impact, and what was learned.</li>
            <li>Links to code, demo, or documentation.</li>
          </ul>
        </div>

        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Recruiter path
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Fast scanning, deeper review
          </h2>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            This page is designed so recruiters can skim quickly, then drill into
            the strongest work. Each project card should eventually link to a
            detailed case study or repository.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-secondary">
              Discuss a Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
