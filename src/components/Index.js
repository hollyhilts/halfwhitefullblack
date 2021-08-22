import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../assets/css/main.css"
import { Video } from "../components/video"

import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    allContentfulWelcome {
      nodes {
        title
        content {
          content
        }
        link
      }
    }
  }
`

const Index = () => {
  const {
    allContentfulWelcome: { nodes: welcome },
  } = useStaticQuery(query)

  const { title, content, link } = welcome[0]
  const cont = content ? `${content.content}` : ""

  return (
    <div>
      <h1>{title}</h1>
      <Video src={link} title={title} size="half-video" />
      <div className="welcome-content">
        <ReactMarkdown children={cont} className="welcome-text" />
      </div>
      <Link className="link" to="/home">
        come in
      </Link>
    </div>
  )
}

export default Index
