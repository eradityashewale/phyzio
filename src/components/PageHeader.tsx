import MarqueeBand from "./MarqueeBand";

interface Props {
  title: string;
  subtitle: string;
  withMarquee?: boolean;
}

export default function PageHeader({ title, subtitle, withMarquee = true }: Props) {
  return (
    <>
      <section className="relative bg-gradient-to-br from-sky-50 to-teal-50 py-16 px-4 text-center overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute -top-16 -left-16 w-80 h-80 bg-sky-200/30 blur-3xl"
            style={{ animation: "morphBlob1 10s ease-in-out infinite" }}
          />
          <div
            className="absolute -bottom-12 -right-12 w-72 h-72 bg-teal-200/25 blur-3xl"
            style={{ animation: "morphBlob2 12s ease-in-out infinite" }}
          />
        </div>
        <div className="relative">
          <h1 className="hero-s1 text-4xl font-bold text-gray-900 mb-3">{title}</h1>
          <p className="hero-s2 text-gray-500 max-w-xl mx-auto">{subtitle}</p>
        </div>
      </section>
      {withMarquee && <MarqueeBand />}
    </>
  );
}
