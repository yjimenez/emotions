import * as React from "react";
import Selection from "../containers/Introduction/selection";
import DownloadDocs from "../containers/DownloadDocs";
import Contact from "../containers/Contact";
import getIconImage from "../utils/tabIconImage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();
const transparentBottomBar = {
  position: "absolute",
  left: 0,
  bottom: 0,
  elevation: 0,
  borderTopWidth: 0,
  backgroundColor: "transparent",
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getIconImage(route, color, focused);
          return <Ionicons name={iconName.name} size={32} color="#fff" />;
        },
        tabBarStyle: transparentBottomBar,
        tabBarShowLabel: false,
        headerShown: false,
      })}
    >
      <Tab.Screen
        name="Selection"
        children={(props) => <Selection {...props} />}
      />
      <Tab.Screen
        name="Document"
        children={(props) => <DownloadDocs {...props} />}
      />
      <Tab.Screen name="Contact" children={(props) => <Contact {...props} />} />
    </Tab.Navigator>
  );
}
