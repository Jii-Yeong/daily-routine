import DefaultTodoItem from "@/components/todo-item/DefaultTodoItem/DefaultTodoItem.tsx"
import TodoInput from "@/components/input/TodoInput/TodoInput.tsx"
import "./TodoDashboard.scss"
import { useTodoList } from "@/hooks/todo/useTodoList.ts"
import { useTodoCategory } from "@/hooks/todo/useTodoCategory"

export default function TodoDashboard() {
  const {
    todoList,
    enterTodoItem,
    clickCheckboxButton,
    clickDeleteButton,
    editTodoItemValue,
  } = useTodoList()
  const { category } = useTodoCategory()

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
        <TodoInput setTodoItemValue={enterTodoItem} buttonText="입력" />
      </div>
    </div>
  )
}
