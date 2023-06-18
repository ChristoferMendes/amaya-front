import { Home, Eye, User } from "@tamagui/lucide-icons";
import { View } from "native-base";

type PossibleIcons = "index" | "user";

interface NavigationProps {
  focused: boolean;
  color: string;
  size: number;
}

export function TabBarIcon(name: PossibleIcons, { focused }: NavigationProps) {
  const style = {
    color: focused ? "#1e90ff" : "#ccc",
  };

  const icons = {
    index: <Home {...style} />,
    user: <User {...style} />,
  };

  return <View>{icons[name]}</View>;
}
