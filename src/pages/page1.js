import React from "react"
import { Link } from "gatsby"
import Page1 from "../components/Page1"
import Layout from "../components/Layout"

const page1 = () => {
  return (
    <Layout>
      <Link className="path" to="/">
        return
      </Link>
      <Page1 />
    </Layout>
  )
}

export default page1
