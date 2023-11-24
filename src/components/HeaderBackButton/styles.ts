import {
  StyleSheet,
  Platform,
  PlatformIOSStatic,
  Dimensions,
} from "react-native";

const platformIOS = Platform as PlatformIOSStatic;
const isIpad = platformIOS.isPad;

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    left: isIpad ? 10 : 0,
  },
  backIcon: {
    height: isIpad ? screenHeight * 0.04 : screenHeight * 0.035,
  },
});

export default styles;
