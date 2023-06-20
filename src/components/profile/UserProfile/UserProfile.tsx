import defaultProfileImage from "@/assets/images/profiles/default-profile-image.png"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton.tsx"
import { userProfileSelector } from "@/recoil/user/user-selectors.ts"
import { signInWithGoogle, singOutForSite } from "@/supabase/auth"
import { getRootPage } from "@/utils/page.utils"
import { useCallback, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil"
import "./UserProfile.scoped.scss"

export default function UserProfile() {
  const userProfile = useRecoilValue(userProfileSelector)
  const refresher = useRecoilRefresher_UNSTABLE(userProfileSelector)
  const userProfileRefresher = useCallback(() => {
    refresher()
  }, [refresher])

  const navigate = useNavigate()

  const clickSignIn = () => {
    signInWithGoogle()
  }
  const clickSignOut = async () => {
    await singOutForSite()
    navigate(getRootPage())
  }

  useEffect(() => {
    userProfileRefresher()
  }, [userProfileRefresher])

  return (
    <div className="user-profile">
      {userProfile ? (
        <div className="user-profile-area">
          <div className="user-information">
            {userProfile.user_image ? (
              <img
                className="user-image"
                src={userProfile.user_image}
                alt="user-image"
              />
            ) : (
              <img
                className="user-image"
                src={defaultProfileImage}
                alt="default-user-image"
              />
            )}
          </div>
          <p className="user-name">{userProfile.user_name}</p>
          <DefaultButton text="로그아웃" onClickButton={clickSignOut} />
        </div>
      ) : (
        <DefaultButton text="로그인" onClickButton={clickSignIn} />
      )}
    </div>
  )
}
