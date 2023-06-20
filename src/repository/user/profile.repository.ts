import { UserProfileDto } from "@/model/user/user-profile.dto"
import supabaseAdmin from "@/supabase/init"

export const getUserProfile = async (userId: string) => {
  const { data } = await supabaseAdmin
    .from("profiles")
    .select()
    .eq("id", userId)
    .single<UserProfileDto>()
  return data
}
