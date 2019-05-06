import React, { Fragment } from "react"
import { graphql } from "gatsby"
import { Header } from "../components/Header"
import { useAppContext } from "../../wrapWithProvider"

export default function About({ data, ...props }) {
  const { movies } = useAppContext()
  return (
    <Fragment>
      <Header>About me</Header>
      Here's some stuff about me
      <p>
        Hi, I'm {data.guru.user.firstName} {data.guru.user.lastName}
      </p>
      <p>Movies are like are {movies.join(", ")}</p>
    </Fragment>
  )
}

export const query = graphql`
  {
    guru {
      user: FakePerson {
        firstName
        lastName
      }
    }
  }
`
