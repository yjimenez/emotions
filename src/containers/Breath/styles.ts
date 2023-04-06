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
  },
  imageText: {
    textAlign: "center",
  },
  content: {
    height: "90%",
    width: "100%",
  },
  bottom: {
    marginBottom: screenHeight * 0.05,
  },
  breathContentText: {
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  breathText: {
    position: "absolute",
    alignSelf: "center",
  },
});

export default styles;
