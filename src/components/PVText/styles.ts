import {
  StyleSheet,
  Dimensions,
  Platform,
  PlatformIOSStatic,
} from "react-native";
import { scalingFactor } from "../../utils/scalingFactor";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const getFontSize = (size: number) => (screenWidth / size) * scalingFactor;
const platformIOS = Platform as PlatformIOSStatic;
const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  headlineH1: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: isAndroid ? getFontSize(18) : getFontSize(14),
  },
  headlineH2: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: isAndroid ? getFontSize(20) : getFontSize(16),
  },
  headlineH3: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: isAndroid ? getFontSize(23) : getFontSize(19),
  },
  headlineH4: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: isAndroid ? getFontSize(24) : getFontSize(20),
  },
  normalText: {
    fontFamily: "montserrat-regular",
    color: "#fff",
    fontSize: isAndroid ? getFontSize(25) : getFontSize(21),
  },
  tinyText: {
    fontFamily: "montserrat-regular",
    color: "#fff",
    fontSize: isAndroid ? getFontSize(34) : getFontSize(30),
  },
  defaultInputStyle: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.06,
    textAlign: "center",
    color: "red",
    fontFamily: "montserrat-regular",
    fontWeight: "normal",
    textDecorationLine: "none",
    fontSize: isAndroid ? getFontSize(18) : getFontSize(20),
  },
  defaultDeleteButtonStyle: {
    width: screenHeight * 0.06,
    height: screenHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
