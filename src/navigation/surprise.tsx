import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import InitialSurprise from "../containers/Surprise";

const Stack = createNativeStackNavigator();
export default function SurpriseScreen() {
  return (
    <Stack.Navigator
      id="sorpresa"
      initialRouteName="Surprise"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="InitialSurprise" component={InitialSurprise} />
    </Stack.Navigator>
  );
}
