const titleHeader = (emotion: string) =>
  `Con que SENTIMIENTO asocias la ${emotion.toUpperCase()}`;

const subHeader = `Lee cuidadosamente y elige el SENTIMIENTO que consideres el más importante.`;

export const popUpHeader = (emotion: string, feeling: string) =>
  `Dato sobre el ${emotion.toUpperCase()} con el sentimiento ${feeling.toUpperCase()} seleccionado`;

export const feelingSelection = (emotion: string) => {
  return {
    sorpresa: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition:
        "SORPRESA: Es la alteración emocional que causa una cosa que no está prevista o no se espera.",
      options: {
        Shock:
          "Resultado de un evento traumático que abruma la facultad que tiene un individuo para hacer frente a las emociones.",
        Asombro:
          "Impresión en el ánimo que alguien o algo causa a una persona, especialmente por alguna cualidad extraordinaria o por ser inesperado.",
        Imprudencia:
          "Falta de juicio, sensatez y cuidado que una persona demuestra en sus acciones.",
        Alerta: "Se aplica a la persona que está atenta, vigilante.",
        Discreción:
          "Reserva o cautela para no decir algo que se sabe o piensa.",
        "Indiscreción vs vergüenza/culpa":
          "Incapacidad para guardar un secreto o para no contar lo que sabe y no hay necesidad de que conozcan los demás.",
        Confusión:
          "Falta de orden o de claridad cuando hay muchas personas o cosas juntas.",
        Atontado:
          "Perturbación momentánea de la capacidad de captar nuestro entorno.",
        Parálisis:
          "Pérdida total o parcial de la capacidad de movimiento (física o emocional) de una o más partes del cuerpo.",
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
        Felicidad:
          "Estado de ánimo de la persona que se encuentra plenamente satisfecha al tener lo que desea o disfrutar de una cosa buena.",
        Llanto: "Manifestación profunda que sobrepasa el equilibrio…",
        "Placer y Nerviosismo":
          "Satisfacción o sensación agradable producida por algo que gusta mucho.",
        "Deleite y Gozo": "Placer del espíritu o los sentidos.",
        "Orgullo Vs soberbia":
          "Sentimiento de satisfacción por un comportamiento bueno o por una obra bien hecha…en el extremo Soberbia.",
        Plenitud: "Momento de mayor importancia o intensidad.",
        Realización:
          "Desarrollo completo de las aspiraciones, posibilidades o deseos de una persona.",
        Satisfacción:
          "Sentimiento de bienestar o placer que se tiene cuando se ha colmado un deseo o cubierto una necesidad.",
      },
    },
    tristeza: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition:
        "TRISTEZA: Sentimiento de dolor anímico producido por un suceso desfavorable que suele manifestarse con un estado de ánimo pesimista, la insatisfacción y la tendencia al llanto. ",
      options: {
        Aflicción: "Tristeza o pérdida del ánimo.",
        Autocompasión:
          "Es el sentimiento de pena hacia uno mismo que experimenta una persona en situaciones percibidas como adversas.",
        Melancolía:
          "Estado anímico permanente, vago y sosegado, de tristeza y desinterés, que surge por causas físicas o morales, por lo general de leve importancia.",
        Desesperanza:
          "Pérdida de la Fé en lograr una cosa o de que se realice algo que se desea.",
        Pena: "Sentimiento de dolor, sufrimiento o tristeza que provoca en una persona un hecho adverso o desgraciado.",
        Soledad:
          "Sentimiento de aislamiento o confinamiento, falta de contacto con otras personas.",
        Nostalgia:
          "Sentimiento de tristeza o pena que causa el estar lejos de la patria o de las personas y lugares queridos.",
        Depresión:
          "Profunda tristeza, decaimiento anímico, baja autoestima, pérdida de interés por todo y disminución de las funciones psíquicas.",
        Duelo:
          "El duelo es el proceso de adaptación emocional que sigue a cualquier pérdida.",
      },
    },
    enojo: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition:
        "ENOJO: Enfado, especialmente el que esta causado por una falta de: obediencia, de obligación o de respeto.",
      options: {
        Control:
          "Actividad que se realiza no sólo a nivel directivo, sino en todos los niveles.",
        Fastidio:
          "Disgusto, molestia o cansancio, debido generalmente a un contratiempo de poca importancia o una situación ligeramente desagradable. Recurrente.",
        Resentimiento:
          "Sentimiento persistente de disgusto o enfado hacia alguien por considerarlo causante de cierta ofensa que destruye.",
        Indignación:
          "Sentimiento de intenso enfado que provoca un acto que se considera injusto, ofensivo o perjudicial.",
        "Dependencia y/o Codependencia":
          "Discapacidad funcional en el desarrollo de las actividades cotidianas condicionada por la felicidad del otro.",
        Traición:
          "Falta grave de lealtad, ofensa contra la amistad y el amor. Acción destructiva y pérdida de la confianza.",
        Apatía: "Dejadez, falta de interés, vigor o energía.",
        Ira: "Manifestación desbordante que se expresa a través del resentimiento, de la furia o de la irritabilidad.",
        "Relacionado a una pérdida":
          "Reacción natural frente al dolor de una pérdida.",
      },
    },
    miedo: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition:
        "MIEDO: Sensación de angustia provocada por la presencia de un peligro real o imaginario.",
      options: {
        "Pavor Patológico": "Temor, con espanto o sobresalto.",
        Desconfianza: "Falta de seguridad en algo, en otro o en si mismo.",
        Ansiedad:
          "Preocupación o inquietud causadas por la inseguridad o el temor, que puede llevar a la angustia.",
        Remordimiento:
          "Sentimiento de culpabilidad que tiene una persona por algo que ha hecho y que la intranquiliza.",
        Preocupación:
          "Estado de desasosiego, inquietud o temor producido ante una situación difícil o un problema previo a la ocupación.",
        Nerviosismo:
          "Estado pasajero de excitación nerviosa, inquietud o de falta de tranquilidad.",
        Inquietud: "Desasosiego, desazón. Alboroto, conmoción.",
        Terror: "Miedo paralizante, espanto, pavor.",
        Depresión:
          "Enfermedad o trastorno mental que se caracteriza por una profunda tristeza, decaimiento anímico, baja autoestima, pérdida de interés por todo y disminución de las funciones psíquicas.",
      },
    },
    repulsion: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition: "REPULSIÓN: Sentimiento de rechazo u oposición.",
      options: {
        Asco: "Denominación de la emoción de fuerte desagrado y disgusto.",
        Celos:
          "Sentimiento que experimenta una persona cuando sospecha que la persona amada siente amor o cariño por otra.",
        Desconfianza: "Falta de seguridad en algo, en otro o en sí mismo.",
        Enemistad:
          "Relación de aversión, odio u oposición entre dos o más personas.",
        Destrucción: "Daño muy grande en una cosa material o inmaterial.",
        Desacuerdo: "Falta de aceptación de una situación, persona u opinión.",
        Desequilibrio: "Pérdida de la estabilidad temporal o permanente.",
        Lejanía: "Circunstancia de estar lejos en el tiempo o en el espacio.",
        Molestia:
          "Persona, animal o cosa que hace perder la tranquilidad o el bienestar o hace que a alguien le resulte incomodo, difícil o más difícil realizar algo.",
      },
    },
    verguenza: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition:
        "VERGÜENZA: Sentimiento de pérdida de dignidad causado por una falta cometida o por una humillación o insultos recibidos.",
      options: {
        Humillación:
          "Ofensa que alguien o algo causa en el orgullo o el honor de una persona.",
        Pena: "Sentimiento de dolor, sufrimiento o tristeza que provoca en una persona un hecho adverso o desgraciado.",
        Dolor:
          "Sentimiento intenso de pena, tristeza o lástima que se experimenta por motivos emocionales o anímicos.",
        Culpa:
          "Falta o delito que comete una persona de forma voluntaria o involuntaria. O bien impuesta transgeneracional o culturalmente  en contra de ella misma.",
        Inseguridad:
          "Sensación de malestar, nerviosismo o temor, incapacidad de continuar en paso siguiente.",
        "Inseguridad Crónica":
          "Sensación de malestar, nerviosismo o temeridad que se repite de manera constante.",
        Mortificación:
          "Circunstancia que desequilibra y produce dolor físico y/o emocional.",
        Desequilibrio:
          "Estado de la persona que ha perdido el equilibrio o la estabilidad mental.",
        Arrepentimiento:
          "Sentimiento de la persona que se arrepiente de haber hecho o dejado de hacer alguna cosa.",
      },
    },
    amor: {
      titleHeader: titleHeader(emotion),
      subHeader,
      definition:
        "AMOR: El amor es un concepto universal relativo a la afinidad entre seres, definido de diversas formas según las diferentes ideologías y puntos de vista.",
      options: {
        Afinidad:
          "Coincidencia de gustos, caracteres u opiniones en dos o más personas.",
        Gratitud:
          "Sentimiento de agradecimiento y reconocimiento que se tiene hacia una persona que ha hecho un favor, un servicio o un bien.",
        Gentileza:
          "Cualidad de la persona que actúa o se comporta con amabilidad, educación o atención hacia los demás.",
        Aceptación: "Consideración generalizada de que algo es bueno o válido.",
        Pasión:
          "Sentimiento muy intenso que domina la voluntad y puede perturbar la razón.",
        Caridad:
          "Sentimiento o actitud que impulsa a interesarse por los demás y a querer ayudar a los necesitados.",
        Dedicación: "Entrega intensa a una actividad determinada.",
        Devoción:
          "Sentimiento de profundo respeto y admiración inspirado por la dignidad, la virtud o los méritos de una persona o causa.",
        Confianza:
          "Impresión u opinión positiva firme que se tiene de que una persona o cosa será o se desarrollará según las expectativas.",
      },
    },
  };
};
