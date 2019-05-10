import React, { Fragment } from "react"
import { Header } from "../components/Header"

export default function About({ data, ...props }) {
  return (
    <Fragment>
      <Header>About me</Header>
      Here's some stuff about me
    </Fragment>
  )
}
