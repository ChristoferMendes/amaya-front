import { Text } from "native-base";
import Voice from "@react-native-voice/voice";
import { useEffect, useState } from "react";

export function SpeechToText() {
  const [started, setStarted] = useState(false);
  const [result, setResult] = useState("");
  const [helperTexts, setHelperTexts] = useState([""]);

  const startSpeechToText = async () => {
    await Voice.start("pt-BR");
  };

  useEffect(() => {
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;

    return () => {
      setHelperTexts((prev) => [...prev, "REMOVED ALL LISTENERS"]);
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const stopSpeechToText = async () => {
    setStarted(false);
    await Voice.stop();
  };

  useEffect(() => {
    startSpeechToText();

    return () => {
      setHelperTexts((prev) => [...prev, "REMOVED ALL LISTENERS"]);
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechResults = (result: any) => {
    setResult(result.value[0]);
    startSpeechToText();
  };

  const onSpeechError = (error: any) => {
    console.log(error);
    startSpeechToText();
  };

  return (
    <>
      <Text color={"white"} position={"absolute"} bottom={"1/4"}>
        {result}
      </Text>
      <Text>{helperTexts}</Text>
    </>
  );
}
