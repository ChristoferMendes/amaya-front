import { HStack, Text, VStack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
  return (
    <SafeAreaView>
      <VStack m={12}>
        <HStack bg={'red.300'}>
          <Text>About us</Text>
        </HStack>
      </VStack>
    </SafeAreaView>
  )

}