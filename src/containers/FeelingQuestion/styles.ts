import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, headlineH2, headlineH3 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: screenHeight * 0.75,
    paddingTop: screenHeight * 0.05,
  },
  header: {
    justifyContent: "space-between",
    width: "100%",
    alignItems: "center",
    height: screenHeight * 0.2,
  },
  headlineH1,
  headlineH2,
  headlineH3,
  headerText: {
    textAlign: "center",
  },
  numberWrapper: {
    flex: 1,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    alignContent: "center",
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth * 0.5,
    height: screenHeight * 0.1,
    borderWidth: 1,
    borderColor: "#fff",
    flexBasis: "25%",
    margin: screenWidth * 0.01,
  },
});

export default styles;
