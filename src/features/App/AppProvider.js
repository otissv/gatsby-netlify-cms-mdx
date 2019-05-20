import React from "react"
import { AppContext } from "./AppContext"
import { ThemeProvider } from "redesign-system/lib/ThemeContext"

export function AppProvider({ children }) {
  const context = {
    movies: ["Avengers", "Starwars", "Goonies"],
  }

  return (
    <ThemeProvider>
      <AppContext.Provider value={context}>{children}</AppContext.Provider>
    </ThemeProvider>
  )
}
