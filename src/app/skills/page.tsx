import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata = buildMetadata({
  title: "Skills",
  description:
    "Technical skills across Android, web, AI/ML, backend, databases, and DevOps, organized for recruiter clarity.",
  path: "/skills",
});

const skillGroups = [
  {
    title: "Android",
    items: ["Kotlin", "Jetpack Compose", "MVVM", "Coroutines", "Room", "Firebase"],
  },
  {
    title: "Web",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "SEO", "App Router"],
  },
  {
    title: "AI/ML",
    items: ["Python", "Pandas", "NLP", "Embeddings", "Automation", "Data Pipelines"],
  },
  {
    title: "Engineering",
    items: ["GitHub", "CI/CD", "Testing", "Architecture", "Performance", "Debugging"],
  },
];

export default function SkillsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Skills
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          A focused skill set across mobile, web, AI/ML, and product delivery.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          This page is structured to help recruiters quickly understand where I
          go deep, where I build broadly, and how that translates into shipping
          production-quality work.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold">{group.title}</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-[1fr_0.9fr]">
        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Evidence
          </p>
          <h2 className="mt-3 text-3xl font-bold">How I present skills</h2>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            Skills are most useful when they are attached to real delivery. On
            this site, each skill group should connect to projects, case studies,
            or public work so the list feels credible and concrete.
          </p>
        </div>

        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Next step
          </p>
          <h2 className="mt-3 text-3xl font-bold">Make it easy to validate</h2>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            Link certifications, GitHub repos, and selected write-ups so
            recruiters can verify the depth behind each skill area without
            friction.
          </p>
          <div className="mt-8">
            <Link href="/credentials" className="btn-primary">
              View Credentials
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
