import { Button, H1, Input, Text, YStack } from 'tamagui';
import { Glasses } from '@tamagui/lucide-icons'
import { TextWithFont } from '../components/TextWithFont';

export default function Test() {
  return (
    <>
      <YStack ai={'center'} flex={1} justifyContent='center'>
        <Glasses size={'$10'} />
        <TextWithFont style={{ color: '#5ce1e6', fontSize: 34  }}>PROJECT AMAYA</TextWithFont>
        <YStack w={'100%'} space="$4" mt="$2" px="$4">
          <Input placeholder='Email' size={'$4'} h={"$3"} />
          <Input placeholder='Senha' size={'$4'} h={"$3"} />
          <Button bg="#5ce1e6" >Entrar</Button>
          <Text width={"$"} flex={1}>Does not have an account?</Text>
        </YStack>
      </YStack>
    </>
  );
}