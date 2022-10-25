import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import StackNavigator from "./src/navigation";
import appIsReady from "./src/feature/loadResources";

export default function App() {
  if (!appIsReady()) {
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
