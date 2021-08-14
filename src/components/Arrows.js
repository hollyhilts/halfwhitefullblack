import React from "react"
import { Link } from "gatsby"

const Arrows = ({ paths }) => {
  const arrow = "-->"
  const id1 = Math.floor(Math.random() * 16)
  const id2 = Math.floor(Math.random() * 16)
  const id3 = Math.floor(Math.random() * 16)
  // console.log(paths)
  return (
    <div>
      <ul>
        <li id={`arrow-${id1}`}>
          <Link to={`/${paths[0]}`} className="link-arrow">
            {/* <CgArrowLongRightC /> */}
            <p>{arrow}</p>
          </Link>
        </li>
        <li id={`arrow-${id2}`}>
          <Link to={`/${paths[1]}`} className="link-arrow">
            <p>{arrow}</p>
            {/* <CgArrowLongRightC /> */}
          </Link>
        </li>
        <li id={`arrow-${id3}`}>
          <Link to={`/${paths[2]}`} className="link-arrow">
            <p>{arrow}</p>
            {/* <CgArrowLongRightC /> */}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Arrows
