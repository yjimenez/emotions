import { StyleSheet, Dimensions } from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  header: {
    flex: 1.2,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  body: {
    flex: 5,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  bottom: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  headerSelector: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  bodySpaceAround: {
    flex: 1,
    height: "100%",
    alignContent: "center",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.04,
    paddingBottom: screenHeight * 0.04,
    borderWidth: 1,
    borderColor: "red",
  },

  bodySummary: {
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.02,
  },
  cardsBody: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.03,
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
    padding: screenWidth * 0.05,
    width: "100%",
  },
  bodyTextCenterAlign: {
    paddingLeft: screenWidth * 0.01,
    paddingRight: screenWidth * 0.01,
    textAlign: "center",
  },
  bodyBoxTextAlign: {
    paddingLeft: screenWidth * 0.025,
    paddingRight: screenWidth * 0.05,
    width: screenWidth * 0.7,
    paddingTop: screenWidth * 0.04,
    paddingBottom: screenWidth * 0.04,
  },
  bodyBoxTextAlignAndroid: {
    flex: 1,
    width: screenWidth * 0.7,
    paddingTop: screenWidth * 0.01,
    paddingBottom: screenWidth * 0.01,
  },
  bodyTextBox: {
    width: screenWidth * 0.87,
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
  },
  selectionElement: {
    width: "50%",
  },
  emotionFace: {
    flex: 1,
    width: "100%",
    resizeMode: "contain",
    borderRadius: 100,
  },
  tinyText: {
    fontSize: screenWidth * 0.03,
  },
  parraph: {
    lineHeight: screenHeight * 0.03,
  },
  contentBody: {
    position: "absolute",
  },
});

export default styles;
