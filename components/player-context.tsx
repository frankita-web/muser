"use client";

import { createContext, use, useEffect, useRef, useState } from "react";
import { blocks, type Block } from "@/lib/site";

// Duración simulada de un bloque cuando no hay audio real.
const SIMULATED_SECONDS = 90;

type PlayerState = {
  active: Block;
  playing: boolean;
  progress: number;
  toggle: () => void;
  select: (id: string) => void;
};

const PlayerContext = createContext<PlayerState | null>(null);

export function usePlayer() {
  const ctx = use(PlayerContext);
  if (!ctx) throw new Error("usePlayer debe usarse dentro de PlayerProvider");
  return ctx;
}

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [activeId, setActiveId] = useState(blocks[0].id);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const active = blocks.find((b) => b.id === activeId) ?? blocks[0];

  useEffect(() => {
    const audio = audioRef.current;
    if (active.src && audio) {
      if (playing) audio.play().catch(() => setPlaying(false));
      else audio.pause();
      return;
    }
    if (!playing) return;
    const id = setInterval(() => {
      setProgress((p) => (p + 1 / (SIMULATED_SECONDS * 4)) % 1);
    }, 250);
    return () => clearInterval(id);
  }, [playing, active.src, activeId]);

  function toggle() {
    setPlaying((p) => !p);
  }

  function select(id: string) {
    if (id === activeId) {
      toggle();
      return;
    }
    setActiveId(id);
    setProgress(0);
    setPlaying(true);
  }

  return (
    <PlayerContext value={{ active, playing, progress, toggle, select }}>
      {children}
      {active.src && (
        <audio
          ref={audioRef}
          src={active.src}
          loop
          onTimeUpdate={(e) => {
            const a = e.currentTarget;
            if (a.duration) setProgress(a.currentTime / a.duration);
          }}
        />
      )}
    </PlayerContext>
  );
}

export function PlayIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M7 4.5v15l13-7.5z" />
    </svg>
  );
}

export function PauseIcon({ className = "size-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
    </svg>
  );
}

export function Equalizer({ playing, className = "" }: { playing: boolean; className?: string }) {
  return (
    <span
      data-playing={playing}
      className={`eq inline-flex h-4 items-end gap-[3px] ${className}`}
      aria-hidden
    >
      <span />
      <span />
      <span />
      <span />
    </span>
  );
}

export function Vinyl({
  playing,
  className = "",
}: {
  playing: boolean;
  className?: string;
}) {
  return (
    <div data-playing={playing} className={`vinyl relative ${className}`} aria-hidden>
      <div className="absolute inset-[32%] grid place-items-center rounded-full bg-wine">
        <span className="font-display text-[0.5em] font-black italic text-cream">
          m
        </span>
        <span className="absolute size-[10%] rounded-full bg-ink" />
      </div>
    </div>
  );
}
