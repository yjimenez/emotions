import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, headlineH2, headlineH3 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
    paddingTop: screenHeight * 0.05,
  },
  headlineH1,
  headlineH2,
  headlineH3,
  headerText: {
    textAlign: "center",
  },
  circleText: {
    fontSize: screenWidth * 0.1,
    position: "absolute",
    alignSelf: "center",
  },
  sliderLineText: {
    fontSize: screenWidth * 0.1,
    alignSelf: "center",
    marginTop: screenHeight * 0.08,
  },
  numberWrapper: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    alignContent: "center",
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth * 0.5,
    height: screenHeight * 0.1,
    borderColor: "#fff",
    flexBasis: "20%",
  },
  buttonsContainer: {
    height: screenHeight * 0.16,
    justifyContent: "space-between",
  },
  buttonContainer: {
    height: screenHeight * 0.16,
    justifyContent: "flex-end",
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
  circularRotation: {},
});

export default styles;
