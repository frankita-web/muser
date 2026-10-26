export const site = {
  name: "Muser",
  description:
    "Red de curadores que crea una radio específica para tu local, acorde a la identidad de tu marca.",
  // Correo que recibe los mensajes del formulario de contacto.
  contactEmail: "",
};

export type Block = {
  id: string;
  name: string;
  hours: string;
  mood: string;
  curator: string;
  // Fondo de la tarjeta del bloque.
  gradient: string;
  // Ruta a un audio en /public (ej. "/audio/desayuno.mp3"). Sin audio, el reproductor simula la reproducción.
  src?: string;
};

export const blocks: Block[] = [
  {
    id: "desayuno",
    name: "Desayuno",
    hours: "08:00 — 11:00",
    mood: "Café, luz de mañana y algo suave para arrancar.",
    curator: "[CURADOR]",
    gradient: "linear-gradient(160deg, #f0c987 0%, #c9653f 55%, #6d2721 100%)",
  },
  {
    id: "almuerzo",
    name: "Almuerzo",
    hours: "11:00 — 14:00",
    mood: "Más ritmo, mesas llenas, conversación arriba.",
    curator: "[CURADOR]",
    gradient: "linear-gradient(160deg, #e9a46a 0%, #a83c2e 55%, #4a1813 100%)",
  },
  {
    id: "comida",
    name: "Comida",
    hours: "14:00 — 17:00",
    mood: "Sobremesa larga. Groove que no interrumpe.",
    curator: "[CURADOR]",
    gradient: "linear-gradient(160deg, #c7704f 0%, #7e2a24 55%, #2c0f0c 100%)",
  },
  {
    id: "tarde",
    name: "Tarde",
    hours: "17:00 — 21:00",
    mood: "Atardecer, primeras copas, el local cambia de piel.",
    curator: "[CURADOR]",
    gradient: "linear-gradient(160deg, #9b3b4e 0%, #5a1f2e 55%, #1b0b10 100%)",
  },
  {
    id: "sabado-noche",
    name: "Sábado noche",
    hours: "21:00 — cierre",
    mood: "Volumen arriba. La noche es del local.",
    curator: "[CURADOR]",
    gradient: "linear-gradient(160deg, #4b2a6b 0%, #2a1236 55%, #0c0710 100%)",
  },
];
