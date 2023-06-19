import MyPage from "@/pages/my-page/MyPage.tsx"
import TodoPage from "@/pages/todo-page/TodoPage"

const MyPageRoutes = [
  {
    path: "/my-page",
    element: <MyPage />,
  },
  {
    path: "/todo-page",
    element: <TodoPage />,
  },
]

export default MyPageRoutes
