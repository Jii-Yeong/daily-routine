import DefaultButton from "@/components/button/DefaultButton/DefaultButton"
import EditorInput from "@/components/input/EditorInput/EditorInput"
import DefaultTodoItem from "@/components/todo-item/DefaultTodoItem/DefaultTodoItem.tsx"
import { useTodoCategory } from "@/hooks/todo/useTodoCategory"
import { useTodoList } from "@/hooks/todo/useTodoList.ts"
import { useState } from "react"
import "./TodoDashboard.scoped.scss"

export default function TodoDashboard() {
  const {
    todoList,
    enterTodoItem,
    clickCheckboxButton,
    clickDeleteButton,
    editTodoItemValue,
  } = useTodoList()
  const { category } = useTodoCategory()
  const [editorValue, setEditorValue] = useState("")
  const handleClickSubmitButton = () => {
    enterTodoItem(editorValue)
  }
  return (
    <div className="todo-dash-board">
      <p>{category?.name}</p>
      <div className="todo-list-container">
        {todoList.map((item) => {
          return (
            <DefaultTodoItem
              item={item}
              clickCheckbox={clickCheckboxButton}
              clickDelete={clickDeleteButton}
              key={item.id}
              editTodoItem={editTodoItemValue}
            />
          )
        })}
      </div>
      <div className="todo-input-container">
        <EditorInput value={editorValue} setValue={setEditorValue} />
        <DefaultButton text="입력" onClickButton={handleClickSubmitButton} />
        {/* <TodoInput setTodoItemValue={enterTodoItem} buttonText="입력" /> */}
      </div>
    </div>
  )
}
