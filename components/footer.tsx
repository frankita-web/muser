export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-cream/10 pt-14">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 text-sm text-cream/50 sm:flex-row sm:justify-between sm:px-8">
        <p>© 2026 Muser · Red de curadores</p>
        <div className="flex gap-6">
          <a href="#bloques" className="hover:text-cream">Bloques</a>
          <a href="#que-somos" className="hover:text-cream">Qué somos</a>
          <a href="#contacto" className="hover:text-cream">Contacto</a>
        </div>
      </div>
      <p
        aria-hidden
        className="text-gradient mt-6 -mb-[0.2em] text-center font-display text-[24vw] leading-[0.85] font-black italic tracking-[-0.05em] [font-stretch:115%] select-none"
      >
        muser
      </p>
    </footer>
  );
}
