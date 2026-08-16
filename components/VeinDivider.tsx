type VeinDividerProps = {
  variant: "roots" | "transitional" | "ripple";
  className?: string;
  stroke?: string;
};

/**
 * A single line motif that reads as tree roots at the top of the page
 * and gradually resolves into water ripples further down — Oak and
 * Oasis rendered as one continuous line rather than two separate icons.
 */
export default function VeinDivider({
  variant,
  className = "",
  stroke = "#1D9E75",
}: VeinDividerProps) {
  const paths = {
    roots: [
      "M0,10 C120,10 140,70 260,72 C340,73 360,20 440,18 C540,15 560,90 680,88",
      "M680,88 C760,86 780,40 860,42 C960,44 980,95 1100,92 C1220,90 1260,30 1440,34",
      "M260,72 C270,95 250,110 210,112",
      "M440,18 C450,-2 480,-4 500,10",
      "M860,42 C880,20 910,18 930,32",
    ],
    transitional: [
      "M0,60 C90,40 130,80 220,60 C310,40 350,80 440,60 C530,40 570,80 660,60",
      "M660,60 C750,40 790,80 880,60 C970,40 1010,80 1100,60 C1190,40 1230,80 1320,60 C1370,50 1400,60 1440,55",
    ],
    ripple: [
      "M0,60 C120,80 240,40 360,60 C480,80 600,40 720,60 C840,80 960,40 1080,60 C1200,80 1320,40 1440,60",
      "M0,90 C120,105 240,75 360,90 C480,105 600,75 720,90 C840,105 960,75 1080,90 C1200,105 1320,75 1440,90",
      "M0,30 C120,42 240,18 360,30 C480,42 600,18 720,30 C840,42 960,18 1080,30 C1200,42 1320,18 1440,30",
    ],
  };

  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      {paths[variant].map((d, i) => (
        <path
          key={i}
          d={d}
          fill="none"
          stroke={stroke}
          strokeWidth={variant === "ripple" ? 1.5 : 1.75}
          strokeLinecap="round"
          opacity={variant === "roots" ? 0.9 - i * 0.12 : 0.55 - i * 0.12}
        />
      ))}
    </svg>
  );
}
