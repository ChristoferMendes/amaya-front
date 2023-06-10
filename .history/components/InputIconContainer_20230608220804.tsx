import { HStack } from "native-base"
import React from "react"

export const InputIconContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <HStack w={'20'} bg="#19202B" h="full">
      {children}
    </HStack>
  )
}