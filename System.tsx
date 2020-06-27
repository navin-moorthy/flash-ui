import * as React from "react"
import { useSystem, SystemProps } from "./System.hook"

export function System(props: SystemProps) {
  const hook = useSystem(props)
  return <div>This is a System component</div>
}

export default System
