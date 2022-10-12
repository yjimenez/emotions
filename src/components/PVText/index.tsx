import { Text } from "react-native";
import { useFonts } from "expo-font";

export default function PVText(props) {
  const [fontsLoaded] = useFonts({
    robotoRegular: require("../../../assets/fonts/Roboto/Roboto-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return <Text style={{ ...props.style }}>{props.children}</Text>;
}
