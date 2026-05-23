import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata = buildMetadata({
  title: "About Moe Kyaw Aung",
  description:
    "Learn more about Moe Kyaw Aung, a Senior Android Developer focused on clean architecture, product quality, and scalable delivery.",
  path: "/about",
});

const timeline = [
  {
    year: "2024–2026",
    title: "Senior Android Developer",
    company: "Independent / Product Work",
    description:
      "Built production-ready Android and cross-platform experiences with strong UX, maintainable architecture, and measurable delivery.",
  },
  {
    year: "2022–2024",
    title: "Full-Stack Portfolio Builder",
    company: "Personal Projects",
    description:
      "Expanded into web, AI/ML, SEO, and design systems to create polished, recruiter-friendly portfolio experiences.",
  },
  {
    year: "Earlier",
    title: "Android Foundations",
    company: "Mobile Engineering",
    description:
      "Focused on Kotlin, UI architecture, app performance, and practical implementation across real-world app workflows.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          About
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Senior Android Developer with a product-first mindset.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          I build polished digital experiences that balance engineering quality,
          user experience, and maintainability. My work spans Android, full-
          stack portfolio systems, and applied AI/ML showcases.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link href="/projects" className="btn-primary">
            View Projects
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Me
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        {[
          "Clean architecture and readable code.",
          "Strong UI/UX polish and premium presentation.",
          "Technical depth with recruiter-friendly clarity.",
        ].map((item) => (
          <div key={item} className="glass-card p-6">
            <p className="text-sm leading-7 text-slate-300">{item}</p>
          </div>
        ))}
      </section>

      <section className="mt-16">
        <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
          Experience
        </p>
        <h2 className="mt-3 text-3xl font-bold">Career timeline</h2>

        <div className="mt-8 space-y-4">
          {timeline.map((item) => (
            <article
              key={item.year}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <span className="text-sm text-cyan-300">{item.year}</span>
              </div>
              <p className="mt-2 text-sm text-slate-400">{item.company}</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
