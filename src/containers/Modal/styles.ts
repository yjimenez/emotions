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
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight,
    width: screenWidth,
  },
  contentScroll: {
    justifyContent: "center",
    paddingRight: screenWidth * 0.06,
    paddingLeft: screenWidth * 0.06,
  },
  header: {
    flex: 0.6,
    alignItems: "flex-end",
    width: "100%",
    justifyContent: "center",
    paddingRight: screenWidth * 0.03,
  },
  crossIcon: {
    width: screenHeight * 0.05,
  },
  modalBodyLarge: {
    flex: 6,
    width: "100%",
    justifyContent: "center",
    paddingRight: screenWidth * 0.03,
    paddingLeft: screenWidth * 0.03,
  },
  modalBodySmall: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    paddingRight: screenWidth * 0.03,
    paddingLeft: screenWidth * 0.03,
  },
  modalBodyMedium: {
    flex: 4,
    width: "100%",
    justifyContent: "center",
    paddingRight: screenWidth * 0.03,
    paddingLeft: screenWidth * 0.03,
  },
  bottom: {
    flex: 1.5,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContentSmall: {
    height: screenHeight * 0.4,
  },
  modalContentMedium: {
    height: screenHeight * 0.6,
  },
  modalContentLarge: {
    height: screenHeight * 0.8,
  },
  linearGradient: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    width: screenWidth * 0.9,
    backgroundColor: "red",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },

  modalHeader: {
    textAlign: "center",
  },
  modalParraph: {
    textAlign: "center",
  },
  spaceBetween: {
    margin: screenHeight * 0.02,
  },
  minSpaceBetween: {
    margin: screenHeight * 0.01,
  },
  customStyle: {
    backgroundColor: "#fff",
    paddingTop: screenHeight * 0.02,
    paddingBottom: screenHeight * 0.02,
    marginTop: screenHeight * 0.03,
    marginBottom: screenHeight * 0.03,
    width: screenWidth * 0.7,
    borderRadius: 50,
    alignSelf: "center",
  },
  iconCall: {
    paddingTop: screenHeight * 0.03,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  justifyCenter: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    paddingRight: screenWidth * 0.06,
    paddingLeft: screenWidth * 0.06,
  },
});

export default styles;
