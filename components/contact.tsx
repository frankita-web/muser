"use client";

import { useState } from "react";
import { site } from "@/lib/site";

const fields = [
  { name: "nombre", label: "Nombre", type: "text", autoComplete: "name" },
  { name: "local", label: "Tu local", type: "text", autoComplete: "organization" },
  { name: "correo", label: "Correo", type: "email", autoComplete: "email" },
] as const;

const inputClass =
  "mt-2 block w-full rounded-2xl border border-cream/10 bg-cream/[0.06] px-4 py-3.5 text-cream outline-none transition-colors placeholder:text-cream/30 focus:border-cream/50 focus:bg-cream/10";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "missing">("idle");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!site.contactEmail) {
      setStatus("missing");
      return;
    }
    const data = new FormData(e.currentTarget);
    const subject = `Muser · ${data.get("local")}`;
    const body = [
      `Nombre: ${data.get("nombre")}`,
      `Local: ${data.get("local")}`,
      `Correo: ${data.get("correo")}`,
      "",
      `${data.get("mensaje")}`,
    ].join("\n");
    window.location.href = `mailto:${site.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("sent");
  }

  return (
    <section id="contacto" className="relative isolate scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 sm:py-36">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_20%_30%,rgb(109_39_33/0.8),transparent_55%),radial-gradient(ellipse_at_90%_90%,rgb(224_97_74/0.25),transparent_50%)]" />
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
        <div className="reveal">
          <p className="eyebrow text-flame">Contacto</p>
          <h2 className="display mt-5 text-[clamp(3.75rem,10vw,9rem)]">
            Hable
            <br />
            <span className="text-gradient">mos.</span>
          </h2>
          <p className="mt-8 max-w-sm text-xl text-cream/80">
            Queremos saber de tu local. Cuéntanos cómo suena hoy y cómo debería sonar.
          </p>
          <p className="mt-6 text-sm text-cream/60">
            {site.contactEmail ? (
              <a href={`mailto:${site.contactEmail}`} className="underline underline-offset-4">
                {site.contactEmail}
              </a>
            ) : (
              "[CORREO DE CONTACTO]"
            )}
          </p>
        </div>

        <form
          onSubmit={onSubmit}
          className="reveal glass flex flex-col gap-5 rounded-[2rem] p-6 shadow-2xl shadow-black/40 sm:p-8"
        >
          {fields.map((f) => (
            <label key={f.name} className="block">
              <span className="text-sm text-cream/70">{f.label}</span>
              <input
                name={f.name}
                type={f.type}
                autoComplete={f.autoComplete}
                required
                className={inputClass}
              />
            </label>
          ))}
          <label className="block">
            <span className="text-sm text-cream/70">Mensaje</span>
            <textarea name="mensaje" rows={4} required className={`${inputClass} resize-none`} />
          </label>
          <button
            type="submit"
            className="mt-2 rounded-full bg-cream py-4 font-semibold text-ink transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            Enviar
          </button>
          <p className="min-h-4 text-center text-xs text-cream/70" aria-live="polite">
            {status === "sent" && "¡Gracias! Abrimos tu correo para enviar el mensaje."}
            {status === "missing" && "El formulario aún no tiene un correo de destino configurado."}
          </p>
        </form>
      </div>
    </section>
  );
}
