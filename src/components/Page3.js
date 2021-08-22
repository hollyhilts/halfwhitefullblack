import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Arrows from "../components/Arrows"
import { getImage } from "gatsby-plugin-image"
import "../assets/css/main.css"

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
        content {
          content
        }
        order
        pic1 {
          gatsbyImageData
        }
        pic2 {
          gatsbyImageData
        }
        pic3 {
          gatsbyImageData
        }
      }
    }
  }
`

const Page3 = ({ pageName, pageContext }) => {
  const {
    allContentfulBranch: { nodes: branches },
  } = useStaticQuery(query)
  const {
    allContentfulPage: { nodes: pages },
  } = useStaticQuery(query)

  const displayPage = pages.find(x => x.order === 3)
  // console.log(displayPage);

  const branchList = branches.filter(x => x.page === 3)
  const { pic1, pic2, pic3, content } = displayPage

  const cont = content ? `${content.content}` : ""

  let imagePaths = []
  const pathToImage1 = getImage(pic1)
  const pathToImage2 = getImage(pic2)
  const pathToImage3 = getImage(pic3)
  imagePaths.push(pathToImage1, pathToImage2, pathToImage3)
  let paths = []
  return (
    <div>
      {/* <h1>{title}</h1> */}
      <h1 className="content">
        <ReactMarkdown children={cont} />
        {/* <GatsbyImage image={pathToImage} alt={title} /> */}
      </h1>

      {branchList.forEach(branch => {
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
      {console.log(paths)}
      <Arrows paths={paths} imagePaths={imagePaths} />
    </div>
  )
}

export default Page3
