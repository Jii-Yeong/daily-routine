import checkImage from "@/assets/images/todo-item/check-image.webp"
import "./DefaultTodoItem.scss"
import {useState} from "react";

type DefaultTodoItemProps = {
  text: string
  checked: boolean
}

export default function DefaultTodoItem({text, checked}: DefaultTodoItemProps) {
  const [isChecked, setIsChecked] = useState(checked)

  const clickCheckbox = () => {
    if (isChecked) {
      setIsChecked(false)
      return
    }
    setIsChecked(true)
  }
  return (
    <div className="default-todo-item">
      <div className="check-box" onClick={clickCheckbox}>
        {isChecked && <img className="check-image" src={checkImage} alt="check-image"/>}
      </div>
      <p className="todo-text">{text}</p>
    </div>
  )
}