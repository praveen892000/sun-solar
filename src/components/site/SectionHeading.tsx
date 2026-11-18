type SectionHeadingProps = {
  title: string;
  eyebrow?: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  as?: "h1" | "h2";
  id?: string;
  className?: string;
};

export function SectionHeading({
  title,
  eyebrow,
  description,
  align = "left",
  light = false,
  as: Tag = "h2",
  id,
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";
  return (
    <div
      className={`${centered ? "mx-auto text-center" : ""} max-w-2xl ${className}`}
    >
      {eyebrow ? <p className={`eyebrow mb-3 ${light ? "" : ""}`}>{eyebrow}</p> : null}
      <Tag
        id={id}
        className={`font-display text-3xl font-semibold sm:text-4xl ${
          light ? "!text-white" : ""
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-4 text-lg leading-relaxed ${
            light ? "text-white/80" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
