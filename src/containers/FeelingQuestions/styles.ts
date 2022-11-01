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
    marginTop: screenHeight * 0.1,
  },
  buttonsContainer: {
    height: screenHeight * 0.2,
    justifyContent: "space-around",
    marginBottom: screenHeight * 0.1,
  },
});

export default styles;
