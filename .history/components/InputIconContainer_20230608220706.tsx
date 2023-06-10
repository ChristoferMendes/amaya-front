import { HStack } from "native-base"
import React from "react"

export const InputIconContainer = ({ children }: { chilren: React.ReactNode }) => {
  return (
    <HStack>
      {children}
    </HStack>
  )
}