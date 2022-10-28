import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialHappiness from "../containers/Happiness";

const Stack = createNativeStackNavigator();
export default function HappinessScreen() {
  return (
    <Stack.Navigator
      id="alegria"
      initialRouteName="InitialHappiness"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="InitialHappiness" component={InitialHappiness} />
    </Stack.Navigator>
  );
}
