import * as React from "react";
import { Button, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Introduction from "./introduction";
import Surprise from "./surprise";
import Happiness from "./happiness";

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Splash Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Introduction")}
      />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Introduction" component={Introduction} />
        <Stack.Screen name="Surprise" component={Surprise} />
        <Stack.Screen name="Happiness" component={Happiness} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
