import { HStack, View } from 'native-base';

export function RightInputIconContainer({ children }: { children: React.ReactNode }) {
  return (
    <HStack bg={'blue.300'} h="full" alignItems={'center'} justifyItems={'center'} w={'12'}>
      {children}
    </HStack>
  );
}
