import { FormControl } from "native-base"
import { Controller, useForm } from "react-hook-form"

export const Form = ({ children }: { children: JSX.Element }) => {
  const { control } = useForm()

  return (
    <FormControl>
      <Controller control={control} render={() => null} />
      {children}
    </FormControl>
  )
}