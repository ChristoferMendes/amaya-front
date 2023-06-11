import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: 'Home' }} />
      {/* <Tabs.Screen name=""/> */}
    </Tabs>
  )
}