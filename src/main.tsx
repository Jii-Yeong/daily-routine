import React from "react"
import ReactDOM from "react-dom/client"
import {RouterProvider} from "react-router-dom";
import router from "@/router";
import {RecoilRoot} from "recoil";
import "@/style/reset.css"
import "@/style/material-icon.scss"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={router}/>
    </RecoilRoot>
  </React.StrictMode>,
)
