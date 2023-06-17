import {
  Button,
  FormControl,
  HStack,
  Stack,
  Text,
  VStack,
  useToast,
} from "native-base";
import { Glasses, Mail, Eye, EyeOff, User } from "@tamagui/lucide-icons";
import { InputIconContainer } from "../components/InputIconContainer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../service/api";
import { tryCatch } from "../utils/tryCatch";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import Form2 from "native-base-formify";
import Form from "react-native-formify";

export default function InitialScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isRegister, setIsRegister] = useState(false);
  const toast = useToast();
  const router = useRouter();

  const renderRightInputElement = (inputType?: "email" | "password") => {
    if (inputType === "email") {
      return (
        <InputIconContainer>
          <Mail color="#fff" />
        </InputIconContainer>
      );
    }

    return inputType === "password" ? (
      <InputIconContainer>
        {isPasswordVisible ? (
          <Eye
            color="#fff"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        ) : (
          <EyeOff
            color="#fff"
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          />
        )}
      </InputIconContainer>
    ) : (
      <InputIconContainer>
        <User color="#fff" />
      </InputIconContainer>
    );
  };

  const login = async (formData: any) => {
    const [data, error] = await tryCatch(api.post("/login", formData));
    const isAxiosError = error instanceof AxiosError;

    if (!isAxiosError) {
      toast.show({
        title: "Login successful",
        backgroundColor: "green.500",
        duration: 800,
      });
      return navigateToHome();
    }

    const message = error.response?.data?.message;
    if (!message) return;

    toast.show({ title: message, backgroundColor: "red.500", duration: 800 });
  };

  const navigateToHome = () => {
    router.push("/home");
  };

  const register = async (formData: any) => {
    const [data, error] = await tryCatch(api.post("/register", formData));
    const isAxiosError = error instanceof AxiosError;

    if (!isAxiosError) {
      return navigateToHome();
    }

    const message = error.response?.data?.message;

    if (!message) return;

    toast.show({ title: message, backgroundColor: "red.500", duration: 800 });
  };

  const toggleRegister = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      <VStack alignItems={"center"} flex={1} justifyContent="center">
        <Glasses size={90} />
        <Text
          fontFamily={"Righteous_400Regular"}
          fontSize={"32"}
          color={"#5ce1e6"}
        >
          PROJECT AMAYA
        </Text>
        <Text fontFamily={"Righteous_400Regular"} fontSize={"16"}>
          Be the change that you desire to see in the world
        </Text>
        <Stack w="full" px={"6"} mt={"2"}>
          {/* <Form2 control={control} errors={errors}>
            <Form2.Input name="name" />
            <Form2.TextArea name="hello!" labelText="Hello!" />
          </Form2> */}
          <Form control={control} errors={errors}>
            <Form.Input name="name" />
            <Form.TextArea name="desc" />
          </Form>
          <Button onPress={handleSubmit((data) => console.log(data))}>
            Submit
          </Button>
          {/* {isRegister ? (
            <Button mt={"4"} onPress={handleSubmit(register)}>
              Register
            </Button>
          ) : (
            <Button mt={"4"} onPress={handleSubmit(login)}>
              Login
            </Button>
          )} */}
          {isRegister ? (
            <HStack justifyContent={"center"} space="2" mt={"2"}>
              <Text>Already have an account?</Text>
              <Text
                color={"#5ce1e6"}
                fontWeight={"900"}
                onPress={toggleRegister}
              >
                Login now
              </Text>
            </HStack>
          ) : (
            <HStack justifyContent="center" space="2" mt={"2"}>
              <Text>Does not have an account?</Text>
              <Text
                color={"#5ce1e6"}
                fontWeight={"900"}
                onPress={toggleRegister}
              >
                Sign up now
              </Text>
            </HStack>
          )}
        </Stack>
        <FormControl></FormControl>
      </VStack>
    </>
  );
}
