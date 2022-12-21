import * as React from "react";
import { View, Image } from "react-native";
import ImageLoader from "./imageAnimation";
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
  const { emotion, value } = route.params;
  const sectionColor = emotion;
  const { image, text } = getMonsterImage(emotion, value);
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
              navigation.navigate("FeelingQuestion", { emotion, value })
            }
          />
        </View>
      </View>
    </Background>
  );
}
