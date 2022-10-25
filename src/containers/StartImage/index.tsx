import * as React from "react";
import { View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import styles from "./styles";

export default function StartImage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, label } = route.params;
  const sectionColor = emotion;

  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <PVText style={styles.headlineH1}>{label}</PVText>
      </View>
      <ContinueButton
        sectionColor={sectionColor}
        label="SELECT EMOTION"
        onPress={() =>
          navigation.navigate("Introduction", { screen: "Selection" })
        }
      />
    </Background>
  );
}
