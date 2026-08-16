import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Pricing — Oaksis",
  description: "Pricing for Brand Foundation, Applied Creative, and Ongoing Partnership.",
};

// EDIT ME: replace these placeholder prices with your real numbers.
const tiers = [
  {
    name: "Brand Foundation",
    price: "From ₦[ADD PRICE]",
    period: "one-time project",
    features: [
      "Brand positioning & messaging",
      "Logo & visual identity system",
      "Brand guideline document",
      "2 rounds of revisions",
    ],
  },
  {
    name: "Applied Creative",
    price: "From ₦[ADD PRICE]",
    period: "per project or content set",
    features: [
      "Social content set or motion piece",
      "Delivered in your brand system",
      "Formats sized for your channels",
      "1–2 rounds of revisions",
    ],
    highlighted: true,
  },
  {
    name: "Ongoing Partnership",
    price: "From ₦[ADD PRICE]",
    period: "per month",
    features: [
      "Set monthly content/design capacity",
      "Priority turnaround",
      "Ongoing brand consistency support",
      "Cancel or adjust scope monthly",
    ],
  },
];

export default function PricingPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHero
        eyebrow="Pricing"
        title="Straightforward pricing, scoped to your brand"
        subtitle="Every project is a little different — these are starting points. You'll get an exact quote after a short conversation about what you need."
      />

      <section className="bg-sand px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className={`rounded-2xl border p-8 ${
                  tier.highlighted
                    ? "border-oasis bg-white/70 shadow-sm"
                    : "border-ink/10 bg-white/40"
                }`}
              >
                <h3 className="font-display text-xl text-ink">{tier.name}</h3>
                <p className="mt-4 font-display text-3xl text-ink">
                  {tier.price}
                </p>
                <p className="mt-1 font-body text-xs uppercase tracking-widest text-moss">
                  {tier.period}
                </p>
                <ul className="mt-6 space-y-2 font-body text-sm text-ink/75">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span className="mt-1 text-oasis">•</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center font-body text-sm text-ink/50">
            Prices above are placeholders — edit them in{" "}
            <code className="rounded bg-ink/5 px-1.5 py-0.5">
              app/pricing/page.tsx
            </code>{" "}
            once you've finalized your rates.
          </p>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
