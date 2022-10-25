import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

export const headlineH1 = {
  fontFamily: "montserrat-regular",
  color: "#fff",
  fontSize: width * 0.1,
};

export const headlineH2 = {
  fontFamily: "montserrat-regular",
  color: "#fff",
  fontSize: width * 0.08,
};
