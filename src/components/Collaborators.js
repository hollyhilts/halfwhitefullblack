import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../assets/css/main.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    allContentfulCollaborator {
      nodes {
        about {
          about
        }
        image {
          gatsbyImageData(placeholder: DOMINANT_COLOR)
        }
        name
        title
      }
    }
  }
`

const Collaborators = () => {
  const {
    allContentfulCollaborator: { nodes: collabs },
  } = useStaticQuery(query)

  return (
    <div>
      <h1 className="collaborators-title">collaborators</h1>
      <ul className="collaborators">
        {collabs.map((collab, index) => {
          const { name, title, about, image } = collab
          const aboutInfo = about ? `${about.about}` : ""
          const pathToImage = getImage(image)
          return (
            <li
              className="collab-bubble"
              key={index}
              id={`collab-${index + 1}`}
            >
              <GatsbyImage
                image={pathToImage}
                alt={title}
                className="collab-image"
              />
              <h5>{name}</h5>
              <p className="collab-title">{title}</p>
              <ReactMarkdown children={aboutInfo} />
            </li>
          )
        })}
      </ul>
      <Link to="/home" className="link">
        back
      </Link>
      <Link to="/page1" className="link">
        the path
      </Link>
    </div>
  )
}

export default Collaborators
