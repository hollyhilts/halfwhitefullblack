import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../assets/css/main.css"
import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    allContentfulHome {
      nodes {
        title
        content {
          content
        }
      }
    }
  }
`

const Home = () => {
  const {
    allContentfulHome: { nodes: home },
  } = useStaticQuery(query)

  const { title, content } = home[0]
  const cont = content ? `${content.content}` : ""

  return (
    <div>
      <h1>{title}</h1>
      <div className="content">
        <ReactMarkdown children={cont} />
      </div>
      <Link to="/about">statement</Link>
      <Link to="/collaborators">collaborators</Link>
      <Link to="/page1">the path</Link>
    </div>
  )
}

export default Home
