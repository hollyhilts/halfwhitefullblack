import React from "react"
import { graphql, Link } from "gatsby"
import ReactMarkdown from "react-markdown"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import P5 from "../components/util/p5"

const BranchTemplate = ({ data }) => {
  const {
    page,
    title,
    mediaSingle,
    content: { content },
  } = data.contentfulBranch
  const pathToImage = getImage(mediaSingle)
  const imgDescrip = mediaSingle ? mediaSingle.description : null
  const contentMarkdown = `${content}`
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <GatsbyImage image={pathToImage} className="" alt={title} />
        {imgDescrip ? <p className="">{imgDescrip}</p> : null}
      </div>
      <div>
        <ReactMarkdown children={contentMarkdown} />
      </div>
      {console.log(page)}
      <Link to={page === 6 ? `/` : `/page${page + 1}`}>go to next chapter</Link>
      <P5 />
    </div>
  )
}

export const query = graphql`
  query getSingleBranch($pathName: String) {
    contentfulBranch(path: { eq: $pathName }) {
      path
      title
      mediaSingle {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
        description
      }
      content {
        content
      }
      page
    }
  }
`
export default BranchTemplate
