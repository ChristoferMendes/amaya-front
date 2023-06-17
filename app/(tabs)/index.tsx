import { Button, Text, View } from "native-base";
import { SafeAreaView } from "react-native-safe-area-context";
import Voice from "@react-native-voice/voice";
import { useState } from "react";



export default function Home() {
  const [started, setStarted] = useState(false)

  const startSpeechToText = async () => {
    try {
      await Voice.start("en-US");

    } catch (e) {
      console.log(e)
    }

    setStarted(true);
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button onPress={startSpeechToText}>Start</Button>
    </SafeAreaView>
  )
}