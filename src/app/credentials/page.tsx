import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata = buildMetadata({
  title: "Credentials",
  description:
    "Resume, certifications, and verification links that show professional growth and validated expertise.",
  path: "/credentials",
});

const credentials = [
  {
    title: "Resume",
    value: "PDF Download",
    note: "ATS-friendly and ready to share.",
  },
  {
    title: "Certifications",
    value: "Curated",
    note: "Selected badges that support role relevance.",
  },
  {
    title: "Verification",
    value: "Public Links",
    note: "Easy to validate from recruiter view.",
  },
];

export default function CredentialsPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Credentials
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Validated proof of experience, learning, and professionalism.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          This page gives recruiters a fast way to confirm your background
          through resume access, certifications, and public verification links.
        </p>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {credentials.map((item) => (
          <article
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-sm text-slate-400">{item.title}</p>
            <h2 className="mt-3 text-2xl font-bold text-cyan-300">
              {item.value}
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-300">{item.note}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Resume
          </p>
          <h2 className="mt-3 text-3xl font-bold">One click to review</h2>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            Your resume should be easy to find, easy to download, and aligned
            with the story shown across the rest of the portfolio.
          </p>
          <div className="mt-8">
            <Link href="/resume/Moe-Kyaw-Aung-Resume.pdf" className="btn-primary">
              Download Resume
            </Link>
          </div>
        </div>

        <div className="glass-card p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Verification
          </p>
          <h2 className="mt-3 text-3xl font-bold">Make trust easy</h2>
          <p className="mt-6 text-sm leading-7 text-slate-300">
            Add public credential links, GitHub profile links, and any relevant
            certification pages so recruiters can verify your claims quickly.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="https://github.com/Dev-moe-kyawaung"
              target="_blank"
              className="btn-secondary"
            >
              GitHub
            </Link>
            <Link
              href="https://gravatar.com/moekyawaung2026"
              target="_blank"
              className="btn-secondary"
            >
              Gravatar
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
