import { FormControl, Input as NativeBaseInput } from "native-base"
import { IInputComponentType, IInputProps } from "native-base/lib/typescript/components/primitives/Input/types"
import { Children, cloneElement } from "react"
import { Control, Controller, FieldValues, useForm } from "react-hook-form"

const Main = ({ children, control }: { children: React.ReactElement[], control: Control<FieldValues, any> }) => {
  const arrayChildren = Children.toArray(children)

  return (
    <FormControl>
      {Children.map(arrayChildren, (child) => {
        const isReactElement = child && typeof child === 'object' && 'type' in child && 'props' in child

        if (!isReactElement) return null;

        return (
          <Controller
            control={control}
            name={child.props.name}
            render={({ field: { onChange, value } }) => {

              return cloneElement(child, { onChange, value })
            }}
          />
        )
      })}
    </FormControl>
  )
}

interface InputProps extends IInputProps {
  label?: string;
  name: string;
}

const Input = (props: InputProps) => {
  return (
    <>
      <FormControl.Label>{props.label ?? props.name}</FormControl.Label>
      <NativeBaseInput type={props.type} {...props} />
    </>
  )
}


export const Form = Object.assign(Main, { Input })
