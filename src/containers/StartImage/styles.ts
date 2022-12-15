import { StyleSheet, Dimensions } from "react-native";
import { headlineH1 } from "../../utils/styles";
const { width, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: screenHeight * 0.8,
  },
  buttonContainer: {
    height: screenHeight * 0.16,
    justifyContent: "flex-end",
  },
  imageText: {
    textAlign: "center",
  },
});

export default styles;
