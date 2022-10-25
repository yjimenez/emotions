import * as React from "react";
import { View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as background from "../../utils/backgroundColors";
import styles from "./styles";

interface Props {
  children: React.ReactNode;
  gradientName: string;
  containsBottomTab?: boolean;
}

export default function Background(props: Props) {
  const { children, gradientName, containsBottomTab } = props;
  const colors = background[gradientName] || background["fear"];
  return (
    <SafeAreaProvider>
      <LinearGradient colors={colors} style={styles.linearGradient}>
        <View
          style={containsBottomTab ? styles.wrapperBottomBar : styles.wrapper}
        >
          {children}
        </View>
      </LinearGradient>
    </SafeAreaProvider>
  );
}
