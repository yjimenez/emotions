import {
  Dimensions,
  Platform,
  PlatformIOSStatic,
  PixelRatio,
  View,
} from "react-native";
import Selection from "../containers/Selection";
import DownloadDocs from "../containers/DownloadDocs";
import Contact from "../containers/Contact";
import getIconImage from "../utils/tabIconImage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

const { width: screenWidth, height: screenHeight } = Dimensions.get("window");
const platformIOS = Platform as PlatformIOSStatic;
const isIpad = platformIOS.isPad;
const tabIconSize = isIpad ? screenWidth * 0.06 : screenWidth * 0.08;

const transparentBottomBar = {
  position: "absolute",
  left: 0,
  bottom: 0,
  elevation: 0,
  borderTopWidth: 0,
  backgroundColor: "transparent",
};

const iconContainerSize = {
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
  width: 100,
  height: "auto",
  marginTop: isIpad ? -50 : null,
};

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          const iconName = getIconImage(route, color, focused);
          return (
            <View style={iconContainerSize}>
              <Ionicons name={iconName.name} size={tabIconSize} color="#fff" />
            </View>
          );
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
