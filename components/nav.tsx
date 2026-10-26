import { Logo } from "./logo";

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-4 z-50 px-4">
      <nav className="glass mx-auto flex max-w-3xl items-center justify-between rounded-full py-2 pr-2 pl-6 shadow-2xl shadow-black/40">
        <a href="#" className="text-xl text-cream">
          <Logo />
        </a>
        <div className="flex items-center gap-1 text-sm">
          <a href="#bloques" className="hidden rounded-full px-4 py-2 text-cream/75 transition-colors hover:text-cream sm:block">
            Bloques
          </a>
          <a href="#que-somos" className="hidden rounded-full px-4 py-2 text-cream/75 transition-colors hover:text-cream sm:block">
            Qué somos
          </a>
          <a
            href="#contacto"
            className="rounded-full bg-cream px-5 py-2 font-medium text-ink transition-transform hover:scale-[1.04] active:scale-95"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
}
