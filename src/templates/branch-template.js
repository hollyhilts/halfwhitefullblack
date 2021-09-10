import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import { Video } from "../components/video"
import P5 from "../components/util/p5"

const BranchTemplate = ({ data }) => {
  const { page, title, vimeo } = data.contentfulBranch

  return (
    <Layout>
      <div className="branch">
        <Video src={vimeo} title={title} size="full-vid" />
        <Link to={page === 5 ? `/` : `/page${page + 1}`} className="next">
          next
        </Link>
      </div>
      <div className="fixed-sketch">
        <P5 />
      </div>
    </Layout>
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
        file {
          url
          contentType
        }
      }
      content {
        content
      }
      page
      vimeo
    }
  }
`
export default BranchTemplate
