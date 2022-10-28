import { StyleSheet, Dimensions } from "react-native";
import { headlineH1 } from "../../utils/styles";
const { width, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: screenHeight * 0.7,
    paddingTop: screenHeight * 0.1,
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
  imageText: {
    textAlign: "center",
  },
});

export default styles;
