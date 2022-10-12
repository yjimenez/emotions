import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: "#fff",
    paddingTop: height * 0.02,
    paddingBottom: height * 0.02,
    width: width * 0.7,
    borderRadius: 50,
  },
  textStyle: {
    fontSize: 18,
    fontFamily: "Gill Sans",
    textAlign: "center",
    color: "red",
    backgroundColor: "transparent",
  },
});

export default styles;
