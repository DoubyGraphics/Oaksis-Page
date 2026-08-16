import Link from "next/link";

const tiers = [
  {
    name: "Brand Foundation",
    note: "For teams starting fresh",
    desc: "Identity built from the ground up — name positioning, visual system, and the guidelines that keep it consistent as you grow.",
    offset: "md:mt-0",
  },
  {
    name: "Applied Creative",
    note: "For teams that need to show up",
    desc: "Your identity put to work: social content, motion, presentation design — made to move across every place your brand is seen.",
    offset: "md:mt-12",
  },
  {
    name: "Ongoing Partnership",
    note: "For teams that need a standing creative hand",
    desc: "A retained relationship — steady creative output, rhythm, and a partner who already knows your brand cold.",
    offset: "md:mt-24",
  },
];

export default function Services() {
  return (
    <section  className="bg-sand px-6 py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 max-w-xl">
          <p className="mb-4 font-body text-sm uppercase tracking-[0.2em] text-teal">
            How we work
          </p>
          <h2 className="font-display text-4xl leading-tight text-ink md:text-5xl">
            Three ways to work with Oaksis
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`group rounded-2xl border border-ink/10 bg-white/40 p-8 transition hover:border-oasis hover:bg-white/70 ${tier.offset}`}
            >
              <p className="mb-2 font-body text-xs uppercase tracking-widest text-moss">
                {tier.note}
              </p>
              <h3 className="mb-4 font-display text-2xl text-ink">
                {tier.name}
              </h3>
              <p className="font-body text-base leading-relaxed text-ink/70">
                {tier.desc}
              </p>
            </div>
          ))}
        </div>

        <Link
          href="/services"
          className="focus-ring mt-12 inline-flex items-center gap-2 font-body text-sm font-medium text-teal transition hover:text-oasis"
        >
          See full service details
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
