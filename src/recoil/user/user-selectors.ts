import {
  UserProfileModel,
  initUserProfile,
} from "@/model/user/user-profile.model"
import { getUserProfile } from "@/repository/user/profile.repository"
import { saveUserProfile } from "@/supabase/auth"
import supabaseAdmin from "@/supabase/init.ts"
import { atom, selector } from "recoil"

export const userProfileAtom = atom<UserProfileModel | null>({
  key: "userProfileAtom",
  default: initUserProfile(),
})

export const userProfileSelector = selector<UserProfileModel | null>({
  key: "userProfileSelector",
  get: async () => {
    try {
      const { data } = await supabaseAdmin.auth.getUser()

      if (!data.user) return null

      const userId = data.user.id
      const thumbnail = data.user.user_metadata.avatar_url

      const userData = await getUserProfile(userId)

      console.log(userData)

      if (!userData) {
        saveUserProfile(userId, thumbnail)

        const refreshUserData = await getUserProfile(userId)
        return refreshUserData
      }

      return userData
    } catch (e) {
      console.log(e)
      return null
    }
  },
  set: ({ set }, newValue) => {
    set(userProfileAtom, newValue)
  },
})
