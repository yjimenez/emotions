import { StyleSheet, Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  content: {
    flex: 2.8,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  questionContainer: {
    textAlign: "center",
    paddingLeft: screenHeight * 0.05,
    paddingRight: screenHeight * 0.05,
  },
  buttonsContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  marginBottom: {
    marginBottom: screenHeight * 0.03,
  },
});

export default styles;
