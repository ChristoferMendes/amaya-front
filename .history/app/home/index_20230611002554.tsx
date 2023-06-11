import { HStack, Text, VStack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { Righteous_400Regular } from "../../constants/Font"

export default function Home() {
  return (
    <SafeAreaView>
      <VStack m={12}>
        <HStack bg={'red.300'} justifyContent={'center'}>
        <Text fontFamily={Righteous_400Regular}>About us</Text>
        </HStack>
      </VStack>
    </SafeAreaView>
  )

}