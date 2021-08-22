import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "../assets/css/main.css"

const about = () => {
  return (
    <Layout>
      <main className="main">
        <h1 className="about-title">artist's statement</h1>
        <Link to="/home">back</Link>
        <Link to="/page1">the path</Link>
      </main>
    </Layout>
  )
}

export default about
