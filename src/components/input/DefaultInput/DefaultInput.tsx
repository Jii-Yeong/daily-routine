import { parseDomSizeValue } from "@/utils/string.utils"
import { ChangeEvent, KeyboardEvent } from "react"
import "./DefaultInput.scoped.scss"

type DefaultInputProps = {
  changeInput: (e: ChangeEvent) => void
  enterInput?: (e: KeyboardEvent) => void
  inputValue?: string
  height?: number | string
  fontSize?: number | string
  placeholder?: string
}
export default function DefaultInput({
  changeInput,
  enterInput,
  inputValue = "",
  height = 30,
  fontSize = 15,
  placeholder,
}: DefaultInputProps) {
  const style = {
    height: parseDomSizeValue(height),
    fontSize: parseDomSizeValue(fontSize),
  }
  return (
    <input
      style={style}
      className="default-input"
      onChange={changeInput}
      onKeyDown={enterInput}
      value={inputValue}
      placeholder={placeholder}
    />
  )
}
