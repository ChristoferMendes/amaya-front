import { Button, HStack, Icon, IconButton, Text, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUser } from "../../store/useUser";
import { useAuth } from "../../store/useAuth";
import { LogOut } from "@tamagui/lucide-icons";
import { Righteous_400Regular } from "../../constants/Font";
import { useRouter } from "expo-router";

export default function UserScreen() {
  const {
    actions: { logout },
  } = useAuth();
  const {
    actions: { cleanUser },
    user,
  } = useUser();
  const router = useRouter();

  const handleLogout = () => {
    cleanUser();
    logout();
    router.replace("/");
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HStack
        bgColor={"cyan.400"}
        shadow={"9"}
        mx="12"
        mt="12"
        p="3"
        rounded={"xl"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <HStack space="4" ml="2">
          <Text color="white" fontFamily={Righteous_400Regular}>
            {user?.name}
          </Text>
          <Text
            fontFamily={Righteous_400Regular}
            isTruncated
            w="32"
            color="white"
          >
            {user?.email}
          </Text>
        </HStack>
        <IconButton
          icon={<Icon as={<LogOut color="white" />} />}
          onPress={handleLogout}
        />
      </HStack>
    </SafeAreaView>
  );
}
