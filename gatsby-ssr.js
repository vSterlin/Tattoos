/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

import { SliderProvider } from "./src/context/SliderContext"

export const wrapRootElement = ({ element }) => (
  <SliderProvider>{element}</SliderProvider>
)

