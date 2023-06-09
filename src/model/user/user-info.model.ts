import {UserInfoDto} from "@/model/user/user-info.dto.ts";

export type UserInfoModel = UserInfoDto

export const initUserInfo = (): UserInfoModel => {
  return {
    id: 0,
    created_at: new Date(),
    name: ""
  }
}