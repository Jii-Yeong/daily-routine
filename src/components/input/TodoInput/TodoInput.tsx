import "./TodoInput.scss"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx";
import {ChangeEvent, useState} from "react";

type TodoInputProps = {
  setTodoItemValue: (text: string) => void
}

export default function TodoInput({setTodoItemValue}: TodoInputProps) {
  const [inputText, setInputText] = useState("")

  const changeInput = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    const value = element.value
    setInputText(value)
  }
  const enterTodoItem = () => {
    setTodoItemValue(inputText)
  }
  return (
    <div className="todo-input">
      <input className="input" onChange={changeInput}/>
      <DefaultButton text="입력" onClickButton={enterTodoItem}/>
    </div>
  )
}