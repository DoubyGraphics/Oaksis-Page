import VeinDivider from "./VeinDivider";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
};

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-oak px-6 pb-20 pt-32 text-sand md:pb-24 md:pt-40">
      <div className="mx-auto max-w-4xl">
        <p className="mb-5 font-body text-sm uppercase tracking-[0.2em] text-oasis">
          {eyebrow}
        </p>
        <h1 className="font-display text-4xl leading-tight text-sand md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 max-w-2xl font-body text-lg leading-relaxed text-sand/75">
            {subtitle}
          </p>
        )}
      </div>
      <VeinDivider
        variant="roots"
        className="absolute bottom-0 left-0 h-20 w-full text-oasis"
      />
    </section>
  );
}
