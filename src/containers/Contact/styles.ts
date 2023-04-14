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
    marginTop: screenHeight * 0.03,
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
    flex: 3,
    justifyContent: "center",
  },
  bodyImages: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    marginTop: screenHeight * 0.03,
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
    justifyContent: "flex-end",
    alignItems: "center",
    marginLeft: screenWidth * 0.05,
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
