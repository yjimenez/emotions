import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "../containers/Introduction/initial";
import Selection from "../containers/Introduction/selection";
import Summary from "../containers/Introduction/summary";
import TreeInfo from "../containers/Introduction/treeInfo";

const Stack = createNativeStackNavigator();
export default function IntroductionScreen() {
  return (
    <Stack.Navigator
      id="introduction"
      initialRouteName="Introduction"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="Summary" component={Summary} />
      <Stack.Screen name="TreeInfo" component={TreeInfo} />
      <Stack.Screen name="Selection" component={Selection} />
    </Stack.Navigator>
  );
}
