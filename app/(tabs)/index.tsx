import { Box, Button, HStack, Text, VStack, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { SpeechToText } from "../../components/SpeechToText";
import { NoCameraAccess } from "../../components/NoCameraAccess";
import { useFocusEffect } from "expo-router";
import { AnimatePresence, MotiImage, MotiView } from "moti";
import { Righteous_400Regular } from "../../constants/Font";
import { StyleSheet } from "react-native";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [renderCamera, setRenderCamera] = useState(false);
  const [isDemoOn, setIsDemoOn] = useState(false);
  const [exitCompleted, setExitCompleted] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setRenderCamera(true);

      return () => {
        setRenderCamera(false);
      };
    }, [])
  );

  useEffect(() => {
    requestCameraPermission();
  }, []);

  const requestCameraPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === "granted");
  };

  if (!hasPermission) {
    return <NoCameraAccess requestCameraPermission={requestCameraPermission} />;
  }

  const handleDemoOn = () => {
    setIsDemoOn(true);
  };

  const handleExitCompleted = () => {
    setExitCompleted(true);
  };

  return (
    <SafeAreaView>
      <HStack justifyContent={"center"} h="95%" alignItems="center">
        <VStack>
          <AnimatePresence onExitComplete={handleExitCompleted}>
            {!isDemoOn && (
              <>
                <MotiImage
                  from={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ type: "timing", duration: 450 }}
                  source={require("../../assets/images/amaya-home.png")}
                  exit={{ opacity: 0 }}
                  exitTransition={{ type: "timing", duration: 450 }}
                />

                <MotiView
                  exit={{ opacity: 0 }}
                  exitTransition={{ type: "timing", duration: 450 }}
                >
                  <Button
                    alignSelf={"center"}
                    _text={{ fontFamily: Righteous_400Regular }}
                    onPress={handleDemoOn}
                  >
                    Demo do projeto
                  </Button>
                </MotiView>
              </>
            )}
          </AnimatePresence>
        </VStack>
        <View rounded={"3xl"} overflow={"hidden"}>
          <AnimatePresence>
            {renderCamera && exitCompleted && (
              <MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: "timing", duration: 450 }}
              >
                <Camera style={{ width: 400, height: 500 }}>
                  <VStack
                    flex={1}
                    justifyContent={"flex-end"}
                    pb="5"
                    alignItems={"center"}
                  >
                    <SpeechToText />
                  </VStack>
                </Camera>
              </MotiView>
            )}
          </AnimatePresence>
        </View>
      </HStack>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  rightArrow: {
    position: "absolute",
    backgroundColor: "#0078fe",
    //backgroundColor:"red",
    width: 20,
    height: 25,
    bottom: 0,
    borderBottomLeftRadius: 25,
    right: -10,
  },

  rightArrowOverlap: {
    position: "absolute",
    backgroundColor: "#eeeeee",
    //backgroundColor:"green",
    width: 20,
    height: 35,
    bottom: -6,
    borderBottomLeftRadius: 18,
    right: -20,
  },
});
