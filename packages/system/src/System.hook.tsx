import * as React from "react"

interface SystemProps {}

export function useSystem(props: SystemProps) {
  return {
    ...props,
  }
}

export default useSystem
