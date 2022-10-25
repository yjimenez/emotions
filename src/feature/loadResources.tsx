import { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Asset } from "expo-asset";

const imagesArray = [require("../../assets/images/logo_paty.png")];

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

function cacheImages(images: string[]) {
  return images.map((image) => {
    return Asset.fromModule(image).downloadAsync();
  });
}

function cacheFonts(fonts: [{}]) {
  return fonts.map((font) => Font.loadAsync(font));
}

export default () => {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const imageAssets = cacheImages(imagesArray);
        const fontAssets = cacheFonts([fontsObj]);
        await Promise.all([...imageAssets, ...fontAssets]);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return appIsReady;
};
