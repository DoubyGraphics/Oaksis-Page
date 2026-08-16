import Link from "next/link";
import VeinDivider from "./VeinDivider";

export default function CtaBand() {
  return (
    <section className="relative bg-teal px-6 py-24 text-sand">
      <VeinDivider
        variant="transitional"
        className="absolute -top-1 left-0 h-16 w-full text-oasis"
        stroke="#EAF3DE"
      />
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="font-display text-3xl leading-tight text-sand md:text-4xl">
          Ready to build something with roots?
        </h2>
        <p className="mx-auto mt-4 max-w-xl font-body text-base text-sand/75">
          Tell us about your brand and what you need — we'll get back to you
          with next steps.
        </p>
        <Link
          href="/start-a-project"
          className="focus-ring mt-8 inline-block rounded-full bg-oasis px-8 py-3 font-body text-sm font-medium text-oak transition hover:bg-sand"
        >
          Start your project
        </Link>
      </div>
    </section>
  );
}
