import { Text } from "react-native";
import React from "react";
import styles from "./styles";

interface Props {
  children: React.ReactNode;
  style?: {} | any;
  fontType?: string | any;
}

export default function PVText(props: Props) {
  const { fontType } = props;
  return <Text style={[styles[fontType], props.style]}>{props.children}</Text>;
}
