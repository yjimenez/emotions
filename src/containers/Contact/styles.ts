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
    backgroundColor: "rgba(56, 255, 255, 0.1)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    padding: screenHeight * 0.01,
  },
  bodyInfoRow: {
    flexDirection: "row",
    paddingTop: screenHeight * 0.01,
    paddingBottom: screenHeight * 0.01,
  },
  bodyInfoIcon3: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  bodyInfoIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyInfoText: {
    minHeight: screenHeight * 0.05,
    flex: 3.5,
    justifyContent: "center",
    marginRight: screenWidth * 0.03,
  },
  bodyImages: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginTop: screenHeight * 0.03,
    marginBottom: screenHeight * 0.01,
  },
  imageLogo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#fff",
  },
  imageLogoSource: {
    width: "100%",
    resizeMode: "contain",
    opacity: 0.9,
    marginTop: -screenHeight * 0.04,
  },
  bodyInfoRowImage: {
    flexDirection: "row",
    position: "absolute",
    bottom: screenHeight * 0.02,
  },
  imageFace: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: screenWidth * 0.05,
  },
  imageFaceSource: {
    height: isIpad ? screenHeight * 0.35 : screenHeight * 0.3,
    aspectRatio: 1,
  },
  logoINOContainer: {
    marginLeft: screenWidth * 0.03,
    width: screenWidth * 0.2,
  },
  logoINOBackground: {
    borderRadius: 10,
    position: "absolute",
    width: "90%",
    height: "200%",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    bottom: 0,
    backgroundColor: "#fff",
    padding: 5,
  },
  logoINO: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  contactIconSize: {
    height: isIpad ? screenHeight * 0.05 : screenHeight * 0.04,
  },
  INOModalBody: {
    flex: 1,
    width: "100%",
    paddingBottom: screenHeight * 0.01,
    paddingLeft: screenWidth * 0.05,
    paddingRight: screenWidth * 0.05,
  },
  INOModalRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: screenHeight * 0.02,
  },
  modalTextTitle: {
    paddingRight: screenWidth * 0.03,
    width: screenWidth * 0.27,
  },
  modalText: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  INOModalText: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  INOModalLogos: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  INOModalLogo: {
    borderRadius: 10,
    width: "40%",
    height: 100,
    padding: screenWidth * 0.02,
    marginLeft: screenWidth * 0.04,
    marginRight: screenWidth * 0.04,
    backgroundColor: "#fff",
  },
});

export default styles;
