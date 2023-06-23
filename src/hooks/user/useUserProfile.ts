import { userProfileSelector } from "@/recoil/user/user-selectors"
import { updateUserProfileService } from "@/service/user/profile.service"
import { ChangeEvent, useState } from "react"
import { useRecoilRefresher_UNSTABLE, useRecoilValue } from "recoil"

export const useUserProfile = () => {
  const [userName, setUserName] = useState("")
  const [isEditUserName, setIsEditUserName] = useState(false)
  const [userImage, setUserImage] = useState("")
  const [isEditImage, setIsEditImage] = useState(false)
  const user = useRecoilValue(userProfileSelector)
  const refresher = useRecoilRefresher_UNSTABLE(userProfileSelector)

  const handleClickEditImage = () => {
    setIsEditImage(true)
  }

  const handleClickCancelEditImage = () => {
    setIsEditImage(false)
  }

  const handleChangeUserName = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    setUserName(element.value)
  }

  const handleClickEditName = () => {
    setIsEditUserName(true)
  }

  const handleClickCancelEditName = () => {
    setIsEditUserName(false)
  }

  const handleClickEditUserName = () => {
    if (!user) return

    updateUserProfileService(user.id, {
      user_name: userName,
    })
    refresher()
  }

  const handleChangeFileInputValue = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    const reader = new FileReader()
    if (!element.files || !element.files[0]) return
    if (!user) return

    reader.readAsDataURL(element.files[0])
    reader.onload = async () => {
      await updateUserProfileService(user.id, {
        user_image: String(reader.result),
      })
      refresher()
    }
    reader.onerror = (error) => {
      console.log(error)
    }
    setUserImage(element.value)
  }

  return {
    user,
    userName,
    userImage,
    isEditImage,
    isEditUserName,
    handleClickEditImage,
    handleClickCancelEditImage,
    handleChangeFileInputValue,
    handleChangeUserName,
    handleClickEditName,
    handleClickCancelEditName,
    handleClickEditUserName,
  }
}
