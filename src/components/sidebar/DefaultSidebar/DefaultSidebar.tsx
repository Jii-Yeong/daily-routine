import UserProfile from "@/components/profile/UserProfile/UserProfile.tsx"
import { Suspense } from "react"
import Loading from "@/components/loading/Loading/Loading.tsx"
import TodoCategoryDashboard from "@/components/landing/TodoCategoryDashboard/TodoCategoryDashboard.tsx"

export default function DefaultSidebar() {
  return (
    <div className="default-sidebar">
      <Suspense fallback={<Loading />}>
        <UserProfile />
      </Suspense>
      <Suspense fallback={<Loading />}>
        <TodoCategoryDashboard />
      </Suspense>
    </div>
  )
}
