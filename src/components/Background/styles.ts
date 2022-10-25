import { StyleSheet, Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: screenWidth * 0.05,
    marginTop: screenHeight * 0.1,
    marginBottom: screenHeight * 0.05,
  },
  wrapperBottomBar: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: screenWidth * 0.05,
    marginTop: screenHeight * 0.1,
    marginBottom: screenHeight * 0.12,
  },
  linearGradient: {
    flex: 1,
    borderRadius: 5,
  },
});

export default styles;
