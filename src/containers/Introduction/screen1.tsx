import React, { useRef, useEffect, useState } from "react";
import { View, Platform, Animated, Easing } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import Background from "../../components/Background";
import ContinueButton from "../../components/ContinueButton";
import PVText from "../../components/PVText";
import labels from "../../text/labels";
import AN from "../../text/animationValues";
import styles from "./styles";
import {
  screen1Title,
  summary1,
  summaryTex1,
  summaryTex2,
  summaryTex3,
} from "../../text/introduction";

export default function Screen1({
  navigation,
}: {
  navigation: any;
  route: any;
}) {
  const sectionColor = labels.defaultBackColor;
  const isAndroid = Platform.OS === "android";

  const content1Animated = useRef(new Animated.Value(0)).current;
  const content2Animated = useRef(new Animated.Value(-500)).current;
  const animated = new Animated.Value(-500);
  const animated2 = new Animated.Value(-500);
  const animated3 = new Animated.Value(-500);
  const appear = useRef(new Animated.Value(0)).current;
  const appear2 = useRef(new Animated.Value(0)).current;
  const appear3 = useRef(new Animated.Value(0)).current;

  const [buttonProps, setButtonProps] = useState({
    onPress: () => {},
    title: labels.vamos,
  });

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
    ]).start((finished) => {
      if (finished) {
        setButtonProps({
          onPress: async () => onChangeContent(),
          title: labels.vamos,
        });
      }
    });
  }, []);

  const onChangeContent = () => {
    setButtonProps({
      onPress: async () => navigation.navigate("Screen2"),
      title: labels.siguiente,
    });
    Animated.sequence([
      Animated.timing(content1Animated, {
        toValue: 500,
        duration: AN.duration,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(content2Animated, {
        toValue: 0,
        duration: AN.durationQuick,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.timing(appear, {
        toValue: 1,
        duration: AN.durationQuick,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.delay(AN.delayDuration),
      Animated.timing(appear2, {
        toValue: 1,
        duration: AN.durationQuick,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
      Animated.delay(AN.delayDuration),
      Animated.timing(appear3, {
        toValue: 1,
        duration: AN.durationQuick,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };

  const content1 = (
    <Animated.View
      style={[
        styles.bodySpaceAround,
        {
          transform: [{ translateX: content1Animated }],
        },
      ]}
    >
      <Animated.View
        style={[
          styles.bodyTextAlign,
          { transform: [{ translateX: animated }] },
        ]}
      >
        <PVText style={styles.parraph} fontType={"normalText"}>
          {summary1.parraph1}
        </PVText>
      </Animated.View>
      <Animated.View
        style={[
          styles.bodyTextAlign,
          { transform: [{ translateX: animated2 }] },
        ]}
      >
        <PVText style={styles.parraph} fontType={"normalText"}>
          {summary1.parraph2}
        </PVText>
      </Animated.View>
      <Animated.View
        style={[
          styles.bodyTextAlign,
          { transform: [{ translateX: animated3 }] },
        ]}
      >
        <PVText style={styles.parraph} fontType={"normalText"}>
          {summary1.parraph3}
        </PVText>
      </Animated.View>
    </Animated.View>
  );

  const icon1 = summaryTex1.icon;
  const content2 = (
    <Animated.View
      style={[
        styles.treeInfo,
        { transform: [{ translateX: content2Animated }] },
      ]}
    >
      <Animated.View
        style={[
          styles.bodyTextBox,
          styles.bodyTextBoxRadiusTop,
          { opacity: appear },
        ]}
      >
        <View style={styles.iconBox}>
          <Ionicons name={summaryTex1.icon} size={32} color="#fff" />
        </View>
        <PVText style={styles.bodyBoxTextAlign} fontType={"normalText"}>
          {summaryTex1.text}
        </PVText>
      </Animated.View>
      <Animated.View style={[styles.bodyTextBox, { opacity: appear2 }]}>
        <View style={styles.iconBox}>
          <Ionicons name={summaryTex2.icon} size={32} color="#fff" />
        </View>
        <PVText style={styles.bodyBoxTextAlign} fontType={"normalText"}>
          {summaryTex2.text}
        </PVText>
      </Animated.View>
      <Animated.View
        style={[
          styles.bodyTextBox,
          styles.bodyTextBoxRadiusBottom,
          { opacity: appear3 },
        ]}
      >
        <View style={styles.iconBox}>
          <Ionicons name={summaryTex3.icon} size={32} color="#fff" />
        </View>
        <PVText style={styles.bodyBoxTextAlign} fontType={"normalText"}>
          {summaryTex3.text}
        </PVText>
      </Animated.View>
    </Animated.View>
  );

  return (
    <Background gradientName={sectionColor}>
      <View style={styles.wrapper}>
        <View style={isAndroid ? styles.headerAndroid : styles.header}>
          <PVText style={styles.headerTextAlign} fontType={"headlineH2"}>
            {screen1Title}
          </PVText>
        </View>

        {content1}
        {content2}

        <View style={styles.bottom}>
          <ContinueButton
            sectionColor={sectionColor}
            label={buttonProps.title}
            onPress={buttonProps.onPress}
          />
        </View>
      </View>
    </Background>
  );
}
