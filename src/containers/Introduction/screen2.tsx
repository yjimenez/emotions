import React, { useEffect } from "react";
import { View, Animated, Easing } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import { summary2, screen2Title } from "../../text/introduction";
import PVText from "../../components/PVText";
import labels from "../../text/labels";
import AN from "../../text/animationValues";
import styles from "./styles";

export default function Screen2({
  navigation,
}: {
  navigation: any;
  route: any;
}) {
  const sectionColor = labels.defaultBackColor;

  const animated = new Animated.Value(-1000);
  const animated2 = new Animated.Value(-1000);
  const animated3 = new Animated.Value(-1000);
  const animated4 = new Animated.Value(0);

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animated, {
        toValue: 0,
        duration: AN.duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.delay(AN.delayDuration),
      Animated.timing(animated2, {
        toValue: 0,
        duration: AN.duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.delay(AN.delayDuration),
      Animated.timing(animated3, {
        toValue: 0,
        duration: AN.duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.delay(AN.delayDuration),
      Animated.timing(animated4, {
        toValue: 1,
        duration: AN.durationQuick,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <PVText style={styles.headerTextAlign} fontType={"headlineH2"}>
            {screen2Title}
          </PVText>
        </View>
        <View style={styles.body}>
          <Animated.View
            style={[
              styles.bodyTextAlign,
              { transform: [{ translateX: animated }] },
            ]}
          >
            <PVText style={styles.parraph} fontType={"normalText"}>
              {summary2.parraph1}
            </PVText>
          </Animated.View>
          <Animated.View
            style={[
              styles.bodyTextAlign,
              { transform: [{ translateX: animated2 }] },
            ]}
          >
            <PVText style={styles.parraph} fontType={"normalText"}>
              {summary2.parraph2}
            </PVText>
          </Animated.View>
          <Animated.View
            style={[
              styles.bodyTextAlign,
              { transform: [{ translateX: animated3 }] },
            ]}
          >
            <PVText style={styles.parraph} fontType={"normalText"}>
              {summary2.parraph3}
            </PVText>
          </Animated.View>
        </View>
        <Animated.View style={[styles.bottom, { opacity: animated4 }]}>
          <ContinueButton
            sectionColor={sectionColor}
            label={"SIGUIENTE"}
            onPress={() => navigation.navigate("Final")}
          />
        </Animated.View>
      </View>
    </Background>
  );
}
