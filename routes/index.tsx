import { Stack } from "expo-router";
import { useAuth } from "../store/useAuth";

export const Router = () => {
  const { auth } = useAuth();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{ headerShown: false }}
        redirect={auth}
      />
      <Stack.Screen name="intro/index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
};
