import { Tabs } from "expo-router";
import { TabBarIcon } from "../../components/TabBarIcon";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: 24,
          left: 20,
          right: 20,
          // elevation:
          borderRadius: 20,
          height: 60,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: (props) => TabBarIcon("index", props),
        }}
      />
      <Tabs.Screen
        name="user"
        options={{
          headerShown: false,
          tabBarIcon: (props) => TabBarIcon("user", props),
        }}
      />
    </Tabs>
  );
}
