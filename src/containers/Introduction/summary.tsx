import * as React from "react";
import { View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import styles from "./styles";

export default function Introduction({ navigation }) {
  return (
    <Background gradientName={navigation.getId()}>
      <View style={styles.wrapper}>
        <PVText style={styles.headlineH1}>Summary</PVText>
        <ContinueButton
          label="GO TO TREE INFO"
          onPress={() => navigation.navigate("TreeInfo")}
        />
      </View>
    </Background>
  );
}
