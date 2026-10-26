const text =
  "Somos una red de curadores. Creamos una radio específica para tu local, acorde con la identidad de tu marca: música elegida por personas que va cambiando según lo que sucede en tu local.";

const highlight = new Set(["curadores.", "radio", "personas"]);

export function Statement() {
  return (
    <section id="que-somos" className="scroll-mt-24 px-5 py-32 sm:px-8 sm:py-48">
      <div className="mx-auto max-w-6xl">
        <p className="reveal eyebrow text-flame">Qué somos</p>
        <p className="mt-8 text-[clamp(2rem,5.2vw,4.75rem)] leading-[1.05] font-semibold tracking-tight">
          {text.split(" ").map((word, i) => (
            <span
              key={i}
              className={`light ${highlight.has(word) ? "text-gradient" : ""}`}
            >
              {word}{" "}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
