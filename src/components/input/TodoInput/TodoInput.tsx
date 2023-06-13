import "./TodoInput.scss"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx"
import { ChangeEvent, KeyboardEvent, useState } from "react"
import DefaultInput from "@/components/input/DefaultInput/DefaultInput.tsx"

type TodoInputProps = {
  setTodoItemValue: (text: string) => void;
  defaultInputValue?: string;
  buttonText: string;
};

export default function TodoInput({
  setTodoItemValue,
  defaultInputValue = "",
  buttonText,
}: TodoInputProps) {
  const [inputText, setInputText] = useState(defaultInputValue)

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
        <DefaultInput
          changeInput={changeInput}
          enterInput={enterTodoItem}
          inputValue={inputText}
        />
      </div>
      <DefaultButton text={buttonText} onClickButton={clickTodoItemButton} />
    </div>
  )
}
