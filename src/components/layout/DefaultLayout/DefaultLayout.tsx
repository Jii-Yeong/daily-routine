import {ReactNode} from "react";
import "./DefaultLayout.scss";
import DefaultSidebar from "@/components/sidebar/DefaultSidebar/DefaultSidebar.tsx";

type DefaultLayoutProps = {
  sidebar: ReactNode
  children: ReactNode
}
export default function DefaultLayout({children}: DefaultLayoutProps) {
  return (
    <div className="default-layout">
      <div className="default-layout-inner">
        <div className="sidebar-layout">
          <DefaultSidebar/>
        </div>
        <div className="main-layout">
          {children}
        </div>
      </div>
    </div>
  )
}