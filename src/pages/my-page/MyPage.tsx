import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout"
import CategoryTodoListChart from "@/components/my-page/CategoryTodoListChart/CategoryTodoListChart"
import CheckTodoListChart from "@/components/my-page/CheckTodoListChart/CheckTodoListChart"
import DateTodoListChart from "@/components/my-page/DateTodoListChart/DateTodoListChart"
import MyPageSidebar from "@/components/sidebar/MyPageSidebar/MyPageSidebar"
import supabaseAdmin from "@/supabase/init"
import { getRootPage } from "@/utils/page.utils"
import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function MyPage() {
  const navigate = useNavigate()
  const goRootPageToNotUser = useCallback(async () => {
    const { data } = await supabaseAdmin.auth.getSession()
    if (!data.session?.user) navigate(getRootPage())
  }, [navigate])

  useEffect(() => {
    goRootPageToNotUser()
  }, [goRootPageToNotUser])

  return (
    <DefaultLayout sidebarChildren={<MyPageSidebar />}>
      <div className="main-container">
        <CheckTodoListChart />
        <DateTodoListChart />
        <CategoryTodoListChart />
      </div>
    </DefaultLayout>
  )
}
