import React from "react"
import Layout from "../components/Layout"
import About from "../components/About"
import "../assets/css/main.css"

const about = () => {
  return (
    <Layout>
      <main className="main">
        <About />
      </main>
    </Layout>
  )
}

export default about
