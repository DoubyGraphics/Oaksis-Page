import type { Metadata } from "next";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CtaBand from "@/components/CtaBand";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Work — Oaksis",
  description: "Selected work from Oaksis Studio.",
};

// EDIT ME: once you have real images, add them to /public/work/ and
// replace the gradient placeholder block below with:
//   <Image src="/work/your-file.jpg" alt="..." fill className="object-cover" />
// (import Image from "next/image" at the top of this file)
const projects = [
  {
    name: "Fictional brand spec — Set 1",
    type: "Social content + motion",
    status: "ready" as const,
    blurb:
      "A weekend spec project demonstrating a full social content set alongside a short motion piece for a fictional brand.",
  },
  {
    name: "Fictional brand spec — Set 2",
    type: "Brand identity",
    status: "ready" as const,
    blurb:
      "A complete visual identity system built from the ground up for a fictional brand — logo, palette, and guidelines.",
  },
  {
    name: "New project",
    type: "Coming soon",
    status: "soon" as const,
    blurb: "",
  },
  {
    name: "New project",
    type: "Coming soon",
    status: "soon" as const,
    blurb: "",
  },
];

export default function WorkPage() {
  return (
    <main className="relative">
      <Nav />
      <PageHero
        eyebrow="Selected work"
        title="A look at what we make"
        subtitle="A mix of finished spec work and space held for projects still in progress."
      />

      <section className="bg-sand px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="overflow-hidden rounded-2xl border border-ink/10 bg-white/40"
              >
                <div
                  className={`flex aspect-[4/3] items-center justify-center ${
                    p.status === "ready"
                      ? "bg-gradient-to-br from-teal to-oak"
                      : "bg-ink/5"
                  }`}
                >
                  <span
                    className={`font-display text-sm ${
                      p.status === "ready" ? "text-sand/60" : "text-ink/30"
                    }`}
                  >
                    {p.status === "ready" ? "Image coming soon" : "Coming soon"}
                  </span>
                </div>
                <div className="p-6">
                  <p className="font-body text-xs uppercase tracking-widest text-moss">
                    {p.type}
                  </p>
                  <p className="mt-2 font-display text-xl text-ink">{p.name}</p>
                  {p.blurb && (
                    <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
                      {p.blurb}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
      <Footer />
    </main>
  );
}
