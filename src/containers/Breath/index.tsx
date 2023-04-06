import React, { useRef } from "react";
import { View, Dimensions, Animated, Easing, StyleSheet } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";

import styles from "./styles";

const { width, height } = Dimensions.get("window");
const circleSize = width / 1.8;
export default function StartImage({
  navigation,
  route,
}: {
  navigation: any;
  route: any;
}) {
  const { emotion, feeling, scaleValue } = route.params;
  const sectionColor = emotion;

  const move = useRef(new Animated.Value(0)).current;
  const inhaleOpacity = useRef(new Animated.Value(0)).current;
  const sostenOpacity = useRef(new Animated.Value(0)).current;
  const exhaleOpacity = useRef(new Animated.Value(0)).current;

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

  Animated.loop(
    Animated.sequence([
      Animated.parallel([
        Animated.timing(inhaleOpacity, textAnimatedIn),
        Animated.timing(move, {
          toValue: 1,
          duration: 4000,
          easing: breathIn,
          useNativeDriver: true,
        }),
      ]),

      Animated.parallel([
        Animated.timing(inhaleOpacity, textAnimatedOut),
        Animated.delay(3000),
        Animated.timing(sostenOpacity, textAnimatedIn),
      ]),

      Animated.parallel([
        Animated.timing(sostenOpacity, textAnimatedOut),
        Animated.timing(exhaleOpacity, textAnimatedIn),
        Animated.timing(move, {
          toValue: 2,
          duration: 6000,
          easing: breathOut,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(exhaleOpacity, textAnimatedOut),
    ])
  ).start();

  const translate = move.interpolate({
    inputRange: [0, 1, 2],
    outputRange: [0, circleSize / 6, 0],
  });

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
                `${item * 45}deg`, //
                `${item * 45 + 180}deg`,
                `${item * 45 + 360}deg`,
              ],
            });
            return (
              <View
                key={item}
                style={{
                  ...StyleSheet.absoluteFill,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Animated.View
                  style={{
                    opacity: 0.15,
                    backgroundColor: "#d600d3",
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
            onPress={() =>
              navigation.navigate("FeelingQuestions", {
                emotion,
                feeling,
                scaleValue,
              })
            }
          />
        </View>
      </View>
    </Background>
  );
}
