import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Contact from "../containers/Contact";

const Stack = createNativeStackNavigator();
export default function DownloadDocsScreen() {
  return (
    <Stack.Navigator
      id="Contact"
      initialRouteName="Contact"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Contact" component={Contact} />
    </Stack.Navigator>
  );
}
