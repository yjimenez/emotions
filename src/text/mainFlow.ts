export const emotionScale = (emotion: string) =>
  `¿En la escala del 1 al 10 que tanta ${emotion} sientes. Donde 1 es nada y 10 es totalmente?`;

export const emotionSecondScale = (emotion: string) =>
  `Despues de este ejercicio, nuevamente del 1 al 10, ¿que tanta ${emotion} sientes ahora?`;

const treasureImage = ["amor", "alegria", "corazon"];
export const getMonsterImage = (emotion: string, int: number) => {
  if (treasureImage.includes(emotion)) {
    return {
      image: require("../../assets/images/princess-treasure.png"),
      text: `Visualizalo como ${int} Tesoros de tu corazon`,
    };
  }
  return {
    image: require("../../assets/images/5cabezas.png"),
    text: `Visualizalo como ${int} Monstruos estan atras de tu cabeza`,
  };
};

export const selectionHeader = `¿Que emocion estas experimentando mas intensamente en este momento?`;
