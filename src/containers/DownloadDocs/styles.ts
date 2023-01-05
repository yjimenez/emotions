import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, headlineH4, text1 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    height: screenHeight * 0.8,
  },
  header: {},
  bodyInfo: {
    width: "100%",
    borderRadius: 10,
    marginTop: screenHeight * 0.04,
    height: screenHeight * 0.7,
  },
  bodyTextBox: {
    width: screenWidth * 0.9,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderTopWidth: 0,
    borderColor: "#fff",
  },
  containerAccordeonStyle: {
    backgroundColor: "rgba(56, 255, 255, 0.1)",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
  },
  accordeonTitle: {
    ...headlineH4,
    paddingLeft: screenWidth * 0.02,
    width: screenWidth * 0.78,
  },
  accordeonBody: {
    ...text1,
    fontSize: screenWidth * 0.04,
    padding: 10,
  },
  headlineH1,
});

export default styles;
