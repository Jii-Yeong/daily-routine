import LandingPageCover from "@/assets/images/landing/landing-page-cover.jpg"
import LoginPanel from "@/components/landing/LoginPanel/LoginPanel"
import "./Landing.scoped.scss"

export default function Landing() {
  return (
    <div className="landing-page">
      <div className="login-panel-wrapper">
        <LoginPanel />
      </div>
      <img
        className="landing-image-cover"
        src={LandingPageCover}
        alt="landing-cover"
      />
    </div>
  )
}
