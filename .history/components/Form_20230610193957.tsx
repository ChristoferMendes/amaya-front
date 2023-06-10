import { FormControl, Input as NativeBaseInput } from "native-base"
import { IInputComponentType, IInputProps } from "native-base/lib/typescript/components/primitives/Input/types"
import { Children } from "react"
import { Controller, useForm } from "react-hook-form"

const Main = ({ children }: { children: React.ReactElement[], name: string }) => {
  const { control } = useForm()
  const arrayChildren = Children.toArray(children)

  return (
    <FormControl>
      {Children.map(arrayChildren, (child) => {
        const isReactElement = child && typeof child === 'object' && 'type' in child && 'props' in child

        if (!isReactElement) return null;

        <Controller
          control={control}
          name={child.props.name}
          render={() => null}
        />
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
