import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Open Source Contributions",
  description:
    "Open-source projects, GitHub contributions, public repos, maintainership, and engineering impact.",
};

const contributionSignals = [
  {
    label: "Public Repositories",
    value: "20+",
    note: "Clean, documented, recruiter-friendly repos.",
  },
  {
    label: "Merged PRs",
    value: "15+",
    note: "Feature, bugfix, and maintenance contributions.",
  },
  {
    label: "Reusable Tools",
    value: "5+",
    note: "Libraries, utilities, and portfolio components.",
  },
];

const contributions = [
  {
    repo: "Android Utility Kit",
    type: "Library / Toolkit",
    summary:
      "A reusable Android utility package for common UI and networking tasks.",
    role: "Maintainer and primary contributor",
  },
  {
    repo: "Compose UI Patterns",
    type: "Design System / Components",
    summary:
      "A collection of Compose patterns, layouts, and implementation examples.",
    role: "Contributor and documenter",
  },
  {
    repo: "Portfolio Architecture Starter",
    type: "Template / Boilerplate",
    summary:
      "A scalable starter for premium developer portfolios using modern web tools.",
    role: "Author and maintainer",
  },
];

export default function OpenSourcePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Open Source
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Public contributions that show engineering quality, consistency, and
          initiative.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          I treat GitHub like a professional portfolio: useful repos, clear
          READMEs, maintainable code, and contributions that reflect real-world
          engineering habits.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="https://github.com/Dev-moe-kyawaung"
            target="_blank"
            className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            View GitHub Profile
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Discuss Collaboration
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {contributionSignals.map((item) => (
          <article
            key={item.label}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-slate-400">{item.label}</p>
            <h2 className="mt-3 text-4xl font-bold text-cyan-300">
              {item.value}
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.note}</p>
          </article>
        ))}
      </section>

      <section className="mt-16">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
              Selected Work
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Repos and contributions worth reviewing
            </h2>
          </div>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {contributions.map((item) => (
            <article
              key={item.repo}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
                {item.type}
              </p>
              <h3 className="mt-3 text-xl font-semibold">{item.repo}</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.summary}
              </p>
              <p className="mt-4 text-sm text-cyan-200">{item.role}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            What recruiters see
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Public proof of engineering habits
          </h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <li>Clean repository structure and readable commit history.</li>
            <li>Documentation that explains setup, usage, and value fast.</li>
            <li>Contributions across mobile, web, and reusable tooling.</li>
            <li>Evidence that I can ship, maintain, and improve over time.</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Next signal
          </p>
          <h2 className="mt-3 text-3xl font-bold">
            Make GitHub part of the hiring story
          </h2>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            This page works best when paired with pinned repos, clear READMEs,
            and project links that show your strongest public work. It should
            feel like an extension of your portfolio rather than a separate
            destination.
          </p>
          <div className="mt-8">
            <Link
              href="/projects"
              className="rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Explore Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
