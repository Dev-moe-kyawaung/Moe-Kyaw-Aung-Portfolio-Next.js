import Link from "next/link";

const footerLinks = [
  { href: "/android", label: "Android" },
  { href: "/ai-ml", label: "AI/ML" },
  { href: "/open-source", label: "Open Source" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-10 md:grid-cols-2 md:items-center">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-white">
            MOE KYAW AUNG
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-400">
            Senior Android Developer building polished mobile products,
            applied AI/ML projects, and open-source tools with a SaaS-level
            presentation.
          </p>
        </div>

        <div className="flex flex-wrap gap-3 md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-white/10 px-4 py-2 text-sm text-slate-300 transition hover:border-cyan-400/40 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-4 text-xs text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Moe Kyaw Aung. All rights reserved.</p>
          <p>Built for recruiter discovery, fast scanning, and conversion.</p>
        </div>
      </div>
    </footer>
  );
}
