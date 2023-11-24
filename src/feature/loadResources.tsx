import { Image } from "react-native";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

const imagesArray = [
  require("../../assets/splash.png"),
  require("../../assets/images/logo_paty.png"),
  require("../../assets/images/oils/1.jpg"),
  require("../../assets/images/oils/2.jpg"),
  require("../../assets/images/oils/3.jpg"),
  require("../../assets/images/oils/4.jpg"),
  require("../../assets/images/oils/5.jpg"),
];

const fontsObj = {
  "roboto-regular": require("../../assets/fonts/Roboto/Roboto-Regular.ttf"),
  "roboto-light": require("../../assets/fonts/Roboto/Roboto-Light.ttf"),
  "roboto-bold": require("../../assets/fonts/Roboto/Roboto-Bold.ttf"),
  "roboto-medium": require("../../assets/fonts/Roboto/Roboto-Medium.ttf"),
  "roboto-condensed-bold": require("../../assets/fonts/Roboto/RobotoCondensed-Bold.ttf"),
  "roboto-condensed-regular": require("../../assets/fonts/Roboto/RobotoCondensed-Regular.ttf"),
  "Montserrat-BoldItalic": require("../../assets/fonts/montserrat/Montserrat-BoldItalic.otf"),
  "montserrat-regular": require("../../assets/fonts/montserrat/Montserrat-Regular.otf"),
  "montserrat-bold": require("../../assets/fonts/montserrat/Montserrat-Bold.otf"),
  "montserrat-semibold": require("../../assets/fonts/montserrat/Montserrat-SemiBold.otf"),
};

export function cacheImages() {
  return imagesArray.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export function cacheFonts() {
  return [fontsObj].map((font) => Font.loadAsync(font));
}
