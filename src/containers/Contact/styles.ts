import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, text1 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: screenHeight * 0.8,
  },
  header: {},
  bodyInfo: {
    width: "100%",
    backgroundColor: "rgba(56, 255, 255, 0.1)",
    borderRadius: 10,
    marginTop: screenHeight * 0.05,
  },
  bodyInfoRow: {
    flexDirection: "row",
  },
  bodyInfoIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyInfoText: {
    minHeight: screenHeight * 0.05,
    flex: 3,
    justifyContent: "center",
    padding: screenHeight * 0.02,
  },
  bodyImages: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginTop: screenHeight * 0.05,
  },
  imageLogo: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
  },
  imageLogoSource: {
    width: "120%",
    height: "100%",
    resizeMode: "contain",
    opacity: 0.9,
  },
  imageFace: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageFaceSource: {
    width: "150%",
    height: "100%",
    resizeMode: "contain",
  },
  headlineH1,
  text1,
});

export default styles;
