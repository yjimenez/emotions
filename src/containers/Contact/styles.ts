import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, headlineH4, text1, text2 } from "../../utils/styles";
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
    flex: 3.5,
    justifyContent: "center",
    marginRight: screenWidth * 0.03,
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
  headlineH1,
  text1,
  INOModalBody: {
    flex: 1,
    width: "90%",
  },
  INOModalRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: screenWidth * 0.04,
  },
  modalTextTitle: {
    paddingRight: screenWidth * 0.03,
    textAlign: "right",
    width: screenWidth * 0.27,
    ...headlineH4,
  },
  modalText: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",

    ...text2,
  },
  INOModalLogos: {
    height: "50%",
    width: "100%",
    display: "flex",
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
