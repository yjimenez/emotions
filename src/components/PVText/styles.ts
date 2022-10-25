import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  headlineH1: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: screenWidth * 0.08,
  },
  headlineH2: {
    fontFamily: "montserrat-semibold",
    color: "#fff",
    fontSize: screenWidth * 0.06,
  },
  normalText: {
    fontFamily: "montserrat-regular",
    color: "#fff",
    fontSize: screenWidth * 0.045,
  },
  defaultInputStyle: {
    width: screenWidth * 0.8,
    height: screenHeight * 0.06,
    textAlign: "center",
    color: "red",
    fontFamily: "montserrat-regular",
    fontWeight: "normal",
    textDecorationLine: "none",
    fontSize: screenWidth * 0.2,
  },
  defaultInputContainerStyle: {},
  defaultDeleteButtonStyle: {
    width: screenHeight * 0.06,
    height: screenHeight * 0.06,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default styles;
