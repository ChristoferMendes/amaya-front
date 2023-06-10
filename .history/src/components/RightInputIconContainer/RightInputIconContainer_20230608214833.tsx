import { View } from 'native-base';

export function RightInputIconContainer({ children }: { children: React.ReactNode }) {
  return (
    <HStack bg={'red.300'} h="full">
      {children}
    </HStack>
  );
}
