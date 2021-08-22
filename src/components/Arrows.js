import React from "react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

var ids = []
while (ids.length < 3) {
  var r = Math.floor(Math.random() * 16) + 1
  if (ids.indexOf(r) === -1) ids.push(r)
}
console.log(ids)
const Arrows = ({ paths, imagePaths }) => {
  let type = ""
  let images = []
  if (typeof imagePaths[0] === "object") {
    type = "img"
    images = imagePaths
  }
  return (
    <div>
      <ul>
        <li id={`arrow-${ids[0]}`}>
          <Link to={`/${paths[0]}`} className="link-arrow">
            {type === "img" ? (
              <GatsbyImage
                image={images[0]}
                className="image-button"
              ></GatsbyImage>
            ) : (
              <p>{imagePaths[0]}</p>
            )}
          </Link>
        </li>
        <li id={`arrow-${ids[1]}`}>
          <Link to={`/${paths[1]}`} className="link-arrow">
            {type === "img" ? (
              <GatsbyImage
                image={images[1]}
                className="image-button"
              ></GatsbyImage>
            ) : (
              <p>{imagePaths[1]}</p>
            )}
          </Link>
        </li>
        <li id={`arrow-${ids[2]}`}>
          <Link to={`/${paths[2]}`} className="link-arrow">
            {type === "img" ? (
              <GatsbyImage
                image={images[2]}
                className="image-button"
              ></GatsbyImage>
            ) : (
              <p>{imagePaths[2]}</p>
            )}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Arrows
