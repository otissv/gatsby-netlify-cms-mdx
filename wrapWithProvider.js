import React, { Fragment } from "react"

import { ThemeProvider } from "redesign-system/lib/ThemeContext"

function ProviderReducer({ children, providers }) {
  return providers.reduceRight((Component, Provider) => {
    return <Provider>{Component}</Provider>
  }, <Fragment>{children}</Fragment>)
}

export default function wrapWithProvider({ element }) {
  const providers = [ThemeProvider]

  return <ProviderReducer providers={providers}>{element}</ProviderReducer>
}
//
