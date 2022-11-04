import * as React from "react";
import { Pressable, View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { emotionScale, emotionSecondScale } from "../../text/mainFlow";
import styles from "./styles";

export default function EmotionScale({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, feeling, value } = route.params;
  const sectionColor = emotion;
  const secondPosition = value === "second";
  const onPress = (value: number) => {
    secondPosition
      ? navigation.navigate("RecommendedOils", { emotion, feeling, value })
      : navigation.navigate("StartImage", { emotion, value });
  };

  const numberArr = [...new Array(10)]
    .map((num, i) => {
      const value = i + 1;
      return (
        <Pressable
          key={i}
          onPress={() => onPress(value)}
          style={styles.numberContainer}
        >
          <PVText style={styles.headerText} fontType={"headlineH2"}>
            {value}
          </PVText>
        </Pressable>
      );
    })
    .reverse();
  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <PVText style={styles.headerText} fontType={"headlineH2"}>
          {secondPosition
            ? emotionSecondScale(emotion.toUpperCase())
            : emotionScale(emotion.toUpperCase())}
        </PVText>
        <View style={styles.numberWrapper}>{numberArr}</View>
      </View>
      {secondPosition ? null : (
        <ContinueButton
          sectionColor={sectionColor}
          label="REGRESAR"
          onPress={() =>
            navigation.navigate("Introduction", { screen: "Selection" })
          }
        />
      )}
    </Background>
  );
}
