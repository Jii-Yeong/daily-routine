import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout"
import CheckTodoListChart from "@/components/my-page/CheckTodoListChart/CheckTodoListChart"
import DateTodoListChart from "@/components/my-page/DateTodoListChart/DateTodoListChart"
import MyPageSidebar from "@/components/sidebar/MyPageSidebar/MyPageSidebar"

export default function MyPage() {
  return (
    <DefaultLayout sidebarChildren={<MyPageSidebar />}>
      <div className="main-container">
        <CheckTodoListChart />
        <DateTodoListChart />
      </div>
    </DefaultLayout>
  )
}
