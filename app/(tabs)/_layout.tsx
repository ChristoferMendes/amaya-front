import { Tabs } from "expo-router";
import { TabBarIcon } from "../../components/TabBarIcon";

export default function TabLayout() {
  return (
    <Tabs screenOptions={{
      tabBarShowLabel: false,
      tabBarStyle: {
        position: 'absolute',
        bottom: 24,
        left: 20,
        right: 20,
        // elevation:
        borderRadius: 20,
        height: 60
      }
    }}>
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false, tabBarLabel: 'Home',
          tabBarIcon: (props) => TabBarIcon('index', props)
        }}
      />
    </Tabs>
  )
}