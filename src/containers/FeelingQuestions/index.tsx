import React, { useState } from "react";
import { Pressable, View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import FeelingModal from "../FeelingModal";
import PVText from "../../components/PVText";
import { feelingSelection, popUpHeader } from "../../text/feelingSelection";
import styles from "./styles";

export default function FeelingQuestion({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion } = route.params;
  const sectionColor = emotion;

  return (
    <>
      <Background containsBottomTab gradientName={sectionColor}>
        <View style={styles.wrapper}>
          <View style={styles.container}>
            <PVText style={styles.headerText} fontType={"headlineH2"}>
              AQUI VA LA PREGUNTA
            </PVText>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <ContinueButton
            sectionColor={sectionColor}
            label="SI"
            onPress={() => navigation.navigate("FeelingQuestion", { emotion })}
          />
          <ContinueButton
            sectionColor={sectionColor}
            label="NO"
            onPress={() => navigation.navigate("FeelingQuestion", { emotion })}
          />
        </View>
      </Background>
    </>
  );
}
