import { FormControl } from "native-base"
import { Controller, useForm } from "react-hook-form"

export const Form = ({ children, name }: { children: React.ReactElement[], name: string }) => {
  const { control } = useForm()

  return (
    <FormControl>
      {children.map(child => (
        <Controller control={control} name={name} key={child.props.name} render={child.props.render}/>
      ))}
    </FormControl>
  )
}