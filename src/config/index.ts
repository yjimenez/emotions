import { Dimensions } from "react-native";
import Constants from "expo-constants";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

export const APP_VERSION = `Emotions 2022 v${Constants.manifest?.version}`;
export const APP_NAME = "Emotions by...";
