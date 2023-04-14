import React from "react";
import { View, Pressable } from "react-native";
import styles from "./styles";
import PVText from "../../components/PVText";
import Ionicons from "@expo/vector-icons/Ionicons";

interface Props {
  label: string;
  onPress: () => {};
}

export default function HeaderBackButton(props: Props) {
  const { onPress, label } = props;

  return (
    <View>
      <Pressable onPress={onPress} style={[styles.backButton]}>
        <Ionicons name="arrow-back-outline" size={32} color="#fff" />
        <PVText fontType={"headlineH3"}>{label}</PVText>
      </Pressable>
    </View>
  );
}
