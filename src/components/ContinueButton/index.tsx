import React from "react";
import { View, Pressable, Text } from "react-native";
import styles from "./styles";
import * as backgroundColors from "../../utils/backgroundColors";

interface Props {
  label: string;
  onPress: () => {};
  customStyle?: {};
  customTextStyle?: {};
  sectionColor?: string;
}

export default function ContinueButton(props: Props) {
  const { label, onPress, customStyle, customTextStyle, sectionColor } = props;

  const color = sectionColor
    ? backgroundColors[sectionColor][1]
    : styles.textStyle.color;

  return (
    <View>
      <Pressable onPress={onPress} style={[styles.buttonStyle, customStyle]}>
        <Text style={[styles.textStyle, customTextStyle, { color }]}>
          {label}
        </Text>
      </Pressable>
    </View>
  );
}
