import checkImage from "@/assets/images/todo-item/check-image.webp"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx"
import MuIcon from "@/components/icon/MuIcon.tsx"
import EditorInputWrapper from "@/components/input/EditorInputWrapper/EditorInputWrapper"
import TodoInput from "@/components/input/TodoInput/TodoInput.tsx"
import { TodoItemModel } from "@/model/todo/todo-item.model.ts"
import { useState } from "react"
import "./DefaultTodoItem.scoped.scss"

type DefaultTodoItemProps = {
  item: TodoItemModel
  clickCheckbox: (id: number, checked: boolean) => void
  editTodoItem: (id: number, text: string) => void
  clickDelete: (id: number) => void
  enterTodoItem?: (text: string, itemId?: TodoItemModel["id"]) => void
  isShowAddButton?: boolean
}

export default function DefaultTodoItem({
  item,
  clickCheckbox,
  clickDelete,
  editTodoItem,
  enterTodoItem,
  isShowAddButton = true,
}: DefaultTodoItemProps) {
  const [isChecked, setIsChecked] = useState(item.checked)
  const [isClickEdit, setIsClickEdit] = useState(false)
  const [isClickAdd, setIsClickAdd] = useState(false)
  const [editorValue, setEditorValue] = useState("")

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

  const handleClickSubmitButton = () => {
    if (!enterTodoItem) return
    enterTodoItem(editorValue, item.id)
    setIsClickAdd(false)
    console.log("123")
  }

  const handleClickAddButton = () => {
    setIsClickAdd(true)
  }

  const handleClickCancelButton = () => {
    setIsClickAdd(false)
  }
  return (
    <>
      <div className="default-todo-item">
        {!isClickEdit ? (
          <>
            <div className="todo-item">
              <div className="check-box" onClick={handleClickCheckbox}>
                {isChecked && (
                  <img
                    className="check-image"
                    src={checkImage}
                    alt="check-image"
                  />
                )}
              </div>
              <div
                className="todo-text"
                dangerouslySetInnerHTML={{ __html: item.text }}
              />
            </div>
          </>
        ) : (
          <div className="todo-item-edit-input">
            <div className="input-area">
              <TodoInput
                setTodoItemValue={handleEditValue}
                buttonText="수정"
                defaultInputValue={item.text}
                buttonFontSize={12}
              />
            </div>
            <DefaultButton
              text="취소"
              onClickButton={handleCancelEdit}
              fontSize={12}
            />
          </div>
        )}
        {!isClickEdit && (
          <div className="control-todo-item">
            {isShowAddButton && (
              <MuIcon
                icon="add"
                cursor="pointer"
                clickIcon={handleClickAddButton}
              />
            )}
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
      {isClickAdd && (
        <div className="editor-container">
          <EditorInputWrapper
            editorValue={editorValue}
            setEditorValue={setEditorValue}
            clickSubmitButton={handleClickSubmitButton}
            clickCancelButton={handleClickCancelButton}
          />
        </div>
      )}
    </>
  )
}
