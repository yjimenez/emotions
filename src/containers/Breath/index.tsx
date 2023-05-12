import React, { useEffect, useRef } from "react";
import { View, Dimensions, Animated, Easing, StyleSheet } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import styles from "./styles";

const { width } = Dimensions.get("window");
const circleSize = width / 1.9;
export default function StartImage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { label, emotion, feeling, section, scaleValue } = route.params;
  const sectionColor = emotion;

  const move = useRef(new Animated.Value(0)).current;
  const inhaleOpacity = useRef(new Animated.Value(0)).current;
  const sostenOpacity = useRef(new Animated.Value(0)).current;
  const exhaleOpacity = useRef(new Animated.Value(0)).current;

  const resetAnimations = () => {
    move.setValue(0);
    inhaleOpacity.setValue(0);
    sostenOpacity.setValue(0);
    exhaleOpacity.setValue(0);
  };

  const breathIn = Easing.out(Easing.sin);
  const breathOut = Easing.in(Easing.sin);

  const textAnimatedIn = {
    toValue: 1,
    duration: 1000,
    easing: Easing.ease,
    useNativeDriver: true,
  };

  const textAnimatedOut = {
    toValue: 0,
    duration: 300,
    easing: Easing.ease,
    useNativeDriver: true,
  };

  const onStartAnimated = () => {
    resetAnimations();
    Animated.loop(
      Animated.sequence([
        Animated.parallel([
          Animated.timing(inhaleOpacity, textAnimatedIn),
          Animated.timing(move, {
            toValue: 1,
            duration: 2500,
            easing: breathIn,
            useNativeDriver: true,
          }),
        ]),

        Animated.parallel([
          Animated.timing(inhaleOpacity, textAnimatedOut),
          Animated.timing(sostenOpacity, textAnimatedIn),
          Animated.delay(2000),
        ]),

        Animated.parallel([
          Animated.timing(sostenOpacity, textAnimatedOut),
          Animated.timing(exhaleOpacity, textAnimatedIn),
          Animated.timing(move, {
            toValue: 2,
            duration: 3500,
            easing: breathOut,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(exhaleOpacity, textAnimatedOut),
      ])
    ).start();
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      onStartAnimated();
    });
    return unsubscribe;
  }, [section]);

  const translate = move.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, circleSize / 6, 0],
  });

  const onPressBtn = () => {
    move.stopAnimation();
    if (section === "emotions") {
      return navigation.navigate("MainFlow", {
        screen: "EmotionScale",
        params: { emotion, label },
      });
    }
    if (section === "second") {
      return navigation.navigate("EmotionScale", {
        emotion,
        feeling,
        section: "second",
        scaleValue,
      });
    }

    return navigation.navigate("FeelingQuestions", {
      emotion,
      feeling,
      scaleValue,
    });
  };

  const breathColor = ["enojo"].includes(emotion) ? "#fff" : "#d600d3";

  console.log("breathColor", breathColor);
  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.content}>
          <View style={styles.breathContentText}>
            <Animated.View style={[{ opacity: inhaleOpacity }]}>
              <PVText style={styles.breathText} fontType={"headlineH1"}>
                Inhala
              </PVText>
            </Animated.View>
            <Animated.View style={[{ opacity: sostenOpacity }]}>
              <PVText style={styles.breathText} fontType={"headlineH1"}>
                Sostén
              </PVText>
            </Animated.View>
            <Animated.View style={[{ opacity: exhaleOpacity }]}>
              <PVText style={styles.breathText} fontType={"headlineH1"}>
                Exhala
              </PVText>
            </Animated.View>
          </View>

          {[0, 1, 2, 3, 4, 5, 6, 7].map((item) => {
            const rotation = move.interpolate({
              inputRange: [0, 1, 2],
              outputRange: [
                `${item * 45}deg`,
                `${item * 45 + 180}deg`,
                `${item * 45 + 360}deg`,
              ],
            });
            return (
              <View
                key={item}
                style={[
                  styles.breathAnimation,
                  {
                    ...StyleSheet.absoluteFill,
                    alignItems: "center",
                    justifyContent: "center",
                  },
                ]}
              >
                <Animated.View
                  style={{
                    opacity: 0.15,
                    backgroundColor: breathColor,
                    width: circleSize,
                    height: circleSize,
                    borderRadius: circleSize / 2,
                    transform: [
                      {
                        rotateZ: rotation,
                      },
                      { translateX: translate },
                      { translateY: translate },
                    ],
                  }}
                />
              </View>
            );
          })}
        </View>
        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label="CONTINUAR"
            onPress={onPressBtn}
          />
        </View>
      </View>
    </Background>
  );
}
