const titleHeader = (emotion: string) =>
  `Con que SENTIMIENTO asocias la ${emotion.toUpperCase()}`;

const subHeader = `Escoge hasta 4 SENTIMIENTOS que consideres los mas importantes para esa EMOCION.`;

export const popUpHeader = (emotion: string, feeling: string) =>
  `Dato sobre el ${emotion.toUpperCase()} con el semtimiento ${feeling.toUpperCase()} seleccionado`;

export const feelingSelection = (emotion: string) => {
  return {
    sorpresa: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition:
        "Es la alteración emocional que causa una cosa que no está prevista o no se espera.",
      options: {
        Shock:
          "Resultado de un evento traumático que abruma la facultad que tiene un individuopara hacer frente a las emociones.",
        Asombro: "",
        Imprudencia: "",
        Alerta: "",
        Indiscreción: "",
        Discreción: "",
        Confusion: "",
        Atontado: "",
        Parálisis: "",
      },
    },
    alegria: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition:
        "ALEGRIA: Sentimiento de placer que tiene una persona cuando se produce un suceso favorable o cuando obtiene una cosa que deseaba.",
      options: {
        Gratitud:
          "Deseo de corresponder a una persona por un servicio prestado o hecho favorable.",
        Felicidad: "",
        Llanto: "",
        Deleite: "",
        "Orgullo vs Soberbia": "",
        "Placer y Nerviosismo": "",
        Plenitud: "",
        Satisfaccion: "",
        Realizacion: "",
      },
    },
    tristeza: {
      titleHeader: titleHeader(emotion),
      subHeader,
      options: {},
    },
    enojo: {
      titleHeader: titleHeader(emotion),
      subHeader,
      options: {},
    },
    miedo: {
      titleHeader: titleHeader(emotion),
      subHeader,
      options: {},
    },
    repulsion: {
      titleHeader: titleHeader(emotion),
      subHeader,
      options: {},
    },
    verguenza: {
      titleHeader: titleHeader(emotion),
      subHeader,
      options: {},
    },
    amor: {
      titleHeader: titleHeader(emotion),
      subHeader,
      options: {},
    },
  };
};
