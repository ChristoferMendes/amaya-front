import { Tabs } from "expo-router";
import { Home } from '@tamagui/lucide-icons'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: () => <Home /> }} />
      <Tabs.Screen name="speechlens" options={{ headerShown: false, tabBarLabel: 'SpeechLens', tabBarIcon: () => <Home /> }}/>
    </Tabs>
  )
}