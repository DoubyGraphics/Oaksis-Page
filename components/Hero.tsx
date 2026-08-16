import Link from "next/link";
import VeinDivider from "./VeinDivider";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-oak text-sand">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 pb-28 pt-20 md:grid-cols-12 md:pt-28">
        <div className="md:col-span-7">
          <p className="mb-6 font-body text-sm uppercase tracking-[0.2em] text-oasis">
            Oaksis Studio
          </p>
          <h1 className="font-display text-5xl leading-[1.05] tracking-tightest text-sand md:text-6xl lg:text-7xl">
            Brands with roots deep enough to hold their shape,
            <span className="italic text-oasis"> and water enough to move.</span>
          </h1>
          <p className="mt-8 max-w-lg font-body text-lg leading-relaxed text-sand/80">
            Oaksis is a creative studio building brand identity, motion, and
            content for teams who need work that's grounded — not generic.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/start-a-project"
              className="focus-ring rounded-full bg-oasis px-7 py-3 font-body text-sm font-medium text-oak transition hover:bg-sand"
            >
              Start a project
            </Link>
            <Link
              href="/services"
              className="focus-ring rounded-full border border-sand/30 px-7 py-3 font-body text-sm font-medium text-sand transition hover:border-oasis hover:text-oasis"
            >
              See how we work
            </Link>
          </div>
        </div>
        <div className="hidden md:col-span-5 md:flex md:items-center md:justify-center">
          <svg
            viewBox="0 0 300 400"
            className="h-80 w-auto opacity-90"
            aria-hidden="true"
          >
            <path
              d="M150,0 C150,60 110,70 110,120 C110,170 150,180 150,230 C150,280 90,290 90,340 C90,370 110,395 150,400"
              fill="none"
              stroke="#1D9E75"
              strokeWidth="1.5"
              opacity="0.85"
            />
            <path
              d="M150,0 C150,60 190,70 190,120 C190,170 150,180 150,230 C150,280 210,290 210,340 C210,370 190,395 150,400"
              fill="none"
              stroke="#1D9E75"
              strokeWidth="1.5"
              opacity="0.5"
            />
            <path
              d="M150,20 C120,35 100,30 80,45 M150,60 C180,72 200,68 220,80"
              fill="none"
              stroke="#EAF3DE"
              strokeWidth="1"
              opacity="0.4"
            />
          </svg>
        </div>
      </div>

      <VeinDivider
        variant="roots"
        className="absolute bottom-0 left-0 h-24 w-full text-oasis"
      />
    </section>
  );
}
