import { HStack, Text, VStack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
  return (
    <SafeAreaView>
      <VStack>
        <HStack bg={'red.300'} m={12}>
          <Text>About us</Text>
        </HStack>
      </VStack>
    </SafeAreaView>
  )

}