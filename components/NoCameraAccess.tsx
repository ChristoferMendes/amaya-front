import { Button, HStack, Text, VStack, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { Righteous_400Regular } from "../constants/Font";

export function NoCameraAccess({
  requestCameraPermission,
}: {
  requestCameraPermission: () => void;
}) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <VStack
        space="4"
        h="full"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Text
          fontSize={"xl"}
          textAlign={"center"}
          fontFamily={Righteous_400Regular}
          mx="8"
        >
          We will need your access to the camera to continue
        </Text>
        <Button
          w="40"
          variant="solid"
          shadow={"9"}
          colorScheme={"blue"}
          onPress={requestCameraPermission}
        >
          Give acess
        </Button>
      </VStack>
    </SafeAreaView>
  );
}
