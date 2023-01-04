import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, headlineH2, headlineH3 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: screenHeight * 0.9,
    paddingTop: screenHeight * 0.1,
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
    flexWrap: "wrap",
    alignContent: "center",
    marginTop: screenHeight * 0.09,
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth * 0.5,
    height: screenHeight * 0.1,
    borderWidth: 1,
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
  circularRotation: {},
});

export default styles;
