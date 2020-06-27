import CSSReset from "@flash-ui/css-reset"
// import theme from "@chakra-ui/theme"
// import { ChakraProvider } from "@chakra-ui/core"
import { addDecorator } from "@storybook/react"
import * as React from "react"

export const Chakra: React.FC = ({ children }) => (
  <div>
    <CSSReset />
    {children}
  </div>
)

addDecorator((StoryFn: Function) => (
  <Chakra>
    <StoryFn />
  </Chakra>
))
