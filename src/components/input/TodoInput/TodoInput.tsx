import "./TodoInput.scss"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx";
import {ChangeEvent, KeyboardEvent, useState} from "react";
import DefaultInput from "@/components/input/DefaultInput/DefaultInput.tsx";

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
  const clickTodoItemButton = () => {
    setTodoItemValue(inputText)
  }

  const enterTodoItem = (e: KeyboardEvent) => {
    if (e.code === "Enter") {
      setTodoItemValue(inputText)
    }

  }
  return (
    <div className="todo-input">
      <div className="input-container">
        <DefaultInput changeInput={changeInput} enterInput={enterTodoItem}/>
      </div>
      <DefaultButton text="입력" onClickButton={clickTodoItemButton}/>
    </div>
  )
}