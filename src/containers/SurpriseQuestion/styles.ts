import { StyleSheet, Dimensions } from "react-native";
import { headlineH1 } from "../../utils/styles";
const { width, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: screenHeight * 0.1,
    paddingTop: screenHeight * 0.08,
  },
  text: {
    textAlign: "center",
  },
  centerText: {
    justifyContent: "center",
    flex: 1,
  },
  bottom: {
    marginBottom: screenHeight * 0.05,
  },
});

export default styles;
