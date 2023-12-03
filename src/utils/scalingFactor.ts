import { Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const SCREEN_BREAKPOINT = 0.57;
const IPHONE_6_SCREEEN_RATIO = 0.56221;
const screenRatio = screenWidth / screenHeight;
export const scalingFactor =
  screenRatio > SCREEN_BREAKPOINT ? IPHONE_6_SCREEEN_RATIO / screenRatio : 1;
