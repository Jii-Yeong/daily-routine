import {selector} from "recoil";
import supabaseAdmin from "@/supabase/init.ts";

export const userProfileSelector = selector({
  key: "userProfile",
  get: async () => {
    const {data} = await supabaseAdmin.auth.getUser()
    return data.user
  }
});