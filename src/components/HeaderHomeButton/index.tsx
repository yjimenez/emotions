import React from "react";
import { View, Pressable } from "react-native";
import styles from "./styles";
import PVText from "../PVText";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  label: string;
  onPress: () => {};
}

export default function HeaderHomeButton(props: Props) {
  const { onPress, label } = props;

  return (
    <Pressable onPress={onPress} style={[styles.backButton]}>
      {label ? (
        <PVText fontType={"normalText"}>{label}</PVText>
      ) : (
        <Ionicons
          name="home-outline"
          size={styles.backIcon.height}
          color="#fff"
        />
      )}
    </Pressable>
  );
}
