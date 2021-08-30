import React from "react"
// import styled from "styled-components"

export const Video = ({ src, title, size, ...props }) => (
  <div className={`video-wrapper ${size}`}>
    <div className="video">
      <iframe
        options="autoplay; loop"
        src={`${src}?controls=0&autoplay=1&controls=0&fs=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; modestbranding; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        autoplay="1"
        rel="0"
        controls="0"
        // modestbranding="1"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen
      />
    </div>
  </div>
)

// const IframeVideoWrapper = styled.div`
//   width: 90vw;
//   max-width: 700px;
//   display: block;
//   margin: auto;

//   .video {
//     overflow: hidden;
//     padding-top: 56.25%;
//     position: relative;
//     /* display: block;
//     margin: auto; */
//   }

//   .video iframe {
//     border: 0;
//     height: 100%;
//     left: 0;
//     position: absolute;
//     top: 0;
//     width: 100%;
//     /* display: block;
//     margin: auto; */
//   }
// `

Video.defaultProps = {
  src: "https://www.youtube.com/embed/5d4xGNp5Fgs/autoplay=1",
  title: "Tester - Tonstartssbandht",
}

// {
//   /* <iframe src="https://player.vimeo.com/video/149487714?h=bb5cb7540b" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
// <p><a href="https://vimeo.com/149487714">Transcendental Temporality within David Lynch&#039;s Blue Velvet</a> from <a href="https://vimeo.com/user46157755">Holly Hilts</a> on <a href="https://vimeo.com">Vimeo</a>.</p> */
// }

// {
//   /* <iframe width="560" height="315" src="https://www.youtube.com/embed/5d4xGNp5Fgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */
// }
