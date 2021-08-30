import { div } from "prelude-ls"
import React from "react"
import Arrows from "../components/Arrows"

const Form = ({ paths, imagePaths }) => {
  // function showHide() {
  //   var div = document.getElementById("arrows")
  //   console.log(div)
  //   if (div.status === "off") {
  //     div.status = "on"
  //   } else {
  //     div.status = "off"
  //   }
  // }
  function handleSubmit(event) {
    alert("Thank you, please click an arrow to move forward")
    // event.preventDefault()
  }
  let subStatus = false

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" />
      </label>
      {}
      <input
        type="submit"
        value="Submit"
        onClick={() => {
          subStatus = !subStatus
        }}
      />
      <div id="arrows">
        <Arrows paths={paths} imagePaths={imagePaths} />
      </div>
    </form>
  )
}

export default Form
