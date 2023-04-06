import React, { useState, useEffect } from "react";
import { KeyboardAvoidingView, Platform, AppRegistry } from "react-native";
import StackNavigator from "./src/navigation";
import * as SplashScreen from "expo-splash-screen";
import { cacheFonts, cacheImages } from "./src/feature/loadResources";
import { Text, TextInput } from "react-native";
import { delay } from "./src/utils";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  if (Text.defaultProps == null) {
    Text.defaultProps = {};
    Text.defaultProps.allowFontScaling = false;
  }

  if (TextInput.defaultProps == null) {
    TextInput.defaultProps = {};
    TextInput.defaultProps.allowFontScaling = false;
  }

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();
        const imageAssets = cacheImages();
        const fontAssets = cacheFonts();
        await Promise.all([...imageAssets, ...fontAssets]);
        await delay(3000);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }
    loadResourcesAndDataAsync();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <StackNavigator />
    </KeyboardAvoidingView>
  );
}
