import React from "react"

import { Movies } from "@features/Movies/Movies"
import { AppProvider } from "@features/App/AppProvider"

export default function app({ children }) {
  return (
    <AppProvider>
      hello <Movies />
    </AppProvider>
  )
}
