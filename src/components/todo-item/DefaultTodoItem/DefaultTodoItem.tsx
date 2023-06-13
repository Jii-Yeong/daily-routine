import checkImage from "@/assets/images/todo-item/check-image.webp"
import "./DefaultTodoItem.scss"
import {useState} from "react";
import {TodoItemModel} from "@/model/todo/todo-item.model.ts";
import MuIcon from "@/components/icon/MuIcon.tsx";

type DefaultTodoItemProps = {
  item: TodoItemModel
  clickCheckbox: (id: number, checked: boolean) => void
  deleteTodoItem: (id: number) => void
}

export default function DefaultTodoItem({item, clickCheckbox}: DefaultTodoItemProps) {
  const [isChecked, setIsChecked] = useState(item.checked)

  const handleClickCheckbox = () => {
    setIsChecked(!isChecked)
    clickCheckbox(item.id, !isChecked)
  }
  return (
    <div className="default-todo-item">
      <div className="todo-item">
        <div className="check-box" onClick={handleClickCheckbox}>
          {isChecked && <img className="check-image" src={checkImage} alt="check-image"/>}
        </div>
        <p className="todo-text">{item.text}</p>
      </div>
      <div className="control-todo-item">
        <MuIcon icon="delete" cursor="pointer"/>
        <MuIcon icon="edit" cursor="pointer"/>
      </div>
    </div>
  )
}