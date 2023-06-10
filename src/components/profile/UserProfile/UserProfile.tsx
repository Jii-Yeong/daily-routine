import {useRecoilValue} from "recoil";
import {userProfileSelector} from "@/recoil/user/user-selectors.ts";
import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx";
import {signInWithGoogle, singOutForSite} from "@/supabase/login.ts";

export default function UserProfile() {
  const userProfile = useRecoilValue(userProfileSelector)
  const clickSignIn = () => {
    signInWithGoogle()
  }
  const clickSignOut = async () => {
    await singOutForSite()
    location.reload()
  }
  return (
    <>
      {userProfile ? (
          <>
            <p>email: {userProfile?.email}</p>
            <DefaultButton text="로그아웃" onClickButton={clickSignOut}/>
          </>
        )
        : <DefaultButton text="로그인" onClickButton={clickSignIn}/>}
    </>
  )
}