import React from "react";
import { Image, View, Pressable } from "react-native";
import Background from "../../components/Background";
import * as text from "../../text/introduction";
import PVText from "../../components/PVText";
import { getEmotionFaces } from "../../utils/getImages";
import styles from "./styles";

export default function Selection({ navigation }: { navigation: any }) {
  const sectionColor = "miedo";

  const elementBox = (emotion: string, label: string) => {
    const image = getEmotionFaces(emotion);
    if (emotion === "sorpresa") {
      return (
        <Pressable
          onPress={() =>
            navigation.navigate("MainFlow", {
              screen: "SurpriseQuestion",
              params: { emotion, label },
            })
          }
          style={[styles.selectionElement]}
        >
          <Image style={styles.emotionFace} source={image} />
        </Pressable>
      );
    }

    return (
      <Pressable
        onPress={() =>
          navigation.navigate("MainFlow", {
            screen: "StartText",
            params: { emotion, label },
          })
        }
        style={[styles.selectionElement]}
      >
        <Image style={styles.emotionFace} source={image} />
      </Pressable>
    );
  };

  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PVText
            style={styles.headerSelectionTextAlign}
            fontType={"headlineH3"}
          >
            {text.selectionHeader}
          </PVText>
        </View>

        <View style={styles.body}>
          <View style={styles.selectionRow}>
            {elementBox("sorpresa", `SORPRESA`)}
          </View>

          <View style={styles.selectionRow}>
            {elementBox("alegria", `ALEGRIA`)}
            {elementBox("tristeza", `TRISTEZA`)}
          </View>

          <View style={styles.selectionRow}>
            {elementBox("enojo", `ENOJO`)}
            {elementBox("miedo", `MIEDO`)}
          </View>

          <View style={styles.selectionRow}>
            {elementBox("repulsion", `REPULSION`)}
            {elementBox("verguenza", `VERGUENZA`)}
          </View>

          <View style={styles.selectionRow}>{elementBox("amor", `AMOR`)}</View>
        </View>
      </View>
    </Background>
  );
}
