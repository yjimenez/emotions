import React, { useState, useEffect } from "react";
import { Dimensions, View } from "react-native";
import CircularSlider from "react-native-rounded-slider";
import * as background from "../../utils/backgroundColors";
import Slider from "@react-native-community/slider";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import InfoModal from "../Modals/InfoModal";
import { emotionScale, emotionSecondScale } from "../../text/mainFlow";
import styles from "./styles";

const { width: screenWidth } = Dimensions.get("window");

export default function EmotionScale({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, feeling, section, scaleValue } = route.params;

  const sectionColor = emotion;
  const secondPosition = section === "second";
  const [currentScaleValue, setValue] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (secondPosition) {
      navigation.setOptions({ headerLeft: () => {} });
    }
  }, [section]);

  const sectionColors = background[emotion];
  const trackColor = sectionColors[sectionColors.length - 1];
  const thumbColor = sectionColors[0];

  const isCircular = true;

  const secondAnswered = () => {
    if (currentScaleValue <= scaleValue) {
      setModalVisible(true);
    } else {
      navigation.navigate("RecommendedOils", { emotion, feeling, scaleValue });
    }
  };

  const onPress = (scaleValue: number) => {
    secondPosition
      ? secondAnswered()
      : navigation.navigate("StartImage", {
          emotion,
          scaleValue,
        });
  };

  const numberSize =
    currentScaleValue === 10
      ? 0.35
      : currentScaleValue === 0
      ? 0.025
      : parseFloat(currentScaleValue * 0.03);

  return (
    <Background containsBottomTab gradientName={sectionColor}>
      <View style={[styles.wrapper, { opacity: modalVisible ? 0.2 : 1 }]}>
        <PVText style={styles.headerText} fontType={"headlineH2"}>
          {secondPosition
            ? emotionSecondScale(emotion.toUpperCase())
            : emotionScale(emotion.toUpperCase())}
        </PVText>
        <View style={styles.numberWrapper}>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            {isCircular ? (
              <View style={styles.circularRotation}>
                <CircularSlider
                  onChange={setValue}
                  size={300}
                  min={0}
                  max={10}
                  trackWidth={10}
                  trackColor={trackColor}
                  thumbColor={thumbColor}
                  thumbWidth={15}
                  steps={1}
                  xCenter={99}
                  element={
                    <PVText
                      style={[
                        styles.circleText,
                        { fontSize: screenWidth * numberSize },
                      ]}
                      fontType={"headlineH2"}
                    >
                      {currentScaleValue}
                    </PVText>
                  }
                />
              </View>
            ) : (
              <>
                <Slider
                  style={{ width: "80%", height: 40 }}
                  step={1}
                  minimumValue={0}
                  maximumValue={10}
                  thumbTintColor={thumbColor}
                  minimumTrackTintColor={trackColor}
                  maximumTrackTintColor="#FFFFFF"
                  onValueChange={setValue}
                />
                <PVText style={styles.sliderLineText} fontType={"headlineH2"}>
                  {currentScaleValue}
                </PVText>
              </>
            )}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <ContinueButton
            sectionColor={sectionColor}
            label="SIGUIENTE"
            onPress={async () => onPress(currentScaleValue)}
          />
        </View>
      </View>
      <InfoModal
        navigation={navigation}
        modalVisibleProp={modalVisible}
        onCloseModal={() => setModalVisible(false)}
        emotion={emotion}
      />
    </Background>
  );
}
