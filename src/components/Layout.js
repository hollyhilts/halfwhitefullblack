import React from "react"
import P5 from "../components/util/p5"
import "../assets/css/main.css"

const Layout = ({ children }) => {
  return (
    <div className="page">
      <div className="container">{children}</div>
      <P5 />
    </div>
  )
}

export default Layout
