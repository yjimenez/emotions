import * as React from "react";
import { View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import * as text from "../../text/introduction";
import PVText from "../../components/PVText";
import styles from "./styles";

export default function Introduction({ navigation }: { navigation: any }) {
  const sectionColor = "miedo";
  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PVText style={styles.headerTextAlign} fontType={"headlineH2"}>
            {text.summaryTitle}
          </PVText>
        </View>
        <View style={styles.body}>
          <PVText style={styles.bodyTextAlign} fontType={"normalText"}>
            {text.summaryBody}
          </PVText>
        </View>
        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label="VAMOS"
            onPress={() => navigation.navigate("TreeInfo")}
          />
        </View>
      </View>
    </Background>
  );
}
