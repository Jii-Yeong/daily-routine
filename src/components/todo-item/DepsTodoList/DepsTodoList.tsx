import AddButton from "@/components/button/AddButton/AddButton"
import EditorInputWrapper from "@/components/input/EditorInputWrapper/EditorInputWrapper"
import DefaultTodoItem from "@/components/todo-item/DefaultTodoItem/DefaultTodoItem"
import { useTodoList } from "@/hooks/todo/useTodoList"
import { useState } from "react"
import "./DepsTodoList.scoped.scss"

export default function DepsTodoList() {
  const {
    todoList,
    enterTodoItem,
    clickCheckboxButton,
    clickDeleteButton,
    editTodoItemValue,
  } = useTodoList()

  const [editorValue, setEditorValue] = useState("")
  const [isClickAddButton, setIsClickAddButton] = useState(false)
  const handleClickSubmitButton = () => {
    enterTodoItem(editorValue)
  }

  const handleClickAddButton = () => {
    setIsClickAddButton(true)
  }

  const handleClickCancelButton = () => {
    setIsClickAddButton(false)
  }

  return (
    <div className="deps-todo-item">
      {todoList.map((item) => {
        const subItem = item.sub_item?.map((sub) => {
          return (
            <div className="two-deps-todo-item" key={sub.id}>
              <DefaultTodoItem
                item={sub}
                clickCheckbox={clickCheckboxButton}
                clickDelete={clickDeleteButton}
                editTodoItem={editTodoItemValue}
                isShowAddButton={false}
              />
            </div>
          )
        })
        return (
          <div className="one-deps-todo-item" key={item.id}>
            <DefaultTodoItem
              item={item}
              clickCheckbox={clickCheckboxButton}
              clickDelete={clickDeleteButton}
              editTodoItem={editTodoItemValue}
              enterTodoItem={enterTodoItem}
            />
            <div className="two-deps-todo-item">{subItem}</div>
          </div>
        )
      })}

      {isClickAddButton ? (
        <EditorInputWrapper
          editorValue={editorValue}
          clickCancelButton={handleClickCancelButton}
          clickSubmitButton={handleClickSubmitButton}
          setEditorValue={setEditorValue}
        />
      ) : (
        <AddButton
          text="투두리스트 추가"
          clickAddButton={handleClickAddButton}
        />
      )}
    </div>
  )
}
