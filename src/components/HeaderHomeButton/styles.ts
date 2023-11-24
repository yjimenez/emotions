import {
  StyleSheet,
  Platform,
  PlatformIOSStatic,
  Dimensions,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const platformIOS = Platform as PlatformIOSStatic;
const isIpad = platformIOS.isPad;

const styles = StyleSheet.create({
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    right: 10,
  },
  backIcon: {
    height: isIpad ? screenHeight * 0.04 : screenHeight * 0.035,
  },
});

export default styles;
