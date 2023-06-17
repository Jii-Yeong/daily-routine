import DepsTodoList from "@/components/todo-item/DepsTodoList/DepsTodoList"
import { useTodoCategory } from "@/hooks/todo/useTodoCategory"
import "./TodoDashboard.scoped.scss"

export default function TodoDashboard() {
  const { category } = useTodoCategory()

  return (
    <div className="todo-dash-board">
      <p>{category?.name}</p>
      <div className="todo-list-container">
        <DepsTodoList />
      </div>
    </div>
  )
}
