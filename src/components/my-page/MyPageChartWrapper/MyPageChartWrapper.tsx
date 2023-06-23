import DefaultInformation from "@/components/information/DefaultInformation/DefaultInformation"
import { useTodoList } from "@/hooks/todo/useTodoList"
import CategoryTodoListChart from "../CategoryTodoListChart/CategoryTodoListChart"
import CheckTodoListChart from "../CheckTodoListChart/CheckTodoListChart"
import DateTodoListChart from "../DateTodoListChart/DateTodoListChart"

export default function MyPageChartWrapper() {
  const { todoList } = useTodoList()

  return (
    <>
      {todoList.length > 0 ? (
        <div className="main-container">
          <CheckTodoListChart />
          <DateTodoListChart />
          <div className="category-todo-list-chart-container">
            <CategoryTodoListChart />
          </div>
        </div>
      ) : (
        <DefaultInformation text="아직 투두리스트가 없습니다. 새로 생성해보세요!" />
      )}
    </>
  )
}
