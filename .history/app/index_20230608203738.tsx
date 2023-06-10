import { Button, H1, Input, YStack } from 'tamagui';
import { Glasses } from '@tamagui/lucide-icons'

export default function Test() {
  return (
    <>
      <YStack ai={'center'} mt="$6">
        <Glasses size={'$6'} />
        <H1 col={'$gray10'} fontSize={'$16'} color={'#5ce1e6'} fontFamily={'Ubuntu_500Medium'}>PROJETO AMAYA</H1>
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