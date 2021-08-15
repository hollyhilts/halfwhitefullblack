import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "../assets/css/main.css"

const team = () => {
  return (
    <Layout>
      <main className="main">
        <h1 className="team-title">TEAM PAGE</h1>
        <Link to="/">back home</Link>
        <Link to="/page1">start your journey</Link>
      </main>
    </Layout>
  )
}

export default team
