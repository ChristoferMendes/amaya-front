import { FormControl, Input as NativeBaseInput } from "native-base"
import { IInputComponentType, IInputProps } from "native-base/lib/typescript/components/primitives/Input/types"
import { Controller, useForm } from "react-hook-form"

const Main = ({ children }: { children: React.ReactElement[], name: string }) => {
  const { control } = useForm()

  return (
    <FormControl>
      {children.map(child => (
        <Controller control={control} name={child.props.name} key={child.props.name} render={child.props.render} />
      ))}
    </FormControl>
  )
}

const Input = (props: IInputProps) => {
  return (
    <>
      <FormControl.Label>{props}</FormControl.Label>
      <NativeBaseInput type=""/>
    </>


  )
}