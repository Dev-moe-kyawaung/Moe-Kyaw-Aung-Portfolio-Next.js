import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata = buildMetadata({
  title: "Contact",
  description:
    "Get in touch for Android development, AI/ML work, collaborations, or product engineering opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Contact
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Let’s build something polished and technically strong.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          This page is designed for recruiter outreach, project discussions, and
          collaboration opportunities across Android, AI/ML, and web.
        </p>
      </section>

      <section className="mt-14 grid gap-8 md:grid-cols-[1.05fr_0.95fr]">
        <form className="glass-card space-y-4 p-8">
          <div>
            <label className="mb-2 block text-sm text-slate-300" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm text-slate-300" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell me about the role or project..."
              className="w-full rounded-2xl border border-white/10 bg-slate-950 px-4 py-3 text-white outline-none placeholder:text-slate-500 focus:border-cyan-400"
            />
          </div>

          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>

        <div className="space-y-6">
          <div className="glass-card p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
              Availability
            </p>
            <h2 className="mt-3 text-3xl font-bold">Open for select work</h2>
            <p className="mt-6 text-sm leading-7 text-slate-300">
              Use this space to mention your preferred roles, project type, and
              time zone so recruiters know how to reach you.
            </p>
          </div>

          <div className="glass-card p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
              Quick links
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/projects" className="btn-secondary">
                Projects
              </Link>
              <Link href="/credentials" className="btn-secondary">
                Credentials
              </Link>
              <Link
                href="https://github.com/Dev-moe-kyawaung"
                target="_blank"
                className="btn-secondary"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
