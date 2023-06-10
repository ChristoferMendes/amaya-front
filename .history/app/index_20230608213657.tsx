import { Button, HStack, Input, Text, VStack } from 'native-base';
import { FontAwesome5 } from '@expo/vector-icons';
import { Plus } from '@tamagui/lucide-icons'


export default function Test() {
  return (
    <>
      <VStack alignItems={'center'} flex={1} justifyContent='center'>
        <Plus />
        <FontAwesome5 name='glasses' size={70} />
        <Text fontFamily={'Righteous_400Regular'} fontSize={'32'} color={'#5ce1e6'}>PROJECT AMAYA</Text>
        <Text style={{ fontSize: 16, color: '#5a5a5a' }}>Be the change that you desire to see in the world</Text>
        <VStack w={'100%'} space="4" mt="2" px="4">
          <Input placeholder='Email'/>
          <Input placeholder='Senha' size={'4'} h={"3"} />
          <Button bg="#5ce1e6" >Entrar</Button>
          <HStack justifyContent='center' space="2">
            <Text>Does not have an account?</Text>
            <Text color={'#5ce1e6'} fontWeight={'900'}>Sign up now</Text>
          </HStack>
        </VStack>
      </VStack>
    </>
  );
}