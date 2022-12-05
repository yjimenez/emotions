import { StyleSheet, Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  header: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.05,
  },
  headerSelector: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  body: {
    width: "100%",
    alignItems: "center",
  },
  bodySummary: {
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.04,
  },
  cardsBody: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.04,
  },
  bottom: {
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.03,
    paddingBottom: screenHeight * 0.03,
  },
  headerTextAlign: {
    textAlign: "center",
    paddingLeft: screenWidth * 0.1,
    paddingRight: screenWidth * 0.1,
  },
  headerSelectionTextAlign: {
    textAlign: "center",
  },
  bodyTextAlign: {
    paddingLeft: screenWidth * 0.01,
    paddingRight: screenWidth * 0.01,
    lineHeight: screenWidth * 0.07,
  },
  bodyBoxTextAlign: {
    paddingLeft: screenWidth * 0.025,
    paddingRight: screenWidth * 0.05,
    width: screenWidth * 0.7,
    paddingTop: screenWidth * 0.05,
    paddingBottom: screenWidth * 0.05,
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
  bodyTextBoxRadiusTop: {
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  bodyTextBoxRadiusBottom: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomWidth: 1,
  },
  iconBox: {
    width: screenWidth * 0.3,
    alignItems: "center",
  },
  selectionRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    margin: 10,
  },
  selectionElement: {
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "#887BF8",
    width: 150,
    height: screenHeight * 0.12,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
    paddingTop: screenHeight * 0.0,
  },
  emotionFace: {
    flex: 1,
    width: screenWidth * 0.3,
  },
  tinyText: {
    fontSize: screenWidth * 0.03,
  },
});

export default styles;
