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
    <View>
      <Pressable onPress={onPress} style={[styles.backButton]}>
        <Ionicons name="home-outline" size={30} color="#fff" />
      </Pressable>
    </View>
  );
}
