import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import "../assets/css/main.css"
import { Video } from "../components/video"

import ReactMarkdown from "react-markdown"
import ReactAudioPlayer from "react-audio-player"

// import welcomeVid from "../assets/welcomeVid2.mp4"
import welcomeAud from "../assets/welcoming-sound.wav"

const query = graphql`
  {
    allContentfulWelcome {
      nodes {
        title
        content {
          content
        }
        content2 {
          content2
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

  const { content, content2, video, title, link } = welcome[0]
  const cont = content ? `${content.content}` : ""
  const cont2 = content2 ? `${content2.content2}` : ""

  return (
    <div>
      {/* <ReactAudioPlayer
        src={welcomeAud}
        autoplay
        controls
        className="welcomeaudio"
      /> */}
      {/* <div className="video-wrapper full-video">
        <video
          src={welcomeVid}
          className="full-video welcome-vid"
          autoPlay
          loop
          controls
        ></video>
      </div> */}
      <Video
        src={link}
        title={title}
        size="full-video"
        className="welcome-vid"
        volume="0"
      />
      <div className="welcome-content">
        <ReactMarkdown children={cont} className="welcome-text" />
      </div>
      <div className="welcome-content2">
        <ReactMarkdown children={cont2} className="welcome-text" />
      </div>
      <Link className="welcome-link" to="/home">
        come in
      </Link>
    </div>
  )
}

export default Index
