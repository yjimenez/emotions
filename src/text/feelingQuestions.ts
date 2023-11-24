export const feelingQuestions = (emotion: string) => {
  return {
    sorpresa: [
      {
        question: "Lo que te está sucediendo, ¿lo esperabas?",
        options: ["SI", "NO"],
      },
      {
        question: "¿Es un evento Favorable o Desfavorable?",
        options: ["FAVORABLE", "DESFAVORABLE"],
      },
    ],
    alegria: [
      { question: "¿Es por qué sucedió algo hermoso?", options: ["SI", "NO"] },
      {
        question: "¿Es por qué obtuviste lo que deseabas?",
        options: ["SI", "NO"],
      },
    ],
    tristeza: [
      {
        question: "¿Perdiste algo muy importante que considerabas tuyo?",
        options: ["SI", "NO"],
      },
      { question: "¿Es un objeto o persona? ", options: ["OBJETO", "PERSONA"] },
      {
        question: "¿Es de tu propiedad?",
        options: ["SI", "NO"],
      },
      {
        question: "¿Creíste que era de tu propiedad?",
        options: ["SI", "NO"],
      },
    ],
    enojo: [
      {
        question: "La persona que te enoja ¿te debe obediencia?",
        options: ["SI", "NO"],
      },
      {
        question:
          "La persona que te enoja ¿tiene la obligación de hacerte feliz?",
        options: ["SI", "NO"],
      },
      {
        question:
          "¿Has firmado un contrato para que esa persona haga exactamente lo que tu deseas?",
        options: ["SI", "NO"],
      },
    ],
    miedo: [
      {
        question: "¿Lo que te está sucediendo es una amenaza?",
        options: ["SI", "NO"],
      },
      {
        question: "¿Es la presencia de un peligro latente?",
        options: ["SI", "NO"],
      },
      {
        question: "¿Tu peligro es real o es imaginario?",
        options: ["REAL", "IMAGINARIO"],
      },
    ],
    repulsion: [
      {
        question: "¿Rechazas a algo o alguien?",
        options: ["ALGO", "ALGUIEN"],
      },
      {
        question: "¿Eso que rechazas es tuyo o influenciado por otro? ",
        options: ["TUYO", "INFLUENCIADO"],
      },
      { question: "¿Algo que te gustaría finalizar?", options: ["SI", "NO"] },
      { question: "¿Podría ser un tema heredado?", options: ["SI", "NO"] },
    ],
    verguenza: [
      {
        question: "¿Hiciste algo que consideras grabe?",
        options: ["SI", "NO"],
      },
      {
        question: "¿Lo decidiste tu o alguien por ti?",
        options: ["YO", "ALGUIEN MÁS"],
      },
      {
        question: "¿Recibiste o proferiste un insulto o acto doloroso? ",
        options: ["SI", "NO"],
      },
      { question: "¿Eres capaz de reconocerlo?", options: ["SI", "NO"] },
      { question: "¿Quieres Arreglarlo?", options: ["SI", "NO"] },
      { question: "¿Sigo Sufriendo?", options: ["SI", "NO"] },
      { question: "¿Me perdono?", options: ["SI", "NO"] },
    ],
    amor: [
      {
        question: "¿Amas tanto que lo consideras tu placer?",
        options: ["SI", "NO"],
      },
      { question: "¿Necesitas amar y ser amado?", options: ["SI", "NO"] },
    ],
  };
};
