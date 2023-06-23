import DefaultInformation from "@/components/information/DefaultInformation/DefaultInformation"
import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout"
import Loading from "@/components/loading/LoadingSpinner/LoadingSpinner"
import CategoryTodoListChart from "@/components/my-page/CategoryTodoListChart/CategoryTodoListChart"
import CheckTodoListChart from "@/components/my-page/CheckTodoListChart/CheckTodoListChart"
import DateTodoListChart from "@/components/my-page/DateTodoListChart/DateTodoListChart"
import MyPageSidebar from "@/components/sidebar/MyPageSidebar/MyPageSidebar"
import { useTodoList } from "@/hooks/todo/useTodoList"
import supabaseAdmin from "@/supabase/init"
import { getRootPage } from "@/utils/page.utils"
import { Suspense, useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "./MyPage.scoped.scss"

export default function MyPage() {
  const { todoList } = useTodoList()
  const navigate = useNavigate()
  const goRootPageToNotUser = useCallback(async () => {
    const { data } = await supabaseAdmin.auth.getSession()
    if (!data.session?.user) navigate(getRootPage())
  }, [navigate])

  useEffect(() => {
    goRootPageToNotUser()
  }, [goRootPageToNotUser])

  return (
    <DefaultLayout
      sidebarChildren={
        <Suspense fallback={<Loading />}>
          <MyPageSidebar />
        </Suspense>
      }
      maxWidth={1200}
    >
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
    </DefaultLayout>
  )
}
