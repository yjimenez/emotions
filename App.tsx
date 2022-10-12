import React from "react";
import { KeyboardAvoidingView, Platform } from "react-native";
import StackNavigator from "./src/navigation";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <StackNavigator />
    </KeyboardAvoidingView>
  );
}
