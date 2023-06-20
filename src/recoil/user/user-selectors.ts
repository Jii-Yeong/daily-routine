import { UserProfileModel } from "@/model/user/user-profile.model"
import {
  getUserProfile,
  insertUserProfile,
} from "@/repository/user/profile.repository"
import supabaseAdmin from "@/supabase/init.ts"
import { selector } from "recoil"

export const userProfileSelector = selector<UserProfileModel | null>({
  key: "userProfileSelector",
  get: async () => {
    try {
      const { data } = await supabaseAdmin.auth.getUser()

      if (!data.user) return null

      const userId = data.user.id
      const thumbnail = data.user.user_metadata.avatar_url
      const email = data.user.email

      const userData = await getUserProfile(userId)

      if (!userData) {
        insertUserProfile(userId, email ?? "", thumbnail)

        const refreshUserData = await getUserProfile(userId)
        return refreshUserData
      }

      return userData
    } catch (e) {
      console.log(e)
      return null
    }
  },
})
