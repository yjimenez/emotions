import React from "react";
import {
  View,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import styles from "./styles";
import * as backgroundColors from "../../utils/backgroundColors";

interface Props {
  label: string;
  onPress: () => {};
  customStyle?: {};
  customTextStyle?: {};
  sectionColor?: string;
  pressEffect: "opacity" | "highlight" | null;
}

export default function ContinueButton(props: Props) {
  const {
    label,
    onPress,
    customStyle,
    customTextStyle,
    sectionColor,
    pressEffect = "opacity",
  } = props;

  const color = sectionColor
    ? backgroundColors[sectionColor][1]
    : styles.textStyle.color;

  const textBtn = (
    <Text style={[styles.textStyle, customTextStyle, { color }]}>{label}</Text>
  );
  return (
    <View>
      {pressEffect === null ? (
        <Pressable onPress={onPress} style={[styles.buttonStyle, customStyle]}>
          {textBtn}
        </Pressable>
      ) : null}

      {pressEffect === "opacity" ? (
        <TouchableOpacity
          onPress={onPress}
          style={[styles.buttonStyle, customStyle]}
        >
          {textBtn}
        </TouchableOpacity>
      ) : null}

      {pressEffect === "highlight" ? (
        <TouchableHighlight
          onPress={onPress}
          style={[styles.buttonStyle, customStyle]}
          underlayColor="white"
        >
          {textBtn}
        </TouchableHighlight>
      ) : null}
    </View>
  );
}
