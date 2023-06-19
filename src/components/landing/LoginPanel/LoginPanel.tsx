import googleLogo from "@/assets/images/logo/google-logo.png"
import DefaultInput from "@/components/input/DefaultInput/DefaultInput"
import AuthPanel from "@/components/panel/AuthPanel/AuthPanel"
import { signInWithGoogle, signInWithPassword } from "@/supabase/auth"
import { getSignUpPage, getTodoListPage } from "@/utils/page.utils"
import { ChangeEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./LoginPanel.scoped.scss"

export default function LoginPanel() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleSetEmail = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    setEmail(element.value)
  }
  const handleSetPassword = (e: ChangeEvent) => {
    const element = e.target as HTMLInputElement
    setPassword(element.value)
  }
  const handleClickLoginButton = () => {
    signInWithPassword(email, password).then(() => {
      navigate(getTodoListPage())
    })
  }
  const handleClickSignUpButton = () => {
    navigate(getSignUpPage())
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
    <AuthPanel
      changePageText="아이디가 없으신가요? 회원가입 하러가기"
      authButtonText="로그인"
      clickChangePage={handleClickSignUpButton}
      clickSubmitButton={handleClickLoginButton}
    >
      <DefaultInput
        inputValue={email}
        changeInput={handleSetEmail}
        height={40}
        placeholder="이메일"
      />
      <DefaultInput
        inputValue={password}
        changeInput={handleSetPassword}
        height={40}
        placeholder="비밀번호"
        type="password"
      />
      <div className="social-login-container">
        <img
          className="social-login-button"
          src={googleLogo}
          alt="google-logo"
          onClick={() => handleClickSocialButton("google")}
        />
      </div>
    </AuthPanel>
  )
}
