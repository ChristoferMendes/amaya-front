import { FormControl } from "native-base"
import { useForm } from "react-hook-form"

export const Form = ({ children }: { children: JSX.Element }) => {
  const { control } = useForm()

  return (
    <FormControl>
      {children}
    </FormControl>
  )
}