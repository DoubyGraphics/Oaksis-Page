import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — Oaksis",
  description: "The studio behind Oaksis and how it works.",
};

const values = [
  {
    title: "Rooted",
    desc: "Every project starts from a clear strategic foundation — not a template, not a trend chase.",
  },
  {
    title: "Adaptive",
    desc: "One identity, applied consistently across whatever format the moment calls for.",
  },
  {
    title: "Direct",
    desc: "One creative lead means one consistent point of view, from first sketch to final file — no handoffs, no dilution.",
  },
];

export default function AboutPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHero
        eyebrow="About Oaksis"
        title="Named for two things that shouldn't blend, but do."
        subtitle="An oak's steadiness. An oasis's adaptability. That tension is the whole brief — for every client, and for the studio itself."
      />

      <section className="bg-sand px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <p className="font-display text-2xl leading-snug text-ink md:text-3xl">
            Oaksis is a solo creative studio, built and led by one designer
            from first sketch to final file.
          </p>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink/70">
            That's deliberate. It means every client works directly with the
            person doing the work — no account layer, no brief getting
            reinterpreted three times before it reaches a designer. Just one
            consistent creative point of view, applied to your brand as
            carefully as it would be to our own.
          </p>
          <p className="mt-6 font-body text-lg leading-relaxed text-ink/70">
            The studio works across brand identity, motion, social content,
            and presentation design — for SMEs, corporates, and NGOs who need
            work that holds together across every format it's asked to show
            up in.
          </p>
        </div>
      </section>

      <section className="bg-teal px-6 py-24 text-sand">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 font-body text-sm uppercase tracking-[0.2em] text-oasis">
            How we work
          </p>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="font-display text-2xl text-sand">{v.title}</h3>
                <p className="mt-3 font-body leading-relaxed text-sand/75">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-sand px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <Link
            href="/work"
            className="focus-ring font-body text-teal underline decoration-oasis underline-offset-4 transition hover:text-oasis"
          >
            See the work →
          </Link>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
