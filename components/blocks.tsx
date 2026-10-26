"use client";

import { blocks } from "@/lib/site";
import { Equalizer, PauseIcon, PlayIcon, Vinyl, usePlayer } from "./player-context";

export function Blocks() {
  const { active, playing, select } = usePlayer();

  return (
    <section id="bloques" className="scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <p className="reveal eyebrow text-flame">La programación</p>
        <h2 className="reveal display mt-5 text-[clamp(2.75rem,7.5vw,7rem)]">
          Un bloque
          <br />
          para cada <span className="text-gradient">momento.</span>
        </h2>
      </div>

      <ul className="mt-14 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-6 [scrollbar-width:none] sm:scroll-px-8 sm:px-8 xl:px-[max(2rem,calc((100vw-80rem)/2+2rem))]">
        {blocks.map((b, i) => {
          const isActive = b.id === active.id;
          const isPlaying = isActive && playing;
          return (
            <li key={b.id} className="reveal shrink-0 snap-start">
              <button
                type="button"
                onClick={() => select(b.id)}
                aria-pressed={isActive}
                aria-label={`${isPlaying ? "Pausar" : "Escuchar"} ${b.name}`}
                style={{ background: b.gradient }}
                className={`group relative flex h-[30rem] w-[78vw] max-w-[22rem] flex-col overflow-hidden rounded-[2rem] p-7 text-left transition-transform duration-500 hover:-translate-y-2 sm:h-[34rem] ${
                  isActive ? "ring-2 ring-cream" : ""
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="eyebrow text-[0.625rem] text-cream/80">
                    0{i + 1} · {b.hours}
                  </span>
                  {isPlaying && <Equalizer playing className="text-cream" />}
                </div>

                <Vinyl
                  playing={isPlaying}
                  className="absolute -right-24 top-24 size-72 text-[6rem] transition-transform duration-700 group-hover:-translate-x-6"
                />

                <div className="relative mt-auto">
                  <h3 className="display text-4xl">{b.name}</h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-snug text-cream/80">
                    {b.mood}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-cream px-4 py-2 text-sm font-medium text-ink">
                    {isPlaying ? (
                      <PauseIcon className="size-3.5" />
                    ) : (
                      <PlayIcon className="size-3.5" />
                    )}
                    {isPlaying ? "Sonando" : "Escuchar"}
                  </span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
