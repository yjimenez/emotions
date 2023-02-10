import { StyleSheet, Dimensions } from "react-native";
import { headlineH1 } from "../../utils/styles";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: screenHeight,
    width: screenWidth,
  },
  content: {
    padding: 20,
  },
  container: {},
  linearGradient: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#fff",
    width: screenWidth * 0.9,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  header: {
    alignItems: "flex-end",
    width: "100%",
    paddingTop: screenHeight * 0.01,
    paddingRight: screenWidth * 0.04,
  },
  modalHeader: {
    textAlign: "center",
  },
  modalParraph: {
    paddingTop: screenHeight * 0.05,
    textAlign: "center",
  },
  iconCall: {
    paddingTop: screenHeight * 0.03,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export default styles;
