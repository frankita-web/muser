import { Blocks } from "@/components/blocks";
import { Contact } from "@/components/contact";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { PlayerProvider } from "@/components/player-context";
import { Statement } from "@/components/statement";

export default function Home() {
  return (
    <PlayerProvider>
      <Nav />
      <main className="flex-1 overflow-x-clip">
        <Hero />
        <Marquee />
        <Statement />
        <Blocks />
        <Features />
        <Contact />
      </main>
      <Footer />
    </PlayerProvider>
  );
}
