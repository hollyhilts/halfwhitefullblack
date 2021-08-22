import React from "react"
import Layout from "../components/Layout"
import Collaborators from "../components/Collaborators"
import "../assets/css/main.css"

const collaborators = () => {
  return (
    <Layout>
      <main className="main-collab">
        <Collaborators />
      </main>
    </Layout>
  )
}

export default collaborators
