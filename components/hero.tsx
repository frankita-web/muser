import Image from "next/image";
import hero from "@/public/hero.jpg";
import { NowPlaying } from "./now-playing";

export function Hero() {
  return (
    <section className="relative isolate min-h-svh overflow-hidden">
      <div className="hero-scroll absolute inset-0 -z-10">
        <div className="kenburns absolute inset-0">
          <Image
            src={hero}
            alt="Separadores de discos con los bloques Desayuno, Almuerzo, Comida y Tarde frente a un restaurante"
            fill
            priority
            placeholder="blur"
            sizes="100vw"
            className="object-cover object-[28%_center]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/20" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgb(109_39_33/0.55),transparent_60%)]" />
      </div>

      <div className="mx-auto flex min-h-svh max-w-[90rem] flex-col justify-end gap-10 px-5 pt-32 pb-10 sm:px-8 xl:flex-row xl:items-end xl:justify-between xl:pb-14">
        <div>
          <p className="rise eyebrow text-cream/70">Radio curada para restaurantes</p>
          <h1 className="rise display mt-5 text-[12vw] sm:text-[8.6vw] sm:whitespace-nowrap xl:text-[min(6.2vw,6rem)] [animation-delay:120ms]">
            Tu local
            <br />
            suena <span className="text-gradient">como</span>
            <br />
            <span className="text-gradient">tu local.</span>
          </h1>
        </div>
        <div className="rise w-full [animation-delay:350ms] sm:max-w-[380px] xl:shrink-0">
          <NowPlaying />
        </div>
      </div>
    </section>
  );
}
