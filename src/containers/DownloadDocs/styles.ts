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

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  header: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  body: {
    flex: 5,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  bodyInfo: {
    width: "100%",
    borderRadius: 10,
    marginTop: screenHeight * 0.04,
    height: screenHeight * 0.7,
  },
  bodyTextBox: {
    width: screenWidth * 0.9,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#fff",
  },
  containerAccordeonStyle: {
    backgroundColor: "rgba(56, 255, 255, 0.1)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  accordeonTitle: {
    marginTop: screenHeight * 0.01,
    marginBottom: screenHeight * 0.01,
    paddingLeft: screenWidth * 0.02,
    width: screenWidth * 0.78,
  },
  accordeonBody: {
    padding: 10,
  },
  accordeonLinkBody: {
    padding: 10,
  },
  accordeonLinkWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  chevronRightSize: {
    width: isIpad
      ? PixelRatio.getPixelSizeForLayoutSize(25)
      : PixelRatio.getPixelSizeForLayoutSize(10),
  },
});

export default styles;
