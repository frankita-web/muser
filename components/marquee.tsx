import { blocks } from "@/lib/site";

export function Marquee() {
  const items = [...blocks, ...blocks];
  return (
    <div className="relative overflow-hidden border-y border-cream/10 bg-wine py-5" aria-hidden>
      <div className="marquee flex w-max items-center gap-10 whitespace-nowrap">
        {[...items, ...items].map((b, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="display text-4xl sm:text-6xl">{b.name}</span>
            <span className="text-2xl text-flame sm:text-4xl">✺</span>
          </span>
        ))}
      </div>
    </div>
  );
}
