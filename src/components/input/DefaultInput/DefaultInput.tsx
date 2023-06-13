import { ChangeEvent, KeyboardEvent } from "react"
import "./DefaultInput.scss"

type DefaultInputProps = {
  changeInput: (e: ChangeEvent) => void;
  enterInput: (e: KeyboardEvent) => void;
  inputValue?: string;
};
export default function DefaultInput({
  changeInput,
  enterInput,
  inputValue = "",
}: DefaultInputProps) {
  return (
    <input
      className="default-input"
      onChange={changeInput}
      onKeyUp={enterInput}
      value={inputValue}
    />
  )
}