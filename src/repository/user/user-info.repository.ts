import supabaseAdmin from "@/supabase/init.ts";
import {UserInfoDto} from "@/model/user/user-info.dto.ts";

export const getUserInfoFromId = async (id: UserInfoDto["id"]) => {
  const {data} = await supabaseAdmin.from("user").select().eq("id", id).single<UserInfoDto>()
  return data
}