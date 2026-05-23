import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/features/seo/metadata";

export const metadata = buildMetadata({
  title: "Moe Kyaw Aung | Senior Android Developer",
  description:
    "Senior Android Developer building premium mobile apps, applied AI/ML projects, and open-source tools.",
  path: "/",
});

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
            <Link href="/projects" className="btn-primary">
              View Projects
            </Link>
            <Link href="/contact" className="btn-secondary">
              Contact Me
            </Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="glass-card p-4 shadow-2xl">
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
    </div>
  );
}
