import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
};

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) => {
  const isCenter = align === "center";

  return (
    <Reveal
      className={`mb-12 sm:mb-16 ${isCenter ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}
    >
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-gold">
          {eyebrow}
        </p>
      ) : null}

      <h2 className="font-display text-3xl font-bold uppercase tracking-wide text-title sm:text-4xl">
        {title}
      </h2>

      <div className={`ornate-divider mt-5 ${isCenter ? "" : "justify-start"}`}>
        <span />
      </div>

      {description ? (
        <p className="mt-5 text-pretty text-base leading-relaxed text-secondary">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
};
