import { Tabs } from "expo-router";
import { Home, Eye, Glasses } from '@tamagui/lucide-icons'

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="speechlens" options={{ headerShown: false, tabBarLabel: 'SpeechLens', tabBarIcon: () => <Eye /> }} />
      <Tabs.Screen name="index" options={{ headerShown: false, tabBarLabel: 'Home', tabBarIcon: () => <Home /> }} />
      <Tabs.Screen name="signa-specs" options={{ headerShown: false, tabBarLabel: 'Signa Specs', tabBarIcon: () => <Glasses /> }} />
    </Tabs>
  )
}