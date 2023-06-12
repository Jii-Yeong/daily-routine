import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout.tsx";
import TodoDashboard from "@/components/landing/TodoDashboard/TodoDashboard.tsx";
import {useTodoList} from "@/hooks/todo/useTodoList.ts";

export default function Landing() {
  const {todoList, enterTodoItem} = useTodoList()
  return (
    <DefaultLayout>
      <TodoDashboard todoList={todoList} setTodoItem={enterTodoItem}/>
    </DefaultLayout>
  )
}