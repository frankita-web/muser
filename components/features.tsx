const features = [
  {
    title: "Curada por personas",
    text: "Selectores con oficio, no listas automáticas.",
    big: "Oficio",
  },
  {
    title: "Ordenada por bloques",
    text: "No son listas. Es una gran selección viva y activa, en constante movimiento.",
    big: "Viva",
  },
  {
    title: "Suena sola",
    text: "Todos los días, sin depender de quién abre.",
    big: "24/7",
  },
];

export function Features() {
  return (
    <section className="px-5 py-24 sm:px-8 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-3">
        {features.map((f, i) => (
          <article
            key={f.title}
            className={`reveal relative flex min-h-[16rem] lg:min-h-[22rem] flex-col overflow-hidden rounded-[2rem] p-8 ${
              i === 1 ? "bg-wine" : "bg-cream/[0.06] ring-1 ring-cream/10"
            }`}
          >
            <span className="eyebrow text-[0.625rem] text-cream/50">0{i + 1}</span>
            <p
              className={`display mt-6 text-[clamp(2.5rem,3.6vw,4rem)] ${
                i === 1 ? "text-cream" : "text-gradient"
              }`}
            >
              {f.big}
            </p>
            <div className="mt-auto pt-10">
              <h3 className="text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-cream/70">{f.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
