import { Button, FormControl, HStack, Input, Text, VStack } from 'native-base';
import { Glasses, Mail, Eye, EyeOff } from '@tamagui/lucide-icons'
import { InputIconContainer } from '../components/InputIconContainer';
import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Form } from '../components/Form';

export default function InitialScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { control, handleSubmit, formState: { errors } } = useForm()

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
        {isPasswordVisible ? <Eye color='#fff' onPress={() => setIsPasswordVisible(!isPasswordVisible)} /> : <EyeOff color='#fff' onPress={() => setIsPasswordVisible(!isPasswordVisible)} />}
      </InputIconContainer>
    )
  }

  const login = (data: any) => {
    console.log(data)
  }


  return (
    <>
      <VStack alignItems={'center'} flex={1} justifyContent='center'>
        <Glasses size={90} />
        <Text fontFamily={'Righteous_400Regular'} fontSize={'32'} color={'#5ce1e6'}>PROJECT AMAYA</Text>
        <Text fontFamily={'Righteous_400Regular'} fontSize={'16'}>Be the change that you desire to see in the world</Text>
        <Form control={control}>
          <Form.Input name='email'/>
          <Form.Input name='password'/>
        </Form>
        <FormControl>
          {/* <VStack w={'100%'} space="4" mt="2" px="4">
            <Controller name="email" control={control} render={() => (
              <Input placeholder='Email' rightElement={renderRightInputElement('email')} />
            )}
            />
            <Controller name="password" control={control} render={({ field: { onChange, onBlur, value } }) => (
              <Input onBlur={onBlur} value={value} onChangeText={onChange} placeholder='Password' type={isPasswordVisible ? 'text' : 'password'} rightElement={renderRightInputElement('password')} />
            )} />
            <Button bg="#5ce1e6" onPress={handleSubmit(login)}>Entrar</Button>
            <HStack justifyContent='center' space="2">
              <Text>Does not have an account?</Text>
              <Text color={'#5ce1e6'} fontWeight={'900'}>Sign up now</Text>
            </HStack>
          </VStack> */}
        </FormControl>
      </VStack>
    </>
  );
}