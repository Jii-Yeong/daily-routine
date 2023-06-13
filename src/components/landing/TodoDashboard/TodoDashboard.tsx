import DefaultTodoItem from "@/components/todo-item/DefaultTodoItem/DefaultTodoItem.tsx";
import TodoInput from "@/components/input/TodoInput/TodoInput.tsx";
import "./TodoDashboard.scss"
import {useTodoList} from "@/hooks/todo/useTodoList.ts";

export default function TodoDashboard() {
  const {todoList, enterTodoItem, clickCheckboxButton, clickDeleteButton} = useTodoList()

  return (
    <div className="todo-dash-board">
      <div className="todo-list-container">
        {todoList.map(item => {
          return <DefaultTodoItem item={item} clickCheckbox={clickCheckboxButton} clickDelete={clickDeleteButton}
                                  key={item.id}/>
        })}
      </div>
      <div className="todo-input-container">
        <TodoInput setTodoItemValue={enterTodoItem}/>
      </div>
    </div>

  )
}