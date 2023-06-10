import { Button, H1, Input, Text, XStack, YStack } from 'tamagui';
import { Glasses } from '@tamagui/lucide-icons'
import { TextWithFont } from '../components/TextWithFont';

export default function Test() {
  return (
    <>
      <YStack ai={'center'} flex={1} justifyContent='center'>
        <Glasses size={'$10'} />
        <TextWithFont style={{ color: '#5ce1e6', fontSize: 34 }}>PROJECT AMAYA</TextWithFont>
        <TextWithFont style={{fontSize: 16}}>Be the change that you desire to see in the world</TextWithFont>
        <YStack w={'100%'} space="$4" mt="$2" px="$4">
          <Input placeholder='Email' size={'$4'} h={"$3"} />
          <Input placeholder='Senha' size={'$4'} h={"$3"} />
          <Button bg="#5ce1e6" >Entrar</Button>
          <XStack justifyContent='center' space="$2">
            <Text>Does not have an account?</Text>
            <Text color={'#5ce1e6'} fontWeight={'900'}>Sign up now</Text>
          </XStack>

        </YStack>
      </YStack>
    </>
  );
}