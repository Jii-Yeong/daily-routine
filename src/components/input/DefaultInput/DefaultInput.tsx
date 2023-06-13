import {ChangeEvent, KeyboardEvent} from "react";
import "./DefaultInput.scss"

type DefaultInputProps = {
  changeInput: (e: ChangeEvent) => void
  enterInput: (e: KeyboardEvent) => void
}
export default function DefaultInput({changeInput, enterInput}: DefaultInputProps) {
  return (
    <input className="default-input" onChange={changeInput} onKeyUp={enterInput}/>
  )
}