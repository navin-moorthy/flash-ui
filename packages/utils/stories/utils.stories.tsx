import * as React from "react"
import { objectToArrayNotation } from "../src"

export default {
  title: "Utils",
}

export const Utils = () => {
  const obj = { lg: 400, sm: 100, base: 40 }
  const utils = objectToArrayNotation({ base: 100, sm: 100 })
  console.log("%c utils", "color: #00a3cc", utils)

  return <div>Utils</div>
}
