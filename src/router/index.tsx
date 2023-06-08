import {createBrowserRouter} from "react-router-dom";
import Landing from "@/pages/landing/Landing.tsx";
import MyPageRoutes from "@/routes/MyPageRoutes.tsx";

const Router = createBrowserRouter([
  ...MyPageRoutes,
  {
    path: "/",
    element: <Landing/>,
  },
])

export default Router