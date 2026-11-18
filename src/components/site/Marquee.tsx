/** Infinite credential strip — pure CSS motion. */
export function Marquee({ items }: { items: string[] }) {
  const loop = [...items, ...items];
  return (
    <div
      className="overflow-hidden border-y border-line bg-sand py-4"
      aria-label="Credentials"
    >
      <div className="anim-marquee flex w-max gap-10 whitespace-nowrap px-4">
        {loop.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="inline-flex items-center gap-10 text-sm font-semibold tracking-[0.08em] text-navy uppercase"
          >
            {item}
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-solar" />
          </span>
        ))}
      </div>
    </div>
  );
}
