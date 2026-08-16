import Link from "next/link";
import VeinDivider from "./VeinDivider";

export default function About() {
  return (
    <section className="relative bg-teal px-6 py-28 text-sand">
      <VeinDivider
        variant="transitional"
        className="absolute -top-1 left-0 h-16 w-full text-oasis"
        stroke="#EAF3DE"
      />
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="font-body text-sm uppercase tracking-[0.2em] text-oasis">
            About Oaksis
          </p>
        </div>
        <div className="md:col-span-8">
          <p className="font-display text-2xl leading-snug text-sand md:text-3xl">
            Oaksis is named for two things that shouldn't blend, but do —
            an oak's steadiness and an oasis's adaptability.
          </p>
          <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-sand/75">
            That's the brief every client gets: work that holds a consistent
            identity, but bends to whatever format the moment calls for —
            a deck, a reel, a full rebrand. Built and led by one creative,
            so every project gets a single, consistent point of view from
            first sketch to final file.
          </p>
          <Link
            href="/about"
            className="focus-ring mt-6 inline-flex items-center gap-2 font-body text-sm font-medium text-oasis transition hover:text-sand"
          >
            More about Oaksis
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
