import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import "../assets/css/main.css"

const collaborators = () => {
  return (
    <Layout>
      <main className="main">
        <h1 className="collaborators-title">collaborators</h1>
        <Link to="/home">back</Link>
        <Link to="/page1">the path</Link>
      </main>
    </Layout>
  )
}

export default collaborators
