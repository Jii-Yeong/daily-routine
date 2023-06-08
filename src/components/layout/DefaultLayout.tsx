import {ReactNode} from "react";
import "./DefaultLayout.scss";

type DefaultLayoutProps = {
  sidebar: ReactNode
  children: ReactNode
}
export default function DefaultLayout({sidebar, children}: DefaultLayoutProps) {
  return (
    <div className="default-layout">
      <div className="default-layout-inner">
        <div className="sidebar-layout">
          {sidebar}
        </div>
        <div className="main-layout">
          {children}
        </div>
      </div>
    </div>
  )
}