import { Stack } from "expo-router"
import { useAuth } from "../hooks/useAuth"

export const Router = () => {
  const { auth } = useAuth()

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} redirect={auth} />
      <Stack.Screen name="(tabs)/home" options={{ headerShown: false }} />
    </Stack>
  )
}