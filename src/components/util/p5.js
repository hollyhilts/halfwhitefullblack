import React from "react"
import {loadableP5 as P5Wrapper} from './loadable';
import Museum from '../Museum';

const P5 = () => {
    return(
      <P5Wrapper sketch={Museum} />
    )
}

export default P5
