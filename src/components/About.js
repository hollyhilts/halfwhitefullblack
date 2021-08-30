import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../assets/css/main.css"
import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    allContentfulStatement {
      nodes {
        title
        content {
          content
        }
      }
    }
  }
`

const Statement = () => {
  const {
    allContentfulStatement: { nodes: statement },
  } = useStaticQuery(query)

  const { title, content } = statement[0]
  const cont = content ? `${content.content}` : ""

  return (
    <div className="statement-contents">
      <h1>{title}</h1>
      <div className="statement-content">
        <ReactMarkdown children={cont} />
      </div>
      <div className="links">
        <Link to="/home" className="link">
          back
        </Link>
        <Link to="/page1" className="link">
          the path
        </Link>
      </div>
    </div>
  )
}

export default Statement
