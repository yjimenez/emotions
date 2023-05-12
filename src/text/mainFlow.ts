import { feelingSelection } from "./feelingSelection";
import labels from "./labels";

export const emotionScale = (emotion: string) =>
  `¿En la escala del 1 al 10 que tanta ${emotion} sientes. Donde 1 es nada y 10 es totalmente?`;

export const emotionSecondScale = (emotion: string) =>
  `Despues de este ejercicio, nuevamente del 1 al 10, ¿que tanta ${emotion} sientes ahora?`;

export const getMonsterImage = (emotion: string, int: number) => {
  if (feelingSelection(emotion).type === labels.positive) {
    return {
      image: require("../../assets/images/princess-treasure.png"),
      text: `Visualízalo como ${int} tesoros de tu corazón`,
    };
  }

  if (feelingSelection(emotion).type === labels.negative) {
    return {
      image: require("../../assets/images/5cabezas.png"),
      text: `Visualízalo como ${int} monstruos que están detrás de tu cabeza quitándote el enfoque.`,
    };
  }
};

export const selectionHeader = `¿Que emocion estas experimentando mas intensamente en este momento?`;

export const moreNegativeScale = (emotion: string) =>
  `Si tu ${emotion} no disminuyo, comunícate con nosotros.`;

export const lessPositiveScale = `La intención de hacer este ejercicio es instalarte en las cosas positivas y con ello recorrer tu día a día. 

Las emociones negativas se equilibra con el pensamiento de la emoción positiva. 

Comunícate con nosotros para más información.`;

export const beforeOils = (
  emotion: string
) => `Muchas veces en tu vida, has vivido ${emotion.toUpperCase()}, evoca inhalando y exhalando.

Si tienes alguno de estos aceites inhalalo, por un periodo largo y recurre a tu trabajo personal.`;

export const contactModal = {
  text1: "Si ya estas inscrito a doTERRA acude con tu distribuidor",
  text2: "*Consulta a tu distribuidor favorito",
  text3: `*Si deseas sesión personalizada, pídela al whats: 55 2919 2611`,
};
export const INOModal = {
  titulo: "Tarjetas de Salud Emocional",
  noRegistro: "03-2019-030412404600-14",
  autor: `Julia Patricia Quiroz Rios`,
  tipoTramite: `Registro de Colección de Obra`,
};

export const surpriseQuestion = `¿Tu sorpresa es agradable o desagradable?`;
