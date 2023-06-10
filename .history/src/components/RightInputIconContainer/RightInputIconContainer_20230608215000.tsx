import { HStack, View } from 'native-base';

export function RightInputIconContainer({ children }: { children: React.ReactNode }) {
  return (
    <HStack bg={'gray.400'} h="full" alignItems={'center'} justifyContent={'center'} w={'12'}>
      {children}
    </HStack>
  );
}
