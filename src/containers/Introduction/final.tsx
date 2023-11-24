import React, { useState, useEffect } from "react";
import { View, Animated } from "react-native";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import { summary3 } from "../../text/introduction";
import PVText from "../../components/PVText";
import AN from "../../text/animationValues";
import labels from "../../text/labels";
import styles from "./styles";

export default function Final({ navigation }: { navigation: any; route: any }) {
  const sectionColor = labels.defaultBackColor;
  const [fadeAnim] = useState(new Animated.Value(0));
  const [fadeAnim2] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: AN.durationQuick,
        useNativeDriver: true,
      }),
      Animated.delay(AN.duration),
      Animated.timing(fadeAnim2, {
        toValue: 1,
        duration: AN.durationQuick,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <Animated.View style={[styles.body, { opacity: fadeAnim }]}>
          <PVText style={styles.bodyTextCenterAlign} fontType="headlineH1">
            {summary3}
          </PVText>
        </Animated.View>
        <Animated.View style={[styles.bottom, { opacity: fadeAnim2 }]}>
          <ContinueButton
            sectionColor={sectionColor}
            label="COMENZAR"
            onPress={() => navigation.navigate("TabNavigator")}
          />
        </Animated.View>
      </View>
    </Background>
  );
}
