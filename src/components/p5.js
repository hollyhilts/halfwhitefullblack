import React from "react"
import {loadableP5 as P5Wrapper} from './loadable';
import SketchSnowflakes from './SketchSnowflakes';

const P5 = () => {
    return(
      <P5Wrapper sketch={SketchSnowflakes} />
    )
}

export default P5
