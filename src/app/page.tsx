import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 md:flex-row md:items-center md:py-28">
        <div className="flex-1">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-300">
            Senior Android Developer
          </p>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight md:text-6xl">
            Building premium Android, AI/ML, and open-source experiences.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            I design production-grade apps with Kotlin, Jetpack Compose, clean
            architecture, and a strong product mindset.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl">
            <Image
              src="/images/profile.jpg"
              alt="Moe Kyaw Aung"
              width={900}
              height={900}
              className="h-auto w-full rounded-2xl object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-6 pb-20 md:grid-cols-3">
        {[
          {
            title: "Android Engineering",
            desc: "Kotlin, Jetpack Compose, coroutines, MVVM, Firebase.",
            href: "/android",
          },
          {
            title: "AI/ML Projects",
            desc: "Applied machine learning, automation, and data-driven apps.",
            href: "/ai-ml",
          },
          {
            title: "Open Source",
            desc: "Public GitHub work, contributions, and reusable libraries.",
            href: "/open-source",
          },
        ].map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400/40 hover:bg-white/8"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">{item.desc}</p>
          </Link>
        ))}
      </section>
    </div>
  );
}
