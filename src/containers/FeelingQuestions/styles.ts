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
  },
  content: {
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  questionContainer: {
    textAlign: "center",
    paddingLeft: screenHeight * 0.05,
    paddingRight: screenHeight * 0.05,
  },
  buttonsContainer: {
    justifyContent: "space-between",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
  marginBottom: {
    marginBottom: screenHeight * 0.03,
  },
});

export default styles;
