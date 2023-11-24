import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  imageText: {
    textAlign: "center",
  },
  header: {
    flex: 1,
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
  breathText: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  breathAnimation: {
    flex: 1,
  },
});

export default styles;
