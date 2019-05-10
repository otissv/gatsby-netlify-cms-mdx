import React, { Fragment } from "react"

import { AppProvider } from "./src/components/AppProvider"

function ProviderReducer({ children, providers }) {
  return providers.reduceRight((Component, Provider) => {
    return <Provider>{Component}</Provider>
  }, <Fragment>{children}</Fragment>)
}

export default function wrapWithProvider({ element }) {
  const providers = [AppProvider]

  return <ProviderReducer providers={providers}>{element}</ProviderReducer>
}
//
