import { StyleSheet, Dimensions } from "react-native";
import { headlineH1 } from "../../utils/styles";
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
  text: {
    textAlign: "center",
  },
  centerText: {
    justifyContent: "center",
    flex: 1,
    width: "100%",
    paddingLeft: screenWidth * 0.05,
    paddingRight: screenWidth * 0.05,
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
});

export default styles;
