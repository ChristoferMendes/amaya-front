import { Button, H1, Input, YStack } from 'tamagui';
import { Glasses } from '@tamagui/lucide-icons'
import { Text } from 'react-native';

export default function Test() {
  return (
    <>
      <YStack ai={'center'} mt="$6" bg={'$blue10'}>
        <Glasses size={'$10'} />
        <Text style={{ fontFamily: 'Righteous_400Regular', fontSize: 40, color: '#5ce1e6'}}>AMAYA PROJECT</Text>
        {/* <XStack>
          <Image source={require('../assets/sound-wave.png')} height={200} width={'100%'} />
          <Image source={require('../assets/amaya.png')} height={200} width={200} position='absolute' left={'$10'} top={'$3'} />
        </XStack> */}
        <YStack w={'100%'} space="$4" mt="$2">
          <Input placeholder='Email' size={'$4'} mx="$4" h={"$3"} />
          <Input placeholder='Senha' size={'$4'} mx="$4" h={"$3"} />
          <Button bg="#5ce1e6" mx="$5">Entrar</Button>
        </YStack>
      </YStack>
    </>
  );
}