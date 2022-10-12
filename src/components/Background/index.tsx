import * as React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as background from "../../utils/backgroundColors";
import styles from "./styles";

export default function Background(props) {
  const { children, gradientName } = props;
  return (
    <SafeAreaProvider>
      <LinearGradient
        colors={background[gradientName]}
        style={styles.linearGradient}
      >
        <View style={styles.wrapper}>{children}</View>
      </LinearGradient>
    </SafeAreaProvider>
  );
}
