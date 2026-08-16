import Link from "next/link";

const preview = [
  {
    name: "Fictional brand spec — Set 1",
    type: "Social content + motion",
  },
  {
    name: "Fictional brand spec — Set 2",
    type: "Brand identity",
  },
  {
    name: "More coming soon",
    type: "In progress",
  },
];

export default function WorkTeaser() {
  return (
    <section className="bg-sand px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-teal">
              Selected work
            </p>
            <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
              A look at what we make
            </h2>
          </div>
          <Link
            href="/work"
            className="focus-ring inline-flex items-center gap-2 font-body text-sm font-medium text-teal transition hover:text-oasis"
          >
            View all work
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {preview.map((p) => (
            <Link
              href="/work"
              key={p.name}
              className="focus-ring group block overflow-hidden rounded-2xl border border-ink/10 bg-white/40 transition hover:border-oasis"
            >
              <div className="flex aspect-[4/5] items-center justify-center bg-gradient-to-br from-teal to-oak">
                <span className="font-display text-sm text-sand/60">
                  Image coming soon
                </span>
              </div>
              <div className="p-5">
                <p className="font-body text-xs uppercase tracking-widest text-moss">
                  {p.type}
                </p>
                <p className="mt-2 font-display text-lg text-ink">{p.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
