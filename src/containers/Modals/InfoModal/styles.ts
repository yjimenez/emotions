import { StyleSheet, Dimensions } from "react-native";
import { headlineH1 } from "../../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight,
    width: screenWidth,
    padding: 20,
  },
  content: {
    height: screenHeight * 0.5,
    padding: screenHeight * 0.05,
  },
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    height: "100%",
  },
  linearGradient: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    width: screenWidth * 0.9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    alignItems: "flex-end",
    width: "100%",
    paddingTop: screenHeight * 0.01,
    paddingRight: screenWidth * 0.04,
  },
  modalHeader: {
    textAlign: "center",
  },
  modalParraph: {
    paddingTop: screenHeight * 0.05,
    textAlign: "center",
  },
});

export default styles;
