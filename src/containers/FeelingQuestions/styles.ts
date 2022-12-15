import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, headlineH2, headlineH3 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: screenHeight * 0.75,
    paddingTop: screenHeight * 0.05,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: screenHeight * 0.1,
  },
  questionContainer: {
    textAlign: "center",
  },
  buttonsContainer: {
    height: screenHeight * 0.17,
    justifyContent: "space-between",
    marginBottom: screenHeight * 0.1,
  },
});

export default styles;
