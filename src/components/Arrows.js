import React from "react"
import { Link } from "gatsby"

const Arrows = ({ paths }) => {
  const arrow = "-->"
  // console.log(paths)
  return (
    <div>
      <ul>
        <li id={`arrow-${Math.floor(Math.random() * 16)}`}>
          <Link to={`/${paths[0]}`} className="link-arrow">
            {/* <CgArrowLongRightC /> */}
            <p>{arrow}</p>
          </Link>
        </li>
        <li id={`arrow-${Math.floor(Math.random() * 16)}`}>
          <Link to={`/${paths[1]}`} className="link-arrow">
            <p>{arrow}</p>
            {/* <CgArrowLongRightC /> */}
          </Link>
        </li>
        <li id={`arrow-${Math.floor(Math.random() * 16)}`}>
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
