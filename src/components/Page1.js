import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// import Arrows from "../components/Arrows"
import Form from "../components/Form"
// import { getImage } from "gatsby-plugin-image"

// import Layout from "../components/Layout"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../assets/css/main.css"

import ReactMarkdown from "react-markdown"
import "markdown-it"

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
        arrows
        arrow2
        arrow3
      }
    }
  }
`
// let subStatus = false

// function handleSubmit(e) {
//   e.preventDefault()
//   subStatus = !subStatus
//   // console.log("You clicked submit.")
// }

const Page1 = () => {
  const {
    allContentfulBranch: { nodes: branches },
  } = useStaticQuery(query)
  const {
    allContentfulPage: { nodes: pages },
  } = useStaticQuery(query)

  const displayPage = pages.find(x => x.order === 1)
  let imagePaths = []
  const branchList = branches.filter(x => x.page === 1)
  const { arrows, arrow2, arrow3, content } = displayPage

  imagePaths.push(arrows, arrow2, arrow3)
  console.log(branches)
  console.log(branchList)

  const cont = content ? `${content.content}` : ""
  // const pathToImage = getImage(mediaSingle)
  // const imgDescrip = mediaSingle ? mediaSingle.description : null
  let paths = []
  return (
    <div className="page1">
      {/* <h1>{title}</h1> */}
      <div className="content">
        <div className="markdown-page1-content">
          <ReactMarkdown children={cont} />
        </div>
        {/* <div className="image-content">
          <GatsbyImage image={pathToImage} alt={title} />
          {imgDescrip ? (
            <p className="image-description">{imgDescrip}</p>
          ) : null}
        </div> */}
      </div>

      {/* <form onSubmit={handleSubmit}>
        <input
          type="text"
          // value={this.state.value}
          // onChange={this.handleChange}
        />
        <button type="submit">Submit</button>
      </form> */}

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
      {/* {console.log(paths)} */}
      <Form paths={paths} imagePaths={imagePaths} />
      {/* {status === "off" ? (
        <div></div>
      ) : (
        <Arrows paths={paths} imagePaths={imagePaths} />
      )} */}
    </div>
  )
}

export default Page1
