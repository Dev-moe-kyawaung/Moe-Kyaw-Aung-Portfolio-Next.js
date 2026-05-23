import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata = buildMetadata({
  title: "Writing",
  description:
    "Technical writing, engineering notes, architecture insights, and practical development articles.",
  path: "/writing",
});

const posts = [
  {
    title: "Building a Premium Android Portfolio",
    tag: "Android",
    summary:
      "A walkthrough of translating Android engineering work into a recruiter-friendly portfolio narrative.",
  },
  {
    title: "Why SaaS-Style Design Works for Developers",
    tag: "Design",
    summary:
      "How layout, structure, and visual hierarchy can improve portfolio conversions and credibility.",
  },
  {
    title: "Using Metadata to Improve Portfolio SEO",
    tag: "SEO",
    summary:
      "A practical look at route-level metadata, share cards, and search-friendly page structure.",
  },
];

export default function WritingPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Writing
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Short technical writing that supports the rest of the portfolio.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          This section is for practical notes, engineering thinking, and short
          articles that make your process visible to recruiters and hiring
          managers.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
              {post.tag}
            </p>
            <h2 className="mt-3 text-xl font-semibold">{post.title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              {post.summary}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Focus
          </p>
          <h2 className="mt-3 text-3xl font-bold">What to write about</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <li>Engineering decisions and trade-offs.</li>
            <li>Performance improvements and architecture lessons.</li>
            <li>Android, AI/ML, and portfolio-building techniques.</li>
            <li>Short, useful insights instead of long generic posts.</li>
          </ul>
        </div>

        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            CTA
          </p>
          <h2 className="mt-3 text-3xl font-bold">Turn ideas into proof</h2>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            Writing helps explain the thinking behind your work, which adds
            depth to your portfolio and gives recruiters another signal that you
            can communicate clearly.
          </p>
          <div className="mt-8">
            <Link href="/projects" className="btn-secondary">
              See Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
