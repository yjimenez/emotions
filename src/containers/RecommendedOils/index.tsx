import { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  View,
  Pressable,
  Linking,
} from "react-native";
import PVText from "../../components/PVText";
import { recommendedOils } from "../../text/recommendedOils";
import { randomNumber } from "../../utils";
import { getBackgroundImage } from "../../utils/getImages";
import EmotionsModal from "../Modal";
import Ionicons from "@expo/vector-icons/Ionicons";
import sections from "../../utils/sections";
import styles from "./styles";
import labels from "../../text/labels";
import { validateEmotionName } from "../../text/feelingSelection";
import { beforeOils, contactModal } from "../../text/mainFlow";

export default function RecommendedOils({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, feeling } = route.params;

  const [modalVisible, setModalVisible] = useState(true);
  const [modalSection, setModalSection] = useState(
    sections.beforeRecommendedOils
  );
  const [image, setImage] = useState(getBackgroundImage()[randomNumber(0, 4)]);

  const selectedEmotion = validateEmotionName(emotion);
  const oilsContent = recommendedOils[selectedEmotion][
    feeling.toLowerCase()
  ] || { description: "NO DESCRIPTION", oils: "NO OILS" };
  const titleColor = oilsContent.titleColor || "blue";

  const modalText = beforeOils(selectedEmotion);
  const modalCustomContent = (
    <View style={styles.modalContent}>
      <View style={styles.modalBody}>
        <PVText style={styles.modalHeader} fontType={"headlineH3"}>
          {`${contactModal.text1}`}
        </PVText>
        <PVText style={styles.modalParraph} fontType={"headlineH4"}>
          {`${contactModal.text2}`}
        </PVText>
        <PVText style={styles.modalParraph} fontType={"headlineH4"}>
          {`${contactModal.text3}`}
        </PVText>
      </View>
      <View style={styles.modalBottom}>
        <View style={styles.iconCall}>
          <Ionicons
            name="home-outline"
            size={styles.modalIconsSize.width}
            color="#fff"
            onPress={() => navigation.navigate("Selection")}
          />
          <Ionicons
            name="logo-whatsapp"
            size={styles.modalIconsSize.width}
            color="#fff"
            onPress={() =>
              Linking.openURL(
                "whatsapp://send?phone=5529192611&text=App Emociones, Hola "
              )
            }
          />
          <Ionicons
            name="chatbubbles-outline"
            size={styles.modalIconsSize.width}
            color="#fff"
            onPress={() => navigation.navigate("Contact")}
          />
        </View>
      </View>
    </View>
  );

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
                  <PVText style={styles.contentText} fontType={"headlineH4"}>
                    {`${oilsContent.description}`}
                  </PVText>
                </ScrollView>
              </View>

              <View style={styles.oilsDetails}>
                <View style={styles.oilsDetailsHeader}>
                  <PVText
                    style={styles.contentTextRecommended}
                    fontType={"headlineH4"}
                  >
                    {`ACEITES ESCENCIALES RECOMENDADOS`}
                  </PVText>
                </View>
                <View style={styles.oilsDetailsBody}>
                  <ScrollView
                    contentContainerStyle={{
                      flexGrow: 1,
                      justifyContent: "center",
                    }}
                  >
                    <PVText style={styles.contentText} fontType={"headlineH4"}>
                      {`${oilsContent.oils}`}
                    </PVText>
                  </ScrollView>
                </View>
              </View>
            </View>
            <View style={styles.buttonsContainer}>
              <Pressable
                style={[styles.buyButton, { backgroundColor: titleColor }]}
                onPress={() => [
                  setModalVisible(true),
                  setModalSection(sections.finalModal),
                ]}
              >
                <Ionicons
                  name="search-outline"
                  size={styles.iconsLensSize.width}
                  color="#fff"
                />
                <PVText style={styles.buyTextButton}>MAS INFORMACIÓN</PVText>
              </Pressable>
            </View>
          </View>
        )}
      </ImageBackground>
      <EmotionsModal
        navigation={navigation}
        modalVisibleProp={modalVisible}
        onCloseModal={async () => setModalVisible(false)}
        emotion={emotion}
        showCloseHeader={modalSection === sections.finalModal}
        size={labels.medium}
        showButton={modalSection !== sections.finalModal}
        fontSize={labels.medium}
        modalText={modalText}
        modalCustomContent={
          modalSection === sections.finalModal ? modalCustomContent : null
        }
      />
    </View>
  );
}
