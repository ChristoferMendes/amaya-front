import { Button, H1, Input, XStack, YStack, Text as TamaguiText } from 'tamagui';
import { Glasses } from '@tamagui/lucide-icons'
import { Text } from 'react-native';
import { TextWithFont } from '../components/TextWithFont';

export default function Test() {
  return (
    <>
      <YStack ai={'center'} flex={1} justifyContent='center'>
        <Glasses size={'$10'} />
        <TextWithFont style={{color: '#5ce1e6'}}>PROJECT AMAYA</TextWithFont>
        {/* <XStack>
          <Image source={require('../assets/sound-wave.png')} height={200} width={'100%'} />
          <Image source={require('../assets/amaya.png')} height={200} width={200} position='absolute' left={'$10'} top={'$3'} />
        </XStack> */}
        <YStack w={'100%'} space="$4" mt="$2" px="$4">
          <Input placeholder='Email' size={'$4'} h={"$3"} />
          <Input placeholder='Senha' size={'$4'} h={"$3"} />
          <Button bg="#5ce1e6" >Entrar</Button>
          <Text w={''}>Does not have an account?</Text>
        </YStack>
      </YStack>
    </>
  );
}