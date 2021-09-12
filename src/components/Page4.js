import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery } from "gatsby"
import Arrows from "../components/Arrows"
import "../assets/css/main.css"

import ReactMarkdown from "react-markdown"

import ring from "../assets/ring.mp3"

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

const Page4 = () => {
  const {
    allContentfulBranch: { nodes: branches },
  } = useStaticQuery(query)
  const {
    allContentfulPage: { nodes: pages },
  } = useStaticQuery(query)

  const displayPage = pages.find(x => x.order === 4)

  const branchList = branches.filter(x => x.page === 4)
  const { arrows, arrow2, arrow3, content } = displayPage

  let imagePaths = []
  imagePaths.push(arrows, arrow2, arrow3)

  const cont = content ? `${content.content}` : ""
  let paths = []

  const [audio, setAudio] = useState(null)
  useEffect(() => {
    setAudio(new Audio(ring))
    // only run once on the first render on the client
  }, [])

  const playSound = () => {
    audio.play()
  }

  return (
    <div>
      <h2 className="content">
        <ReactMarkdown children={cont} />
      </h2>
      <audio id="sound1" src={ring} preload="auto"></audio>
      <button onClick={playSound}>play</button>
      {branchList.forEach(branch => {
        const { page, path } = branch
        paths.push(path)
        if (page === 1) {
          return <p className="hidden">{path}</p>
        }
      })}
      <Arrows paths={paths} imagePaths={imagePaths} />
    </div>
  )
}

export default Page4
