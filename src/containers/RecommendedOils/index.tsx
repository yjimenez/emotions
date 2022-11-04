import { useState } from "react";
import { ImageBackground, Pressable, View } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { recommendedOils } from "../../text/recommendedOils";
import styles from "./styles";

export default function RecommendedOils({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, feeling } = route.params;
  const sectionColor = emotion;

  const oilsContent = recommendedOils(emotion)[emotion][
    feeling.toLowerCase()
  ] || { description: "NO DESCRIPTION", oils: "NO OILS" };

  console.log("feelingSelection(emotion)[emotion]", oilsContent);
  const onPress = (feeling: string, feelingDescription: string) => (
    setModalContent({
      emotionHeader: popUpHeader(emotion, feeling),
      definition,
      feeling,
      feelingDescription,
    }),
    setModalVisible(true)
  );

  const image = require("../../../assets/images/bottles-of-rosemary-pine-thyme-mint-essential-oil-on-gray-background-top-view-copy-space.jpg");
  return (
    <View style={styles.imageWrapper}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.wrapper}>
          <View style={styles.header}>
            <PVText style={styles.headerText} fontType={"headlineH2"}>
              {`${emotion.toUpperCase()} - ${oilsContent.description}`}
            </PVText>
          </View>
          <View style={styles.oilsContent}>
            <PVText style={styles.headerText} fontType={"headlineH3"}>
              {`${feeling.toUpperCase()} - ${oilsContent.oils}`}
            </PVText>
          </View>
          <ContinueButton
            sectionColor={sectionColor}
            label="COMENZAR"
            onPress={() =>
              navigation.navigate("Introduction", { screen: "Selection" })
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}
