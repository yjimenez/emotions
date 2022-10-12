import { StyleSheet, Dimensions } from "react-native";
import { headlineH1 } from "../../utils/styles";
const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    height: height * 0.4,
  },
  headlineH1,
});

export default styles;
