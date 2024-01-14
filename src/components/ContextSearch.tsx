'use client'

import React from 'react'

// should pass because it is inside a function...
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ContextSearch = React.createContext({} as IContextSearch)

export const ContextSearchProvider: React.FC<ContextProvider> = ({ children }) => {
  const [canSearch, setCanSearch] = React.useState(false)
  const [isFocusing, setIsFocusing] = React.useState(false)

  const contextValues: IContextSearch = React.useMemo(
    () => ({
      canSearch,
      setCanSearch,
      isFocusing,
      setIsFocusing,
    }),
    [canSearch, isFocusing],
  )

  return <ContextSearch.Provider value={contextValues}>{children}</ContextSearch.Provider>
}

export const useContextSearch = (): IContextSearch => {
  const context = React.useContext(ContextSearch)
  if (typeof context === 'undefined') {
    throw new Error('useContextSearch must be used within an ContextSearchProvider')
  }
  return context
}
