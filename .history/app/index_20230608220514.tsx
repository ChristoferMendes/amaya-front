import { Button, HStack, Input, Text, VStack } from 'native-base';
import { Glasses, Mail, Lock } from '@tamagui/lucide-icons'
import { RightInputIconContainer } from '../src/components/RightInputIconContainer';


export default function Test() {

  const renderRightInputElement = (inputType: 'email' | 'password') => {
    if (inputType === 'email') {
      return (
        <RightInputIconContainer>
          <Mail color='#fff'/>
        </RightInputIconContainer>
      )
    }

    return (
      <RightInputIconContainer>
        <Lock color='#fff'/>
      </RightInputIconContainer>
    )
  }

  return (
    <>
      <VStack alignItems={'center'} flex={1} justifyContent='center'>
        <Glasses size={90} />
        <Text fontFamily={'Righteous_400Regular'} fontSize={'32'} color={'#5ce1e6'}>PROJECT AMAYA</Text>
        <Text fontFamily={'Righteous_400Regular'} fontSize={'16'}>Be the change that you desire to see in the world</Text>
        <VStack w={'100%'} space="4" mt="2" px="4">
          <Input placeholder='Email' rightElement={renderRightInputElement('email')} />
          <Input placeholder='Password' rightElement={renderRightInputElement('password')} />
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