import DefaultButton from "@/components/button/DefaultButton/DefaultButton"
import DefaultInput from "@/components/input/DefaultInput/DefaultInput"
import { ChangeEvent, useState } from "react"
import "./LoginPanel.scoped.scss"

export default function LoginPanel() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")

  const handleSetId = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    setId(element.value)
  }
  const handleSetPassword = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    setPassword(element.value)
  }
  const handleClickLoginButton = () => {
    console.log("click")
  }
  return (
    <div className="login-panel-container">
      <div className="login-panel">
        <p className="title">Daily Routine</p>
        <DefaultInput inputValue={id} changeInput={handleSetId} height={40} />
        <DefaultInput
          inputValue={password}
          changeInput={handleSetPassword}
          height={40}
        />
        <div className="login-button-wrapper">
          <DefaultButton
            text="로그인"
            width="100%"
            onClickButton={handleClickLoginButton}
            height={40}
          />
        </div>
        <p className="not-have-id-text">
          아이디가 없으신가요? 회원가입 하러가기
        </p>
      </div>
    </div>
  )
}
