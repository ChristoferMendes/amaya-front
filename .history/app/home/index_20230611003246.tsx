import { HStack, Image, Text, VStack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { Righteous_400Regular } from "../../constants/Font"

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <VStack mt={'10'}>
        <HStack justifyContent={'center'} >
          <Text fontFamily={Righteous_400Regular} fontSize={'5xl'} color={'#5ce1e6'}>About us</Text>
        </HStack>

        <Image source={require('../../assets/about-us.png')} alt="Aboust us image" size={'80'} mx="auto"/>

      </VStack>
    </SafeAreaView>
  )

}