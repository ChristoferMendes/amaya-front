import { Button, FormControl, HStack, Stack, Text, VStack } from 'native-base';
import { Glasses, Mail, Eye, EyeOff, User } from '@tamagui/lucide-icons'
import { InputIconContainer } from '../components/InputIconContainer';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '../components/Form';

export default function InitialScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm()
  const [isRegister, setIsRegister] = useState(false)

  const renderRightInputElement = (inputType?: 'email' | 'password') => {
    if (inputType === 'email') {
      return (
        <InputIconContainer>
          <Mail color='#fff' />
        </InputIconContainer>
      )
    }

    return inputType === 'password' ? (
      <InputIconContainer>
        {isPasswordVisible ? <Eye color='#fff' onPress={() => setIsPasswordVisible(!isPasswordVisible)} /> : <EyeOff color='#fff' onPress={() => setIsPasswordVisible(!isPasswordVisible)} />}
      </InputIconContainer>
    ) : (
      <InputIconContainer>
        <User color='#fff' />
      </InputIconContainer>
    )
  }

  const login = (data: any) => {
    console.log(data)
  }

  const toggleRegister = () => {
    setIsRegister(!isRegister)
  }


  return (
    <>
      <VStack alignItems={'center'} flex={1} justifyContent='center'>
        <Glasses size={90} />
        <Text fontFamily={'Righteous_400Regular'} fontSize={'32'} color={'#5ce1e6'}>PROJECT AMAYA</Text>
        <Text fontFamily={'Righteous_400Regular'} fontSize={'16'}>Be the change that you desire to see in the world</Text>
        <Stack w="full" px={'6'} mt={'2'}>
          <Form control={control}>
            {isRegister && <Form.Input name="name" label="Name" placeholder='John Doe' rightElement={renderRightInputElement()} /> as any}
            <Form.Input name='email' label='Email' placeholder='john@gmail.com' rightElement={renderRightInputElement('email')} />
            <Form.Input name='password' label='Password' placeholder='********' rightElement={renderRightInputElement('password')} type={isPasswordVisible ? 'text' : 'password'} />
          </Form>
          <Button mt={'4'} onPress={handleSubmit(login)}>Login</Button>
          {!isRegister ? (
            <HStack justifyContent='center' space="2" mt={'2'}>
              <Text>Does not have an account?</Text>
              <Text color={'#5ce1e6'} fontWeight={'900'} onPress={toggleRegister}>Sign up now</Text>
            </HStack>
          ) : (
            <HStack justifyContent={'center'} space="2" mt={'2'}>>
              <Text>Already have an account?</Text>
            </HStack>
          )}
        </Stack>
        <FormControl>
        </FormControl>
      </VStack>
    </>
  );
}