import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Arrows from "../components/Arrows"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import ReactMarkdown from "react-markdown"

const query = graphql`
  {
    allContentfulBranch {
      nodes {
        title
        page
        path
      }
    }
    allContentfulPage {
      nodes {
        title
        mediaSingle {
          gatsbyImageData
        }
        content {
          content
        }
        order
      }
    }
  }
`

const Page1 = () => {
  const {
    allContentfulBranch: { nodes: branches },
  } = useStaticQuery(query)
  const {
    allContentfulPage: { nodes: pages },
  } = useStaticQuery(query)

  const displayPage = pages.find(x => x.order === 1)
  // console.log(displayPage);

  const branchList = branches.filter(x => x.page === 1)
  const { title, mediaSingle, content } = displayPage
  console.log(branches)
  console.log(branchList)

  const cont = content ? `${content.content}` : ""
  const pathToImage = getImage(mediaSingle)
  const imgDescrip = mediaSingle ? mediaSingle.description : null
  let paths = []
  return (
    <div>
      <h1>{title}</h1>
      <h4>sound will play on this page</h4>
      <div className="content">
        <ReactMarkdown children={cont} />
        <GatsbyImage image={pathToImage} alt={title} />
        {imgDescrip ? <p className="image-description">{imgDescrip}</p> : null}
      </div>

      {branchList.map(branch => {
        const { page, path } = branch
        paths.push(path)
        if (page === 1) {
          return <p className="hidden">{path}</p>
        }
        //   return (
        //     <Link key={id} to={`/${path}`}>
        //       <h1>{title}</h1>
        //       <p>{page}</p>
        //     </Link>
        //   );
        // } else {
        //   return "";
        // }
      })}
      {/* {console.log(paths)} */}
      <Arrows paths={paths} />
    </div>
  )
}

export default Page1
