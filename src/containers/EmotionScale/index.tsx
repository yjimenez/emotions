import React, { useState, useEffect } from "react";
import {
  Dimensions,
  View,
  Platform,
  PlatformIOSStatic,
  PixelRatio,
} from "react-native";
import CircularSlider from "../../animations/circularSlider";
import * as background from "../../utils/backgroundColors";
import Slider from "@react-native-community/slider";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import {
  emotionScale,
  emotionSecondScale,
  moreNegativeScale,
  lessPositiveScale,
  selectEmotionScale,
} from "../../text/mainFlow";
import { feelingSelection } from "../../text/feelingSelection";
import styles from "./styles";
import EmotionsModal from "../Modal";
import labels from "../../text/labels";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

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

  const platformIOS = Platform as PlatformIOSStatic;
  const isIpad = platformIOS.isPad;

  const circleSize = isIpad
    ? PixelRatio.roundToNearestPixel(600)
    : PixelRatio.roundToNearestPixel(280);
  const circleWidth = isIpad
    ? PixelRatio.roundToNearestPixel(25)
    : PixelRatio.roundToNearestPixel(12);

  const [currentScaleValue, setValue] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalProps, setModalProps] = useState({
    modalSize: "",
    modalFontSize: "",
    modalText: "",
    modalOnPress: () => {},
    modalButtonLabel: "CONTINUAR",
    showCloseHeader: true,
  });
  const feelingType = feelingSelection(emotion).type;
  const emotionLabel = feelingSelection(emotion).emotion;

  const sectionColors = background[emotion];
  const trackColor = sectionColors[sectionColors.length - 1];
  const thumbColor = sectionColors[0];

  const isCircular = true;

  useEffect(() => {
    if (scaleValue) {
      setValue(scaleValue);
    }
  }, [scaleValue]);

  const firstAnswers = (scaleValue: number) => {
    if (scaleValue === 0) {
      setModalProps({
        modalSize: labels.small,
        modalFontSize: labels.medium,
        modalText: selectEmotionScale,
        modalOnPress: () => setModalVisible(false),
        modalButtonLabel: "REGRESAR",
        showCloseHeader: false,
      });
      setModalVisible(true);
      return;
    }
    navigation.navigate("StartImage", {
      emotion,
      scaleValue,
    });
  };

  const secondAnswered = () => {
    if (feelingType === labels.positive) {
      if (currentScaleValue <= scaleValue) {
        setModalProps({
          modalSize: labels.medium,
          modalFontSize: labels.small,
          modalText: lessPositiveScale,
          modalOnPress: () => navigation.navigate("Contact"),
          modalButtonLabel: "CONTÁCTANOS",
          showCloseHeader: true,
        });
        setModalVisible(true);
        return;
      }
    }

    if (feelingType === labels.negative) {
      if (currentScaleValue >= scaleValue) {
        setModalProps({
          modalSize: labels.small,
          modalFontSize: labels.medium,
          modalText: moreNegativeScale(emotionLabel.toUpperCase()),
          modalOnPress: () => navigation.navigate("Contact"),
          modalButtonLabel: "CONTÁCTANOS",
          showCloseHeader: true,
        });
        setModalVisible(true);
        return;
      }
    }

    navigation.navigate("RecommendedOils", {
      emotion,
      feeling,
      scaleValue,
    });
  };

  const onPress = (scaleValue: number) => {
    secondPosition ? secondAnswered() : firstAnswers(scaleValue);
  };

  const numberSize =
    currentScaleValue === 10
      ? 0.35
      : currentScaleValue === 0
      ? 0.025
      : currentScaleValue * 0.03;

  return (
    <Background gradientName={sectionColor}>
      <View style={[styles.wrapper, { opacity: modalVisible ? 0.2 : 1 }]}>
        <View style={styles.header}>
          <PVText style={styles.headerText} fontType={"headlineH3"}>
            {secondPosition
              ? emotionSecondScale(emotionLabel.toUpperCase())
              : emotionScale(emotionLabel.toUpperCase())}
          </PVText>
        </View>
        <View style={styles.body}>
          <View style={styles.numberWrapper}>
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {isCircular ? (
                <View>
                  <CircularSlider
                    onChange={setValue}
                    size={circleSize}
                    min={0}
                    max={10}
                    trackWidth={circleWidth}
                    trackColor={trackColor}
                    thumbColor={thumbColor}
                    thumbWidth={circleWidth}
                    steps={1}
                    xCenter={99}
                    value={scaleValue}
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
        </View>
        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label="SIGUIENTE"
            onPress={async () => onPress(currentScaleValue)}
          />
        </View>
      </View>
      <EmotionsModal
        navigation={navigation}
        modalVisibleProp={modalVisible}
        onCloseModal={() => setModalVisible(false)}
        emotion={emotion}
        showCloseHeader={modalProps.showCloseHeader}
        size={modalProps.modalSize}
        fontSize={modalProps.modalFontSize}
        buttonLabel={modalProps.modalButtonLabel}
        onPressButton={() => modalProps.modalOnPress()}
        modalText={modalProps.modalText}
        showButton
        modalCustomContent={undefined}
        section=""
      />
    </Background>
  );
}
