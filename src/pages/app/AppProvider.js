import React from "react"
import { AppContext } from "./AppContext"

export function AppProvider({ children }) {
  const context = {
    movies: ["Avengers", "Starwars", "Goonies"],
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}
