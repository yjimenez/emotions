export const getEmotionFaces = (emotion: string) => {
  switch (emotion) {
    case "alegria":
      return require("../../assets/images/faces/alegria.png");
    case "amor":
      return require("../../assets/images/faces/amor.png");
    case "chamarra":
      return require("../../assets/images/faces/chamarra.png");
    case "enojo":
      return require("../../assets/images/faces/enojo.png");
    case "miedo":
      return require("../../assets/images/faces/miedo.png");
    case "principal":
      return require("../../assets/images/faces/principal.png");
    case "repulsion":
      return require("../../assets/images/faces/repulsion.png");
    case "sorpresa":
      return require("../../assets/images/faces/sorpresa.png");
    case "tristeza":
      return require("../../assets/images/faces/tristeza.png");
    case "verguenza":
      return require("../../assets/images/faces/verguenza.png");
    default:
  }
};
