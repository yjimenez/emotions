import * as React from "react";
import { View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { surpriseQuestion } from "../../text/mainFlow";
import styles from "./styles";

export default function SurpriseQuestion({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { label, scaleValue } = route.params;
  const sectionColor = "sorpresaPositivo";

  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.centerText}>
          <PVText style={styles.text} fontType={"headlineH1"}>
            {surpriseQuestion}
          </PVText>
        </View>

        <View style={styles.buttonsContainer}>
          <ContinueButton
            sectionColor={sectionColor}
            label="AGRADABLE"
            customStyle={styles.marginBottom}
            onPress={() =>
              navigation.navigate("Breath", {
                label,
                emotion: "sorpresaPositivo",
                section: "emotions",
                scaleValue,
              })
            }
          />
          <ContinueButton
            sectionColor={sectionColor}
            label="DESAGRADABLE"
            onPress={() =>
              navigation.navigate("Breath", {
                label,
                emotion: "sorpresaNegativo",
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
