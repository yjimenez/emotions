import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "../containers/Introduction/initial";
import TabNavigator from "./tabNavigator";
import HeaderHomeButton from "../components/HeaderHomeButton";
import Final from "../containers/Introduction/final";
import Screen2 from "../containers/Introduction/screen2";
import Screen1 from "../containers/Introduction/screen1";

const Stack = createNativeStackNavigator();
export default function IntroductionScreen() {
  return (
    <Stack.Navigator
      id="introduction"
      initialRouteName="Introduction"
      screenOptions={() => ({
        headerShown: true,
        headerTransparent: true,
        headerBackVisible: false,
        title: "",
      })}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Group
        screenOptions={({ navigation }) => ({
          title: "",
          headerRight: () => (
            <HeaderHomeButton
              onPress={() =>
                navigation.navigate("Introduction", {
                  screen: "TabNavigator",
                })
              }
              label="Omitir"
            />
          ),
        })}
      >
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Group>
      <Stack.Screen name="Final" component={Final} />
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
