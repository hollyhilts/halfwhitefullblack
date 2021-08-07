import React from "react"
import { loadableP5 as P5Wrapper } from "./loadable"
import MainBackground from "../MainBackground"

const P5 = () => {
  return <P5Wrapper sketch={MainBackground} />
}

export default P5
