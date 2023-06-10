import { TextStyle } from "react-native"
import { StyleProp } from "react-native"
import { Text } from "react-native"

export const TextWithFont = ({ children, style }: { children: string, style?: StyleProp<TextStyle> }) => {
  
  
  return (
    <Text style={[{ fontFamily: 'Righteous_400Regular' }, style]}>{children}</Text>
  )
}