import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const about = () => {
  return (
    <Layout>
      <main className="about-main">
        <h1 className="about-title">ABOUT PAGE</h1>
        <Link to="/">back home</Link>
        <Link to="/page1">start your journey</Link>
      </main>
    </Layout>
  )
}

export default about
