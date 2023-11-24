import { StyleSheet, Dimensions } from "react-native";
const { width, height: screenHeight } = Dimensions.get("window");

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
    height: "100%",
  },
  buttonsContainer: {
    justifyContent: "space-between",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
  marginBottom: {
    marginBottom: screenHeight * 0.03,
  },
});

export default styles;
