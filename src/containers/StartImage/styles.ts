import {
  StyleSheet,
  Dimensions,
  Platform,
  PlatformIOSStatic,
  PixelRatio,
} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const platformIOS = Platform as PlatformIOSStatic;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  header: {
    flex: 4,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  body: {
    flex: 2,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    paddingRight: screenWidth * 0.1,
    paddingLeft: screenWidth * 0.1,
  },
  bottom: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    flex: 1,
    justifyContent: "center",
    paddingRight: screenWidth * 0.1,
    paddingLeft: screenWidth * 0.1,
  },
  imageText: {
    textAlign: "center",
  },
  imageStyle: {
    height: screenHeight * 0.45,
    aspectRatio: 1,
  },
});

export default styles;
