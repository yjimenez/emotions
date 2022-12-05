import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, headlineH2, headlineH3 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  imageWrapper: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
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
    marginTop: screenHeight * 0.03,
    paddingTop: screenHeight * 0.02,
    paddingBottom: screenHeight * 0.02,
  },
  headerText: {},
  headlineH1,
  headlineH2,
  headlineH3,
  oilsContent: {
    flex: 1,
    justifyContent: "space-between",
    textAlign: "center",
    alignItems: "center",
    paddingLeft: screenWidth * 0.03,
    paddingRight: screenWidth * 0.03,
  },
  oilsDescription: {
    paddingTop: screenHeight * 0.05,
    paddingBottom: screenHeight * 0.05,
    justifyContent: "center",
    height: screenHeight * 0.25,
  },
  oilsDetails: {
    paddingLeft: screenWidth * 0.05,
    paddingRight: screenWidth * 0.05,
    paddingTop: screenHeight * 0.05,
    paddingBottom: screenHeight * 0.05,
    backgroundColor: "#eeeeee",
    opacity: 0.8,
    justifyContent: "space-between",
  },
  contentText: {
    color: "black",
    textAlign: "center",
    fontFamily: "Montserrat-BoldItalic",
  },
  contentTextRecommended: {
    color: "black",
    textAlign: "center",
    marginBottom: screenHeight * 0.02,
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
    marginTop: screenHeight * 0.05,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
});

export default styles;
