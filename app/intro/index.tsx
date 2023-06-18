import AppIntroSlider from "react-native-app-intro-slider";
import { slides } from "./slides";
import { HStack, Image, Text, VStack, View } from "native-base";
import { ImageSourcePropType } from "react-native";
import { Righteous_400Regular } from "../../constants/Font";
import { ArrowRight, ArrowLeft, Check } from "@tamagui/lucide-icons";
import { useNavigation, useRouter } from "expo-router";

interface SlideItemsInterface {
  item: {
    key: number;
    title: string;
    text: string;
    background: ImageSourcePropType;
    alt_background: string;
    summarizedText: string;
  };
}

export default function Intro() {
  const router = useRouter();

  const renderItem = ({ item }: SlideItemsInterface) => {
    return (
      <VStack safeArea bg={"white"} flex={1} alignItems={"center"} pt={"8"}>
        <Text
          fontFamily={Righteous_400Regular}
          fontSize={"4xl"}
          color="primary.400"
        >
          {item.title}
        </Text>
        <View w="full" display={"flex"}>
          <Image
            source={item.background}
            size={96}
            resizeMode="contain"
            alt={item.alt_background}
          />
        </View>
        <View mx={6} mt={5}>
          <Text
            textAlign={"justify"}
            fontSize={"md"}
            fontFamily={Righteous_400Regular}
          >
            {item.summarizedText}
          </Text>
        </View>
      </VStack>
    );
  };

  const buttonNext = () => {
    return (
      <HStack
        backgroundColor={"primary.900"}
        width={"10"}
        height={"10"}
        alignItems={"center"}
        justifyContent={"center"}
        rounded={"full"}
      >
        <ArrowRight color="#fff" />
      </HStack>
    );
  };

  const buttonDone = () => {
    return (
      <HStack
        backgroundColor={"primary.900"}
        width={"10"}
        height={"10"}
        alignItems={"center"}
        justifyContent={"center"}
        rounded={"full"}
      >
        <Check color="#fff" />
      </HStack>
    );
  };

  const buttonSkip = () => {
    return (
      <HStack
        width={"20"}
        height={"8"}
        alignItems={"center"}
        justifyContent={"center"}
        rounded={"md"}
      >
        <Text color={"primary.900"}>Skip</Text>
      </HStack>
    );
  };

  const buttonPrev = () => {
    return (
      <HStack
        backgroundColor={"primary.900"}
        width={"10"}
        height={"10"}
        alignItems={"center"}
        justifyContent={"center"}
        rounded={"full"}
      >
        <ArrowLeft color="#fff" />
      </HStack>
    );
  };

  const handleRedirect = () => {
    router.push("(tabs)");
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      activeDotStyle={{
        backgroundColor: "#5ce1e6",
        width: 30,
      }}
      showSkipButton={true}
      showPrevButton={true}
      renderSkipButton={buttonSkip}
      renderNextButton={buttonNext}
      renderPrevButton={buttonPrev}
      onDone={handleRedirect}
      onSkip={handleRedirect}
      renderDoneButton={buttonDone}
    />
  );
}
