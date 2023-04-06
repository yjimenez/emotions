import * as React from "react";
import { View } from "react-native";
import ImageLoader from "../../animations/imageAnimation";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { getMonsterImage } from "../../text/mainFlow";
import styles from "./styles";

export default function StartImage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, scaleValue } = route.params;
  const sectionColor = emotion;
  const { image, text } = getMonsterImage(emotion, scaleValue);
  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <ImageLoader source={image} />
        <PVText style={styles.imageText} fontType={"headlineH2"}>
          {text}
        </PVText>
        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label="CONTINUAR"
            onPress={() =>
              navigation.navigate("FeelingQuestion", {
                emotion,
                scaleValue,
              })
            }
          />
        </View>
      </View>
    </Background>
  );
}
