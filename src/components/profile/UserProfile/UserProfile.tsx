import { useRecoilValue } from "recoil"
import { userProfileSelector } from "@/recoil/user/user-selectors.ts"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx"
import { signInWithGoogle, singOutForSite } from "@/supabase/login.ts"
import "./UserProfile.scss"

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
