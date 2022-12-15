import * as React from "react";
import { View, Image } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { getImage } from "../../utils/getImages";
import styles from "./styles";

export default function Initial({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const sectionColor = "miedo";
  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PVText fontType={"headlineH1"}>APP EMOCIONES</PVText>
          <PVText fontType={"normalText"}>Te damos la bienvenida</PVText>
        </View>
        <View style={styles.body}>
          <Image
            style={styles.imagePrincipal}
            source={getImage().patyPrincipal}
          />
        </View>
        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label="SIGUIENTE"
            onPress={() => navigation.navigate("Summary")}
          />
        </View>
      </View>
    </Background>
  );
}
