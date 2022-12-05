import { ImageBackground, View } from "react-native";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { recommendedOils } from "../../text/recommendedOils";
import { getBackgroundImage } from "../../utils/getImages";
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
  const titleColor = oilsContent.titleColor || "blue";

  const image = getBackgroundImage()[0];
  return (
    <View style={styles.imageWrapper}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.wrapper}>
          <View style={[styles.headerEmotion, { backgroundColor: titleColor }]}>
            <PVText style={styles.headerText} fontType={"headlineH2"}>
              {`${feeling.toUpperCase()}`}
            </PVText>
          </View>
          <View style={styles.oilsContent}>
            <View style={styles.oilsDescription}>
              <PVText style={styles.contentText} fontType={"headlineH2"}>
                {` ${oilsContent.description}`}
              </PVText>
            </View>
            <View style={styles.oilsDetails}>
              <PVText
                style={styles.contentTextRecommended}
                fontType={"headlineH3"}
              >
                {`ACEITES ESCENCIALES RECOMENDADOS`}
              </PVText>
              <PVText style={styles.contentText} fontType={"headlineH3"}>
                {`${oilsContent.oils}`}
              </PVText>
            </View>
          </View>
        </View>
        <View style={styles.buttonsContainer}>
          <ContinueButton
            sectionColor={sectionColor}
            label="FINALIZAR"
            onPress={() =>
              navigation.navigate("Introduction", { screen: "Selection" })
            }
          />
        </View>
      </ImageBackground>
    </View>
  );
}
