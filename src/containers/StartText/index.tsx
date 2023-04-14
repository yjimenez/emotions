import * as React from "react";
import { View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { feelingSelection } from "../../text/feelingSelection";
import styles from "./styles";

export default function StartText({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, label, scaleValue } = route.params;
  const sectionColor = emotion;
  const { goals } = feelingSelection(emotion);

  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.centerText}>
          <PVText style={styles.text} fontType={"headlineH1"}>
            {goals}
          </PVText>
        </View>
        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label="CONTINUAR"
            onPress={() =>
              navigation.navigate("Breath", {
                label,
                emotion,
                section: "emotions",
                scaleValue,
              })
            }
          />
        </View>
      </View>
    </Background>
  );
}
