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
    <div className="contents">
      <h1>{title}</h1>
      <div className="home-content">
        <ReactMarkdown children={cont} />
      </div>
      <div className="links">
        <Link to="/about" className="link">
          statement
        </Link>
        <Link to="/collaborators" className="link">
          collaborators
        </Link>
        <Link to="/page1" className="link">
          the path
        </Link>
      </div>
    </div>
  )
}

export default Home
