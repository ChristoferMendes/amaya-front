import {
  Button,
  FormControl,
  HStack,
  Stack,
  Text,
  VStack,
  useToast,
} from "native-base";
import {
  Glasses,
  Mail,
  Eye,
  EyeOff,
  User,
  Import,
} from "@tamagui/lucide-icons";
import { InputIconContainer } from "../components/InputIconContainer";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../service/api";
import { tryCatch } from "../utils/tryCatch";
import { AxiosError } from "axios";
import { useRouter } from "expo-router";
import Form from "native-base-formify";
import { useAuth } from "../store/useAuth";
import { Righteous_400Regular } from "../constants/Font";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUser } from "../store/useUser";

const UserSchema = z.object({
  name: z.string().optional(),
  email: z.string().email({ message: "Must be a valid email" }),
  password: z.string().min(6, { message: "Must be at least 6 characters" }),
});

export type IUser = z.infer<typeof UserSchema>;

export default function InitialScreen() {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<IUser>({
    resolver: zodResolver(UserSchema),
  });
  const [isRegister, setIsRegister] = useState(false);
  const toast = useToast();
  const router = useRouter();
  const {
    actions: { login },
  } = useAuth();
  const {
    actions: { storeUser },
  } = useUser();
  const [loading, setLoading] = useState(false);

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

  const treatError = (error: Error | null | undefined) => {
    const isAxiosError = error instanceof AxiosError;

    if (!isAxiosError) {
      toast.show({ title: "Something went wrong" });
      return false;
    }

    if (!error.response?.data.message) {
      toast.show({ title: "Something went wrong" });
      return false;
    }

    if (error) {
      const { message, type } = error.response.data;

      console.log(error);
      setError(type, { message });
      return false;
    }

    return true;
  };

  const successLoggedIn = () => {
    navigateToHome();
    toast.show({ title: "Success" });
  };

  const navigateToHome = () => {
    router.push("/intro");
  };

  const errorToast = () => {
    toast.show({ title: "Something went wrong" });
    setLoading(false);
  };

  function verifyData<T>(data: T | AxiosError | null): data is T {
    return data !== null && !(data instanceof AxiosError);
  }

  const handleLogin = async (formData: any) => {
    setLoading(true);
    const [data, error] = await tryCatch<IUser>(api.post("/login", formData));

    const hasError = treatError(error);
    if (hasError) return errorToast();

    const dataIsClean = verifyData<IUser>(data);

    if (!dataIsClean) return errorToast();

    setLoading(false);
    storeUser(data);
    successLoggedIn();
  };

  const handleRegister = async (formData: IUser) => {
    setLoading(true);
    const [data, error] = await tryCatch<IUser>(
      api.post("/register", formData)
    );

    const hasError = treatError(error);
    if (hasError) return errorToast();

    const dataIsClean = verifyData<IUser>(data);

    if (!dataIsClean) return errorToast();

    storeUser(data);
    successLoggedIn();
    setLoading(false);
  };

  const toggleRegister = () => {
    reset();
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
          PROJETO AMAYA
        </Text>
        <Text fontFamily={"Righteous_400Regular"} fontSize={"16"}>
          Seja a mudança que você deseja ver no mundo
        </Text>
        <Stack w="full" px={"6"} mt={"2"}>
          <Form control={control} errors={errors}>
            {isRegister && ((<Form.Input name="name" label="Name" />) as any)}
            <Form.Input
              name="email"
              label="Email"
              _labelProps={{ _text: { fontFamily: Righteous_400Regular } }}
              rightElement={renderRightInputElement("email")}
            />
            <Form.Input
              label="Senha"
              name="password"
              _labelProps={{ _text: { fontFamily: Righteous_400Regular } }}
              rightElement={renderRightInputElement("password")}
            />
          </Form>
          <Button
            mt="5"
            onPress={() => {
              storeUser({
                email: "dev@gmail.com",
                password: "123",
                name: "DEV",
              });
              router.push("/intro");
            }}
          >
            Entre como convidado
          </Button>
          {isRegister ? (
            <Button onPress={handleSubmit(handleRegister)} mt={"4"}>
              {loading ? "Carregando..." : "Registrar"}
            </Button>
          ) : (
            <Button onPress={handleSubmit(handleLogin)} mt="4">
              {loading ? "Carregando..." : "Entrar"}
            </Button>
          )}
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
      </VStack>
    </>
  );
}
