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

export const insertUserProfile = async (
  id: string,
  name: string,
  thumbnail?: string
) => {
  await supabaseAdmin.from("profiles").insert({
    id,
    user_name: name,
    user_image: thumbnail,
  })
}
