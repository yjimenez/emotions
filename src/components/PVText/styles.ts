import {
  StyleSheet,
  Dimensions,
  Platform,
  PlatformIOSStatic,
  PixelRatio,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const fontScale = PixelRatio.getFontScale();
const getFontSize = (size: number) => size / fontScale;
const platformIOS = Platform as PlatformIOSStatic;
const isIpad = platformIOS.isPad;
const isAndroid = Platform.OS === "android";

const IOSReduce = screenHeight < 760;

const styles = StyleSheet.create({
  headlineH1: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: isAndroid
      ? getFontSize(28)
      : isIpad
      ? getFontSize(60)
      : getFontSize(30),
  },
  headlineH2: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: isAndroid
      ? getFontSize(23)
      : isIpad
      ? getFontSize(50)
      : getFontSize(26),
  },
  headlineH3: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: isAndroid
      ? getFontSize(21)
      : isIpad
      ? getFontSize(43)
      : getFontSize(24),
  },
  headlineH4: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: isAndroid
      ? getFontSize(18)
      : isIpad
      ? getFontSize(36)
      : getFontSize(20),
  },
  normalText: {
    fontFamily: "montserrat-regular",
    color: "#fff",
    fontSize: isAndroid
      ? getFontSize(16)
      : isIpad
      ? getFontSize(32)
      : IOSReduce
      ? getFontSize(18)
      : getFontSize(20),
  },
  defaultInputStyle: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.06,
    textAlign: "center",
    color: "red",
    fontFamily: "montserrat-regular",
    fontWeight: "normal",
    textDecorationLine: "none",
    fontSize: isAndroid
      ? getFontSize(18)
      : isIpad
      ? getFontSize(30)
      : getFontSize(20),
  },
  defaultDeleteButtonStyle: {
    width: screenHeight * 0.06,
    height: screenHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
