import { HStack, View } from 'native-base';

export function RightInputIconContainer({ children }: { children: React.ReactNode }) {
  return (
    <HStack bg={'red.300'} h="full" alignItems={'center'} w={'12'}>
      {children}
    </HStack>
  );
}
