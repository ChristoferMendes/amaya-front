import { FormControl } from "native-base"
import { Controller, useForm } from "react-hook-form"

export const Form = ({ children, name }: { children: React.ReactElement, name: string }) => {
  const { control } = useForm()

  return (
    <FormControl>
      <Controller name={name} control={control} render={() => children} />
    </FormControl>
  )
}