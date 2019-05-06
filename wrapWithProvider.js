import React, { Fragment, useContext } from "react"

const AppContext = React.createContext()

export function useAppContext() {
  return useContext(AppContext)
}

export function AppProvider({ children }) {
  const context = {
    movies: ["Avengers", "Starwars", "Goonies"],
  }

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>
}

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
