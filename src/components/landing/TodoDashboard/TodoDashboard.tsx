import DefaultTodoItem from "@/components/todo-item/DefaultTodoItem/DefaultTodoItem.tsx";
import {TodoItemModel} from "@/model/todo/todo-item.model.ts";
import TodoInput from "@/components/input/TodoInput/TodoInput.tsx";
import "./TodoDashboard.scss"

type TodoDashBoardProps = {
  todoList: TodoItemModel[]
  setTodoItem: (text: string) => void
}

export default function TodoDashboard({todoList, setTodoItem}: TodoDashBoardProps) {
  return (
    <div className="todo-dash-board">
      <div className="todo-list-container">
        {todoList.map(item => {
          return <DefaultTodoItem text={item.text} checked={item.checked} key={item.id}/>
        })}
      </div>
      <div className="todo-input-container">
        <TodoInput setTodoItemValue={setTodoItem}/>
      </div>
    </div>
  )
}