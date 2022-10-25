import * as React from "react";
import { Pressable, View } from "react-native";
import Background from "../../components/Background";
import * as text from "../../text/introduction";
import PVText from "../../components/PVText";
import styles from "./styles";

export default function Introduction({ navigation }: { navigation: any }) {
  const sectionColor = "fear";

  const elementBox = (emotion: string, label: string) => (
    <Pressable
      onPress={() =>
        navigation.navigate("MainFlow", {
          screen: "StartImage",
          params: { emotion, label },
        })
      }
      style={styles.selectionElement}
    >
      <PVText fontType={"normalText"}>{label}</PVText>
    </Pressable>
  );

  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.headerSelector}>
          <PVText style={styles.headerTextAlign} fontType={"headlineH2"}>
            {text.selectionHeader}
          </PVText>
        </View>

        <View style={styles.cardsBody}>
          <View style={styles.selectionRow}>
            {elementBox("surprise", `SORPRESA`)}
          </View>

          <View style={styles.selectionRow}>
            {elementBox("happiness", `ALEGRIA`)}
            {elementBox("sadness", `TRISTEZA`)}
          </View>

          <View style={styles.selectionRow}>
            {elementBox("anger", `ENOJO`)}
            {elementBox("fear", `MIEDO`)}
          </View>

          <View style={styles.selectionRow}>
            {elementBox("repulsion", `REPULSION`)}
            {elementBox("shame", `VERGUENZA`)}
          </View>

          <View style={styles.selectionRow}>{elementBox("love", `AMOR`)}</View>
        </View>
      </View>
    </Background>
  );
}
