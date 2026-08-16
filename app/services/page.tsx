import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Services — Oaksis",
  description: "Brand Foundation, Applied Creative, and Ongoing Partnership.",
};

const tiers = [
  {
    name: "Brand Foundation",
    note: "For teams starting fresh",
    summary:
      "Identity built from the ground up — the strategic and visual foundation everything else gets built on.",
    includes: [
      "Brand positioning & messaging direction",
      "Logo & visual identity system",
      "Color palette, typography, and usage guidelines",
      "Brand guideline document",
    ],
    idealFor:
      "New businesses, rebrands, or anyone who needs a real identity system before producing content.",
  },
  {
    name: "Applied Creative",
    note: "For teams that need to show up",
    summary:
      "Your identity put to work across the formats your brand actually needs to appear in.",
    includes: [
      "Social media content sets",
      "Short-form motion & video edits",
      "Presentation & pitch deck design",
      "Templated assets for ongoing self-use",
    ],
    idealFor:
      "Brands with an existing identity who need consistent, on-brand content produced regularly.",
  },
  {
    name: "Ongoing Partnership",
    note: "For teams that need a standing creative hand",
    summary:
      "A retained relationship — steady creative output and a partner who already knows your brand cold.",
    includes: [
      "Monthly content & design capacity",
      "Priority turnaround on requests",
      "Ongoing brand consistency checks",
      "A single point of contact who knows your brand's history",
    ],
    idealFor:
      "Businesses that need creative support as a recurring function, not a one-off project.",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHero
        eyebrow="Services"
        title="Three ways to work with Oaksis"
        subtitle="Each tier builds on the last — start wherever your brand actually is today."
      />

      <section className="bg-sand px-6 py-24">
        <div className="mx-auto max-w-5xl space-y-16">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className="grid grid-cols-1 gap-10 border-b border-ink/10 pb-16 last:border-0 md:grid-cols-12"
            >
              <div className="md:col-span-4">
                <p className="mb-2 font-body text-xs uppercase tracking-widest text-moss">
                  {tier.note}
                </p>
                <h2 className="font-display text-3xl text-ink">{tier.name}</h2>
                <p className="mt-4 font-body text-ink/70">{tier.summary}</p>
              </div>

              <div className="md:col-span-5">
                <p className="mb-3 font-body text-xs uppercase tracking-widest text-teal">
                  What's included
                </p>
                <ul className="space-y-2 font-body text-ink/80">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 text-oasis">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="md:col-span-3">
                <p className="mb-3 font-body text-xs uppercase tracking-widest text-teal">
                  Ideal for
                </p>
                <p className="font-body text-sm leading-relaxed text-ink/70">
                  {tier.idealFor}
                </p>
              </div>
            </div>
          ))}

          <div className="text-center">
            <Link
              href="/pricing"
              className="focus-ring font-body text-teal underline decoration-oasis underline-offset-4 transition hover:text-oasis"
            >
              See pricing →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
