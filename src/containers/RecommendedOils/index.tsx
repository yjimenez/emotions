import { useState } from "react";
import { ImageBackground, ScrollView, View, Pressable } from "react-native";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import { recommendedOils } from "../../text/recommendedOils";
import { randomNumber } from "../../utils";
import { getBackgroundImage } from "../../utils/getImages";
import MoreInfoModal from "../../containers/MoreInfoModal";
import Ionicons from "@expo/vector-icons/Ionicons";
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

  const [modalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(getBackgroundImage()[randomNumber(0, 4)]);

  const oilsContent = recommendedOils(emotion)[emotion][
    feeling.toLowerCase()
  ] || { description: "NO DESCRIPTION", oils: "NO OILS" };
  const titleColor = oilsContent.titleColor || "blue";

  return (
    <View style={styles.imageWrapper}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        blurRadius={modalVisible ? 20 : 1}
        style={styles.image}
      >
        {modalVisible ? null : (
          <View style={styles.wrapper}>
            <View
              style={[styles.headerEmotion, { backgroundColor: titleColor }]}
            >
              <PVText style={styles.headerText} fontType={"headlineH2"}>
                {`${feeling.toUpperCase()}`}
              </PVText>
            </View>
            <View style={styles.oilsContent}>
              <View style={styles.oilsDescription}>
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                >
                  <PVText style={styles.contentText} fontType={"headlineH2"}>
                    {`${oilsContent.description}`}
                  </PVText>
                </ScrollView>
              </View>

              <View style={styles.oilsDetails}>
                <PVText
                  style={styles.contentTextRecommended}
                  fontType={"headlineH3"}
                >
                  {`ACEITES ESCENCIALES RECOMENDADOS`}
                </PVText>
                <ScrollView
                  contentContainerStyle={{
                    flexGrow: 1,
                    justifyContent: "center",
                  }}
                >
                  <PVText style={styles.contentText} fontType={"headlineH3"}>
                    {`${oilsContent.oils}`}
                  </PVText>
                </ScrollView>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <Pressable
                style={[styles.buyButton, { backgroundColor: titleColor }]}
                onPress={() => setModalVisible(true)}
              >
                <Ionicons name="search-outline" size={25} color="#fff" />
                <PVText style={styles.buyTextButton}>MAS INFORMACIÓN</PVText>
              </Pressable>
            </View>
          </View>
        )}
      </ImageBackground>
      <MoreInfoModal
        navigation={navigation}
        modalVisibleProp={modalVisible}
        onCloseModal={() => setModalVisible(false)}
        emotion={emotion}
        image={image}
        titleColor={titleColor}
      />
    </View>
  );
}
