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
  wrapperAndroid: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: "100%",
    marginTop: -screenHeight * 0.05,
  },
  header: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.05,
  },
  headerAndroid: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  headerSelector: {
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  body: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
  },
  bodySpaceAround: {
    flex: 1,
    alignContent: "center",
    justifyContent: "space-around",
    width: "100%",
    alignItems: "center",
    paddingTop: screenHeight * 0.04,
    paddingBottom: screenHeight * 0.04,
  },
  imagePrincipal: {
    flex: 1,
    marginTop: -screenHeight * 0.1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    width: "100%",
    resizeMode: "contain",
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
    paddingLeft: screenWidth * 0.05,
    paddingRight: screenWidth * 0.05,
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
    lineHeight: screenWidth * 0.07,
  },
  contentBody: {
    position: "absolute",
  },
  treeInfo: {
    position: "absolute",
    display: "flex",
    flex: 1,
    top: screenHeight * 0.15,
  },
  treeInfoAndroid: {
    position: "absolute",
    display: "flex",
    flex: 1,
    top: screenHeight * 0.15,
  },
});

export default styles;
