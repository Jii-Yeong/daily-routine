import DefaultTodoItem from "@/components/todo-item/DefaultTodoItem/DefaultTodoItem.tsx";
import TodoInput from "@/components/input/TodoInput/TodoInput.tsx";
import "./TodoDashboard.scss"
import {useTodoList} from "@/hooks/todo/useTodoList.ts";

export default function TodoDashboard() {
  const {todoList, enterTodoItem} = useTodoList()

  return (
    <div className="todo-dash-board">
      <div className="todo-list-container">
        {todoList.map(item => {
          return <DefaultTodoItem text={item.text} checked={item.checked} key={item.id}/>
        })}
      </div>
      <div className="todo-input-container">
        <TodoInput setTodoItemValue={enterTodoItem}/>
      </div>
    </div>

  )
}