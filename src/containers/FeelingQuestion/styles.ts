import { StyleSheet, Dimensions } from "react-native";
import { headlineH1, headlineH2, headlineH3 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    width: "100%",
    flex: 1,
  },
  header: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headlineH1,
  headlineH2,
  headlineH3,
  headerText: {
    textAlign: "center",
  },
  numberWrapperReverse: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap-reverse",
    alignContent: "center",
  },
  numberWrapper: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    flexWrap: "wrap",
    alignContent: "center",
  },
  numberContainer: {
    flex: 1,
    justifyContent: "center",
    width: screenWidth * 0.5,
    height: screenHeight * 0.093,
    borderWidth: 1,
    borderColor: "#fff",
    flexBasis: "45%",
    margin: screenWidth * 0.01,
  },
  contentScroll: {
    overflow: "scroll",
    justifyContent: "center",
    paddingRight: screenWidth * 0.06,
    paddingLeft: screenWidth * 0.06,
  },
  modalHeaderParraph: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  modalBodyParraph: {
    flex: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  modalParraph: {
    textAlign: "center",
  },
  spaceBetween: {
    margin: screenHeight * 0.02,
  },
});

export default styles;
