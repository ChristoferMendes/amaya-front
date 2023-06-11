import { HStack, Image, Text, VStack } from "native-base"
import { SafeAreaView } from "react-native-safe-area-context"
import { Righteous_400Regular } from "../../constants/Font"

export default function Home() {
  return (
    <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
      <VStack mt={'10'} alignItems={'center'}>
        <Text fontFamily={Righteous_400Regular} fontSize={'5xl'} color={'#5ce1e6'}>About us</Text>
        <Image source={require('../../assets/about-us.png')} alt="Aboust us image" size={'80'} mx="auto" />


        <Text fontFamily={Righteous_400Regular} fontSize={'xl'} textAlign={'justify'}>
          The Amaya project is an innovative and inclusive company, founded by an entrepreneur with hearing and speech impairments. Our goal is to promote inclusion and empower deaf and mute individuals through the use of advanced technology, enabling them to have more effective communication and improving their quality of life.
        </Text>
      </VStack>
    </SafeAreaView>
  )

}