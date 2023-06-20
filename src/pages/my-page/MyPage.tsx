import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout"
import MyPageSidebar from "@/components/sidebar/MyPageSidebar/MyPageSidebar"

export default function MyPage() {
  return (
    <DefaultLayout sidebarChildren={<MyPageSidebar />}>
      <div></div>
    </DefaultLayout>
  )
}
