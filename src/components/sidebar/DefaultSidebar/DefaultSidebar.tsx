import UserProfile from "@/components/profile/UserProfile/UserProfile.tsx";
import {RecoilRoot} from "recoil";
import {Suspense} from "react";
import Loading from "@/components/loading/Loading/Loading.tsx";

export default function DefaultSidebar() {
  return (
    <div className="default-sidebar">
      <RecoilRoot>
        <Suspense fallback={<Loading/>}>
          <UserProfile/>
        </Suspense>
      </RecoilRoot>
    </div>
  )
}