import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"

const Index = () => {
  return (
    <Layout>
      <main className="main">
        <h1 className="main-title">welcome</h1>
        <Link to="/about">about this project</Link>
        <Link to="/team">team</Link>
        <Link to="/page1">begin journey</Link>
      </main>
    </Layout>
  )
}

export default Index
