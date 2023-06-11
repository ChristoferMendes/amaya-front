import { HStack, Text } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Home() {
  return (
    <SafeAreaView>
      <HStack bg={'red.300'}>
        <Text>About us</Text>
      </HStack>
    </SafeAreaView>
  )

}