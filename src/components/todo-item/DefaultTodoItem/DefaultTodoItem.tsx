import checkImage from "@/assets/images/todo-item/check-image.webp"
import "./DefaultTodoItem.scss"
import { useState } from "react"
import { TodoItemModel } from "@/model/todo/todo-item.model.ts"
import MuIcon from "@/components/icon/MuIcon.tsx"
import TodoInput from "@/components/input/TodoInput/TodoInput.tsx"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx"

type DefaultTodoItemProps = {
  item: TodoItemModel;
  clickCheckbox: (id: number, checked: boolean) => void;
  editTodoItem: (id: number, text: string) => void;
  clickDelete: (id: number) => void;
};

export default function DefaultTodoItem({
  item,
  clickCheckbox,
  clickDelete,
  editTodoItem,
}: DefaultTodoItemProps) {
  const [isChecked, setIsChecked] = useState(item.checked)
  const [isClickEdit, setIsClickEdit] = useState(false)
  const handleClickCheckbox = () => {
    setIsChecked(!isChecked)
    clickCheckbox(item.id, !isChecked)
  }

  const handleClickDeleteButton = () => {
    clickDelete(item.id)
  }

  const handleClickEditButton = () => {
    setIsClickEdit(!isClickEdit)
  }

  const handleEditValue = (text: string) => {
    editTodoItem(item.id, text)
    setIsClickEdit(false)
  }

  const handleCancelEdit = () => {
    setIsClickEdit(false)
  }
  return (
    <div className="default-todo-item">
      {!isClickEdit ? (
        <div className="todo-item">
          <div className="check-box" onClick={handleClickCheckbox}>
            {isChecked && (
              <img className="check-image" src={checkImage} alt="check-image" />
            )}
          </div>
          <p className="todo-text">{item.text}</p>
        </div>
      ) : (
        <div className="todo-item-edit-input">
          <div className="input-area">
            <TodoInput
              setTodoItemValue={handleEditValue}
              buttonText="수정"
              defaultInputValue={item.text}
            />
          </div>
          <DefaultButton text="취소" onClickButton={handleCancelEdit} />
        </div>
      )}
      {!isClickEdit && (
        <div className="control-todo-item">
          <MuIcon
            icon="delete"
            cursor="pointer"
            clickIcon={handleClickDeleteButton}
          />
          <MuIcon
            icon="edit"
            cursor="pointer"
            clickIcon={handleClickEditButton}
          />
        </div>
      )}
    </div>
  )
}
