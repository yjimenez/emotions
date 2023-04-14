import * as React from "react";
import { Animated, View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { feelingSelection } from "../../text/feelingSelection";
import labels from "../../text/labels";
import styles from "./styles";

export default function StartText({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion: selectedEmotion, label, scaleValue } = route.params;
  const sectionColor = selectedEmotion;
  const { emotion, oppositeEmotion, type, goals } =
    feelingSelection(selectedEmotion);

  const scaleText = new Animated.Value(1);

  Animated.loop(
    Animated.sequence([
      Animated.timing(scaleText, {
        toValue: 1.25,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(scaleText, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ])
  ).start();

  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.centerText}>
          <PVText style={styles.text} fontType={"headlineH1"}>
            {goals}
          </PVText>
          <Animated.View style={{ transform: [{ scale: scaleText }] }}>
            <PVText style={styles.text} fontType={"headlineH1"}>
              {type === labels.positive
                ? emotion.toUpperCase()
                : oppositeEmotion.toUpperCase()}
            </PVText>
          </Animated.View>
        </View>
        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label="CONTINUAR"
            onPress={() =>
              navigation.navigate("Breath", {
                label,
                emotion: selectedEmotion,
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
