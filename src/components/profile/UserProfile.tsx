import {useUserInfo} from "@/hooks/user/useUserInfo.ts";

export default function UserProfile() {
  const {userInfo} = useUserInfo()

  return (
    <div className="user-profile">
      {userInfo.name}
    </div>
  )
}