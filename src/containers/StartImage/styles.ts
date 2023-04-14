import { StyleSheet, Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  content: {
    justifyContent: "center",
    flex: 1,
    width: "100%",
    height: "100%",
  },
  imageContent: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  textContent: {
    flex: 1,
    justifyContent: "flex-start",
    paddingRight: screenWidth * 0.1,
    paddingLeft: screenWidth * 0.1,
  },
  imageText: {
    textAlign: "center",
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
});

export default styles;
