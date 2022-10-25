import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DownloadDocs from "../containers/DownloadDocs";

const Stack = createNativeStackNavigator();
export default function DownloadDocsScreen() {
  return (
    <Stack.Navigator
      id="Document"
      initialRouteName="Document"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Documents" component={DownloadDocs} />
    </Stack.Navigator>
  );
}
