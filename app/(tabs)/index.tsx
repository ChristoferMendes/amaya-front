import { Box, Button, HStack, Text, VStack, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect, useState } from "react";
import { Camera } from "expo-camera";
import { SpeechToText } from "../../components/SpeechToText";
import { NoCameraAccess } from "../../components/NoCameraAccess";
import { useFocusEffect } from "expo-router";

export default function Home() {
  const [started, setStarted] = useState(false);
  const [hasPermission, setHasPermission] = useState<boolean>();
  const [renderCamera, setRenderCamera] = useState(false);

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

  return (
    <SafeAreaView>
      <HStack justifyContent={"center"} h="95%" alignItems="center">
        <View rounded={"3xl"} overflow={"hidden"}>
          {renderCamera && (
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
          )}
        </View>
      </HStack>
    </SafeAreaView>
  );
}
