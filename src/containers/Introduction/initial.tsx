import * as React from "react";
import { View } from "react-native";
import ImageLoader from "../../animations/imageAnimation";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { getImage } from "../../utils/getImages";
import labels from "../../text/labels";
import styles from "./styles";
import { initialSubTitle, initialTitle } from "../../text/introduction";

export default function Initial({ navigation }: { navigation: any }) {
  const sectionColor = labels.defaultBackColor;
  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PVText fontType={"headlineH1"}>{initialTitle}</PVText>
          <PVText fontType={"normalText"}>{initialSubTitle}</PVText>
        </View>
        <View style={styles.body}>
          <ImageLoader
            source={getImage().patyPrincipal}
            style={styles.imagePrincipal}
          />
        </View>
        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label="SIGUIENTE"
            onPress={() => navigation.navigate("Screen1")}
          />
        </View>
      </View>
    </Background>
  );
}
