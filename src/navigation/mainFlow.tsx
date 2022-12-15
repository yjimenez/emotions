import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HeaderBackButton from "../components/HeaderBackButton";
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
      <Stack.Screen
        name="EmotionScale"
        component={EmotionScale}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <HeaderBackButton
              onPress={() =>
                navigation.navigate("Introduction", {
                  screen: "Selection",
                })
              }
              label=""
            />
          ),
        })}
      />
      <Stack.Screen
        name="StartImage"
        component={StartImage}
        options={() => ({
          title: "",
        })}
      />
      <Stack.Screen
        name="FeelingQuestion"
        component={FeelingQuestion}
        options={() => ({
          title: "",
        })}
      />
      <Stack.Screen
        name="FeelingQuestions"
        component={FeelingQuestions}
        options={() => ({
          title: "",
        })}
      />
      <Stack.Screen
        name="RecommendedOils"
        component={RecommendedOils}
        options={() => ({
          title: "",
        })}
      />
    </Stack.Navigator>
  );
}
