import React from "react"
import { useAppContext } from "../App/AppContext"

export function Movies({ children }) {
  const { movies } = useAppContext()

  return (
    <div>
      <p>Movies are like are {movies.join(", ")}</p>
      products
    </div>
  )
}
