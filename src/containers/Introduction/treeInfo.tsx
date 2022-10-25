import React, { useRef, useEffect } from "react";
import { View } from "react-native";
import { FadeInView } from "../../animations/fades";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import * as text from "../../text/introduction";
import Ionicons from "@expo/vector-icons/Ionicons";
import styles from "./styles";

export default function Introduction({ navigation }: { navigation: any }) {
  const sectionColor = "fear";

  const boxElm = (
    classStyle: {},
    delay: number,
    duration: number,
    iconName: string,
    text: string
  ) => (
    <FadeInView
      style={{ ...styles.bodyTextBox, ...classStyle }}
      delay={delay}
      duration={duration}
    >
      <View style={styles.iconBox}>
        <Ionicons name={iconName} size={32} color="#fff" />
      </View>
      <PVText style={styles.bodyBoxTextAlign} fontType={"normalText"}>
        {text}
      </PVText>
    </FadeInView>
  );
  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.bodySummary}>
          {boxElm(
            styles.bodyTextBoxRadiusTop,
            200,
            500,
            text.summaryTex1.icon,
            text.summaryTex1.text
          )}
          {boxElm("", 2500, 500, text.summaryTex2.icon, text.summaryTex2.text)}
          {boxElm(
            styles.bodyTextBoxRadiusBottom,
            5000,
            500,
            text.summaryTex3.icon,
            text.summaryTex3.text
          )}
        </View>
        <View style={styles.bottom}>
          <FadeInView delay={7500} duration={500}>
            <ContinueButton
              sectionColor={sectionColor}
              label="COMENZAR"
              onPress={() => navigation.navigate("TabNavigator")}
            />
          </FadeInView>
        </View>
      </View>
    </Background>
  );
}
