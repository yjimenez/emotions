import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartImage from "../containers/StartImage";

const Stack = createNativeStackNavigator();
export default function MainFlow() {
  return (
    <Stack.Navigator
      id="MainFlow"
      initialRouteName="StartImage"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartImage" component={StartImage} />
    </Stack.Navigator>
  );
}
