import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderBackButton from "../components/HeaderBackButton";
import HeaderHomeButton from "../components/HeaderHomeButton";
import Breath from "../containers/Breath";
import StartImage from "../containers/StartImage";
import EmotionScale from "../containers/EmotionScale";
import FeelingQuestion from "../containers/FeelingQuestion";
import FeelingQuestions from "../containers/FeelingQuestions";
import RecommendedOils from "../containers/RecommendedOils";

const Stack = createNativeStackNavigator();

export default function MainFlow() {
  return (
    <Stack.Navigator
      id="MainFlow"
      initialRouteName="EmotionScale"
      screenOptions={{
        headerShown: true,
        headerTransparent: true,
        headerBackVisible: false,
      }}
    >
      <Stack.Group
        screenOptions={({ navigation }) => ({
          title: "",
          headerRight: () => (
            <HeaderHomeButton
              onPress={() =>
                navigation.navigate("Introduction", {
                  screen: "Selection",
                })
              }
              label=""
            />
          ),
        })}
      >
        <Stack.Screen
          name="EmotionScale"
          component={EmotionScale}
          options={({ navigation }) => ({
            headerLeft: () => (
              <HeaderBackButton onPress={() => navigation.goBack()} label="" />
            ),
          })}
        />
        <Stack.Screen
          name="Breath"
          component={Breath}
          options={() => ({
            headerShown: false,
          })}
        />
        <Stack.Screen name="StartImage" component={StartImage} />
        <Stack.Screen name="FeelingQuestion" component={FeelingQuestion} />
        <Stack.Screen name="FeelingQuestions" component={FeelingQuestions} />
        <Stack.Screen
          name="RecommendedOils"
          component={RecommendedOils}
          options={() => ({
            headerShown: false,
          })}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
