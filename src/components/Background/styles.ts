import {
  StyleSheet,
  Dimensions,
  Platform,
  PlatformIOSStatic,
  PixelRatio,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const platformIOS = Platform as PlatformIOSStatic;
const isIpad = platformIOS.isPad;
const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    marginTop: screenHeight * 0.1,
    marginBottom: screenHeight * 0.05,
  },
  wrapperBottomBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: screenWidth * 0.05,
    marginRight: screenWidth * 0.05,
    marginTop: isAndroid ? screenHeight * 0.05 : screenHeight * 0.04,
    marginBottom: isAndroid ? screenHeight * 0.08 : screenHeight * 0.09,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
});

export default styles;
