import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout.tsx"
import Loading from "@/components/loading/Loading/Loading.tsx"
import TodoDashboard from "@/components/todo-page/TodoDashboard/TodoDashboard"
import { Suspense } from "react"

export default function TodoPage() {
  return (
    <DefaultLayout>
      <Suspense fallback={<Loading />}>
        <TodoDashboard />
      </Suspense>
    </DefaultLayout>
  )
}
