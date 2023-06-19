import googleLogo from "@/assets/images/logo/google-logo.png"
import DefaultButton from "@/components/button/DefaultButton/DefaultButton"
import DefaultInput from "@/components/input/DefaultInput/DefaultInput"
import { signInWithGoogle } from "@/supabase/login"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LoginPanel.scoped.scss"

export default function LoginPanel() {
  const [id, setId] = useState("")
  const [password, setPassword] = useState("")
  const navigator = useNavigate()

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

  const handleClickSocialButton = async (socialName: string) => {
    switch (socialName) {
      case "google": {
        signInWithGoogle()
        break
      }
    }
  }
  return (
    <div className="login-panel-container">
      <div className="login-panel">
        <p className="title">Daily Routine</p>
        <DefaultInput
          inputValue={id}
          changeInput={handleSetId}
          height={40}
          placeholder="아이디"
        />
        <DefaultInput
          inputValue={password}
          changeInput={handleSetPassword}
          height={40}
          placeholder="비밀번호"
        />
        <div className="login-button-wrapper">
          <DefaultButton
            text="로그인"
            width="100%"
            onClickButton={handleClickLoginButton}
            height={40}
          />
        </div>
        <div className="social-login-container">
          <img
            className="social-login-button"
            src={googleLogo}
            alt="google-logo"
            onClick={() => handleClickSocialButton("google")}
          />
        </div>
        <p className="not-have-id-text">
          아이디가 없으신가요? 회원가입 하러가기
        </p>
      </div>
    </div>
  )
}
