"use client";

import { blocks } from "@/lib/site";
import {
  Equalizer,
  PauseIcon,
  PlayIcon,
  Vinyl,
  usePlayer,
} from "./player-context";

export function NowPlaying() {
  const { active, playing, progress, toggle, select } = usePlayer();

  return (
    <div className="glass rounded-[2rem] p-5 shadow-2xl shadow-black/50">
      <div className="flex items-center gap-3 sm:gap-4">
        <Vinyl playing={playing} className="size-16 shrink-0 text-[2rem] sm:size-20 sm:text-[2.5rem]" />
        <div className="min-w-0 flex-1" aria-live="polite">
          <p className="eyebrow flex items-center gap-2 text-[0.625rem] whitespace-nowrap text-flame">
            <span className="size-1.5 animate-pulse rounded-full bg-flame" />
            Al aire · Radio Muser
          </p>
          <p className="mt-1 truncate font-display text-xl sm:text-2xl font-black uppercase [font-stretch:115%]">
            {active.name}
          </p>
          <p className="text-xs text-cream/60">Curada por {active.curator}</p>
        </div>
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Pausar" : "Reproducir"}
          className="grid size-14 shrink-0 place-items-center rounded-full bg-cream text-ink transition-transform hover:scale-105 active:scale-95"
        >
          {playing ? <PauseIcon /> : <PlayIcon className="ml-0.5 size-5" />}
        </button>
      </div>

      <div className="mt-5 flex items-center gap-3">
        <Equalizer playing={playing} className="text-flame" />
        <div
          className="h-1 flex-1 overflow-hidden rounded-full bg-cream/15"
          role="progressbar"
          aria-label="Progreso del bloque"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <div
            className="h-full rounded-full bg-cream transition-[width] duration-200 ease-linear"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="text-[0.625rem] tabular-nums text-cream/50">{active.hours}</span>
      </div>

      <p className="eyebrow mt-5 text-[0.625rem] text-cream/50">Elige un separador y escucha</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {blocks.map((b) => {
          const isActive = b.id === active.id;
          return (
            <li key={b.id}>
              <button
                type="button"
                onClick={() => select(b.id)}
                aria-pressed={isActive}
                className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                  isActive
                    ? "bg-cream text-ink"
                    : "bg-cream/8 text-cream/80 hover:bg-cream/15 hover:text-cream"
                }`}
              >
                {b.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
