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
    fontFamily: "montserrat-semibold",
    textAlign: "center",
    backgroundColor: "transparent",
  },
  buttonContainer: {
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },
});

export default styles;
