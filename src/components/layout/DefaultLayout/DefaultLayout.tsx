import { ReactNode } from "react"
import "./DefaultLayout.scoped.scss"

type DefaultLayoutProps = {
  children: ReactNode
  sidebarChildren: ReactNode
}
export default function DefaultLayout({
  children,
  sidebarChildren,
}: DefaultLayoutProps) {
  return (
    <div className="default-layout">
      <div className="default-layout-inner">
        <div className="sidebar-layout">{sidebarChildren}</div>
        <div className="main-layout">{children}</div>
      </div>
    </div>
  )
}
