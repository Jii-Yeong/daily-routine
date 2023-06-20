import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout.tsx"
import Loading from "@/components/loading/Loading/Loading.tsx"
import DefaultSidebar from "@/components/sidebar/DefaultSidebar/DefaultSidebar"
import TodoDashboard from "@/components/todo-page/TodoDashboard/TodoDashboard"
import { Suspense } from "react"

export default function TodoPage() {
  return (
    <DefaultLayout sidebarChildren={<DefaultSidebar />}>
      <Suspense fallback={<Loading />}>
        <TodoDashboard />
      </Suspense>
    </DefaultLayout>
  )
}
