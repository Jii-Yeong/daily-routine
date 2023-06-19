import supabaseAdmin from "@/supabase/init.ts"
import { selector } from "recoil"

export const userProfileSelector = selector({
  key: "userProfileSelector",
  get: async () => {
    try {
      const { data } = await supabaseAdmin.auth.getUser()
      return data.user
    } catch (e) {
      console.log(e)
      return null
    }
  },
})
