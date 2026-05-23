import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "AI/ML Projects",
  description:
    "Applied AI/ML projects, automation workflows, model pipelines, and product-focused technical case studies.",
};

const projects = [
  {
    title: "Resume Intelligence Assistant",
    summary:
      "Built a smart document workflow that extracts key signals, organizes content, and speeds up review.",
    stack: "Python, NLP, vector search, automation",
    impact: "Reduced manual review time and improved content consistency.",
  },
  {
    title: "Recommendation Engine Prototype",
    summary:
      "Designed a lightweight recommendation flow for personalized content and prioritization.",
    stack: "Python, embeddings, ranking logic",
    impact: "Improved relevance for high-value items and user engagement.",
  },
  {
    title: "Analytics Forecasting Tool",
    summary:
      "Created a forecasting pipeline for trend detection and planning support.",
    stack: "Pandas, scikit-learn, data visualization",
    impact: "Helped teams make faster, data-backed decisions.",
  },
];

const pipeline = [
  "Data collection and cleaning from structured or semi-structured sources.",
  "Feature selection and transformation for stable model input.",
  "Model experimentation with simple baselines before complexity.",
  "Evaluation using practical metrics tied to the business goal.",
  "Deployment or integration into a product workflow.",
];

export default function AIMLPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20 text-white">
      <section>
        <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
          AI / ML Specialization
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold md:text-5xl">
          Practical AI/ML work focused on useful products, not hype.
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
          I build applied AI experiences, automation workflows, and model-backed
          tools that solve real product problems and fit into existing systems.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full bg-cyan-400 px-6 py-3 font-medium text-slate-950 transition hover:bg-cyan-300"
          >
            View Related Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Discuss a Role
          </Link>
        </div>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-cyan-300">
              AI/ML Project
            </p>
            <h2 className="mt-3 text-xl font-semibold">{project.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {project.summary}
            </p>
            <p className="mt-4 text-sm text-slate-400">{project.stack}</p>
            <p className="mt-3 text-sm text-cyan-200">{project.impact}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-8 md:grid-cols-[1.1fr_0.9fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Workflow
          </p>
          <h2 className="mt-3 text-3xl font-bold">How I approach AI/ML delivery</h2>
          <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            {pipeline.map((step, index) => (
              <li key={step} className="flex gap-3">
                <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-400 text-xs font-bold text-slate-950">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">
            Recruiter Value
          </p>
          <h2 className="mt-3 text-3xl font-bold">What this signals</h2>
          <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
            <p>
              You get someone who can connect AI ideas to product execution.
            </p>
            <p>
              The focus is on maintainability, measurable output, and integration
              into real workflows.
            </p>
            <p>
              This page is meant to show practical breadth without losing senior
              credibility.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
