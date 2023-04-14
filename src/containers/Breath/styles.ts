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
  imageText: {
    textAlign: "center",
  },
  content: {
    justifyContent: "center",
    flex: 1,
    width: "100%",
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
  breathContentText: {
    display: "flex",
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "center",
    alignItems: "center",
    paddingTop: screenHeight * 0.05,
  },
  breathText: {
    position: "absolute",
    alignSelf: "center",
  },
  breathAnimation: {
    flex: 1,
    paddingTop: screenHeight * 0.1,
  },
});

export default styles;
