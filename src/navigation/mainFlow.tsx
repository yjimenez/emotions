import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StartImage from "../containers/StartImage";
import EmotionScale from "../containers/EmotionScale";
import FeelingQuestion from "../containers/FeelingQuestion";

const Stack = createNativeStackNavigator();
export default function MainFlow() {
  return (
    <Stack.Navigator
      id="MainFlow"
      initialRouteName="EmotionScale"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StartImage" component={StartImage} />
      <Stack.Screen name="EmotionScale" component={EmotionScale} />
      <Stack.Screen name="FeelingQuestion" component={FeelingQuestion} />
    </Stack.Navigator>
  );
}
