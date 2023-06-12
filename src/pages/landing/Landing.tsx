import DefaultLayout from "@/components/layout/DefaultLayout/DefaultLayout.tsx";
import TodoDashboard from "@/components/landing/TodoDashboard/TodoDashboard.tsx";
import {Suspense} from "react";
import Loading from "@/components/loading/Loading/Loading.tsx";

export default function Landing() {
  return (
    <DefaultLayout>
      <Suspense fallback={<Loading/>}>
        <TodoDashboard/>
      </Suspense>
    </DefaultLayout>
  )
}