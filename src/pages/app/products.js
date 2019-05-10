import React from "react"
import { useAppContext } from "./AppContext"

export default function products({ children }) {
  const { movies } = useAppContext()

  return (
    <div>
      <p>Movies are like are {movies.join(", ")}</p>
      products
    </div>
  )
}
