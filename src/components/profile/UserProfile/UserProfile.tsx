import {signInWithGoogle, singOutForSite} from "@/supabase/login.ts";
import {useRecoilValue} from "recoil";
import {userProfileSelector} from "@/recoil/user/user-selectors.ts";

export default function UserProfile() {
  const userProfile = useRecoilValue(userProfileSelector)

  return (
    <>
      <p>email: {userProfile?.email}</p>
      <button onClick={signInWithGoogle}>구글 로그인</button>
      <button onClick={singOutForSite}>구글 로그아웃</button>
    </>
  )
}