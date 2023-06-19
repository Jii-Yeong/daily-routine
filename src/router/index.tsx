import Landing from "@/pages/landing/Landing"
import MyPageRoutes from "@/routes/MyPageRoutes.tsx"
import { createBrowserRouter } from "react-router-dom"

const Router = createBrowserRouter([
  ...MyPageRoutes,
  {
    path: "/",
    element: <Landing />,
  },
])

export default Router
