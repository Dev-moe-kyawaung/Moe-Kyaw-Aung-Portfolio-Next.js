import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center text-white">
      <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
        404
      </p>
      <h1 className="mt-4 text-4xl font-bold md:text-5xl">
        Page not found.
      </h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-slate-300">
        The page you are looking for does not exist or may have moved.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-4">
        <Link href="/" className="btn-primary">
          Go Home
        </Link>
        <Link href="/projects" className="btn-secondary">
          View Projects
        </Link>
      </div>
    </div>
  );
}
