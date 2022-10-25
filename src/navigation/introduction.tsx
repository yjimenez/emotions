import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Initial from "../containers/Introduction/initial";
import TabNavigator from "./tabNavigator";
import Summary from "../containers/Introduction/summary";
import TreeInfo from "../containers/Introduction/treeInfo";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
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
      <Stack.Screen name="TabNavigator" component={TabNavigator} />
    </Stack.Navigator>
  );
}
