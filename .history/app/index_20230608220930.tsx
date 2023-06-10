import { Button, HStack, Input, Text, VStack } from 'native-base';
import { Glasses, Mail, Lock } from '@tamagui/lucide-icons'
import { InputIconContainer } from '../components/InputIconContainer';
import { useState } from 'react';


export default function Test() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)

  const renderRightInputElement = (inputType: 'email' | 'password') => {
    if (inputType === 'email') {
      return (
        <InputIconContainer>
          <Mail color='#fff' />
        </InputIconContainer>
      )
    }

    return (
      <InputIconContainer>
        <Lock color='#fff' />
      </InputIconContainer>
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
          <Input placeholder='Password' type='password' rightElement={renderRightInputElement('password')} />
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