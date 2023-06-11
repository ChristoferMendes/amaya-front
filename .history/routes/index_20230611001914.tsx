import { Stack } from "expo-router"

export const Router = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} redirect={true} />
      <Stack.Screen name="home/index" options={{ headerShown: false }} />
    </Stack>
  )
}