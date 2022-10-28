import * as React from "react";
import { View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import styles from "./styles";

export default function Contact({ navigation }: { navigation: any }) {
  const sectionColor = "miedo";
  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <PVText style={styles.headlineH1}>Contact</PVText>
      </View>
      <ContinueButton
        sectionColor={sectionColor}
        label="INITIAL SCREEN"
        onPress={() =>
          navigation.navigate("Introduction", { screen: "Initial" })
        }
      />
    </Background>
  );
}
