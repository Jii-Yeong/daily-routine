import {getUserInfoFromId} from "@/repository/user/user-info.repository.ts";
import {useEffect, useState} from "react";
import {initUserInfo, UserInfoModel} from "@/model/user/user-info.model.ts";

export const useUserInfo = () => {
  const [userInfo, setUserInfo] = useState<UserInfoModel>(initUserInfo())

  const fetchUserInfo = async () => {
    const testId = 123
    const data = await getUserInfoFromId(testId)
    if (!data) return
    setUserInfo(data)
  }

  useEffect(() => {
    fetchUserInfo()
  }, [])

  return {
    userInfo,
    fetchUserInfo
  }
}