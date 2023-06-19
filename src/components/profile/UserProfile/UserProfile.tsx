import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx"
import { userProfileSelector } from "@/recoil/user/user-selectors.ts"
import { signInWithGoogle, singOutForSite } from "@/supabase/login.ts"
import { getRootPage } from "@/utils/page.utils"
import { useNavigate } from "react-router-dom"
import { useRecoilValue } from "recoil"
import "./UserProfile.scoped.scss"

export default function UserProfile() {
  const userProfile = useRecoilValue(userProfileSelector)
  const navigate = useNavigate()

  const clickSignIn = () => {
    signInWithGoogle()
  }
  const clickSignOut = async () => {
    await singOutForSite()
    navigate(getRootPage())
  }
  return (
    <div className="user-profile">
      {userProfile ? (
        <div className="user-profile-area">
          <div className="user-information">
            <img
              className="user-image"
              src={userProfile.user_metadata.avatar_url}
              alt="user-image"
            />
            <p>{userProfile.user_metadata.full_name}</p>
          </div>
          <DefaultButton text="로그아웃" onClickButton={clickSignOut} />
        </div>
      ) : (
        <DefaultButton text="로그인" onClickButton={clickSignIn} />
      )}
    </div>
  )
}
