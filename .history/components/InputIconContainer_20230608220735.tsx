import { HStack } from "native-base"
import React from "react"

export const InputIconContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <HStack>
      {children}
    </HStack>
  )
}