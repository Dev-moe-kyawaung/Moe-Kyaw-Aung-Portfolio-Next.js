import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Android Development",
  description:
    "Android case studies, architecture, Kotlin expertise, Jetpack Compose, and product delivery.",
};

const caseStudies = [
  {
    title: "Finance App Revamp",
    result: "Improved app stability and reduced UI lag with Compose refactor.",
    stack: "Kotlin, Jetpack Compose, Coroutines, Room",
  },
  {
    title: "Offline-First Dashboard",
    result: "Enabled reliable data access in poor-network environments.",
    stack: "WorkManager, Firebase, local cache, clean architecture",
  },
  {
    title: "Delivery Workflow App",
    result: "Streamlined operations with role-based features and telemetry.",
    stack: "MVVM, Retrofit, Hilt, analytics",
  },
];

export default function AndroidPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          Android Specialization
        </p>
        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Kotlin and Jetpack Compose for modern product teams.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          I build Android apps with clean architecture, strong UX foundations,
          and delivery practices that support long-term maintenance.
        </p>
        <div className="mt-8">
          <Link
            href="/contact"
            className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            Hire for Android Work
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {caseStudies.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="mt-3 text-sm text-cyan-300">{item.stack}</p>
            <p className="mt-4 text-sm leading-6 text-slate-300">
              {item.result}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
