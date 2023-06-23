import defaultImage from "@/assets/images/profiles/default-profile-image.png"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton"
import DefaultInput from "@/components/input/DefaultInput/DefaultInput"
import FileInput from "@/components/input/FileInput/FileInput"
import { useUserProfile } from "@/hooks/user/useUserProfile"
import "./MyPageSidebar.scoped.scss"

export default function MyPageSidebar() {
  const {
    user,
    isEditImage,
    userImage,
    isEditUserName,
    userName,
    handleChangeFileInputValue,
    handleClickCancelEditImage,
    handleClickEditImage,
    handleChangeUserName,
    handleClickCancelEditName,
    handleClickEditName,
    handleClickEditUserName,
  } = useUserProfile()

  return (
    <div className="my-page-sidebar">
      <div className="user-image-area">
        {user?.user_image ? (
          <img className="user-image" src={user.user_image} alt="user-image" />
        ) : (
          <img
            className="user-image"
            src={defaultImage}
            alt="default-user-image"
          />
        )}
        {isEditImage ? (
          <div className="file-input-area">
            <FileInput
              inputValue={userImage}
              setInputValue={handleChangeFileInputValue}
            />
            <DefaultButton
              text="취소"
              onClickButton={handleClickCancelEditImage}
            />
          </div>
        ) : (
          <DefaultButton
            text="유저 이미지 수정하기"
            onClickButton={handleClickEditImage}
          />
        )}
      </div>
      <div className="user-name-area">
        {!isEditUserName ? (
          <div className="user-name">
            <p>{user?.user_name}</p>
            <DefaultButton text="수정" onClickButton={handleClickEditName} />
          </div>
        ) : (
          <div className="edit-user-name">
            <DefaultInput
              inputValue={userName}
              changeInput={handleChangeUserName}
            />
            <DefaultButton
              text="완료"
              onClickButton={handleClickEditUserName}
            />
            <DefaultButton
              text="취소"
              onClickButton={handleClickCancelEditName}
            />
          </div>
        )}
      </div>
    </div>
  )
}
