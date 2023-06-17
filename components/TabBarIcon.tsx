import { Home, Eye, Glasses } from "@tamagui/lucide-icons";
import { View } from "native-base";

type PossibleIcons = 'index' | 'speechlens' | 'signa-specs'

interface NavigationProps {
  focused: boolean
  color: string;
  size: number
}

export function TabBarIcon(name: PossibleIcons, { focused }: NavigationProps) {

  const style = {
    color: focused ? "#1e90ff" : "#ccc"
  }

  const icons = {
    index: <Home {...style} />,
    speechlens: <Eye {...style} />,
    'signa-specs': <Glasses {...style} />
  }


  return (
    <View>
      {icons[name]}
    </View>
  )
}