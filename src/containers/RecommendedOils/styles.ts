import {
  StyleSheet,
  Dimensions,
  Platform,
  PlatformIOSStatic,
  PixelRatio,
} from "react-native";
import { headlineH1, headlineH2, headlineH3 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const platformIOS = Platform as PlatformIOSStatic;
const isIpad = platformIOS.isPad;
const isAndroid = Platform.OS === "android";

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  wrapper: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
    height: screenHeight * 0.75,
  },
  header: {
    flex: 1,
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
  },
  headerEmotion: {
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "flex-start",
    width: "80%",
    marginTop: screenHeight * 0.1,
    paddingTop: screenHeight * 0.02,
    paddingBottom: screenHeight * 0.02,
  },
  headerText: {},
  headlineH1,
  headlineH2,
  headlineH3,
  oilsContent: {
    flex: 1,
    textAlign: "center",
    alignItems: "center",
    paddingLeft: screenWidth * 0.03,
    paddingRight: screenWidth * 0.03,
    height: screenHeight * 0.25,
  },
  oilsDescription: {
    marginTop: screenHeight * 0.02,
    paddingTop: screenHeight * 0.02,
    paddingBottom: screenHeight * 0.02,
    height: screenHeight * 0.2,
  },
  oilsDetails: {
    paddingLeft: screenWidth * 0.05,
    paddingRight: screenWidth * 0.05,
    backgroundColor: "#eeeeee",
    opacity: 0.8,
    height: screenHeight * 0.37,
    borderRadius: 10,
  },
  oilsDetailsHeader: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: screenHeight * 0.02,
  },
  oilsDetailsBody: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: screenHeight * 0.02,
  },
  contentText: {
    color: "black",
    textAlign: "center",
    fontFamily: "Montserrat-BoldItalic",
  },
  contentTextRecommended: {
    color: "black",
    textAlign: "center",
  },
  numberWrapper: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    alignContent: "center",
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth * 0.5,
    height: screenHeight * 0.1,
    borderColor: "#fff",
    flexBasis: "25%",
    margin: screenWidth * 0.01,
  },
  buttonsContainer: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: screenHeight * 0.08,
  },
  buyButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginTop: screenHeight * 0.01,
    paddingTop: screenHeight * 0.01,
    paddingBottom: screenHeight * 0.01,
    backgroundColor: "red",
    opacity: 1,
    width: screenWidth * 0.7,
    borderRadius: 10,
  },
  buyTextButton: {
    fontSize: screenWidth * 0.04,
    fontFamily: "montserrat-semibold",
    textAlign: "center",
    color: "#fff",
    backgroundColor: "transparent",
    marginLeft: screenWidth * 0.03,
  },
  modalHeader: {
    textAlign: "center",
  },
  modalParraph: {
    textAlign: "center",
  },
  iconCall: {
    textAlign: "center",
    alignContent: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  modalContent: {
    flex: 1,
    justifyContent: "center",
    paddingRight: screenWidth * 0.06,
    paddingLeft: screenWidth * 0.06,
  },
  modalBody: {
    flex: 4,
    justifyContent: "space-around",
  },
  modalBottom: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  spaceBetween: {
    margin: screenHeight * 0.02,
  },
  modalIconsSize: {
    width: screenHeight * 0.04,
  },
  iconsLensSize: {
    width: screenHeight * 0.04,
  },
});

export default styles;
