import { HStack, Text, VStack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { Righteous_400Regular } from "../../constants/Font"

export default function Home() {
  return (
    <SafeAreaView>
      <VStack m={12}>
        <HStack justifyContent={'center'} >
        <Text fontFamily={Righteous_400Regular} fontSize={'4xl'} color={'#5ce1e6'}>About us</Text>
        </HStack>
      </VStack>
    </SafeAreaView>
  )

}