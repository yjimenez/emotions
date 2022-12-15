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
    marginTop: screenHeight * 0.02,
    paddingLeft: screenWidth * 0.05,
    paddingRight: screenWidth * 0.05,
    paddingTop: screenHeight * 0.02,
    paddingBottom: screenHeight * 0.02,
    backgroundColor: "#eeeeee",
    opacity: 0.8,
    height: screenHeight * 0.37,
    borderRadius: 10,
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
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    marginBottom: screenHeight * 0.08,
  },
});

export default styles;
