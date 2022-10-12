import React from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./styles";

export default function ContinueButton(props) {
  const { label, onPress, customStyle, customTextStyle } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonStyle, customStyle]}
    >
      <Text style={[styles.textStyle, customTextStyle]}>{label}</Text>
    </TouchableOpacity>
  );
}
