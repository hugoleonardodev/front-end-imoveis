'use client'

import React from 'react'

// should pass because it is inside a function...
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export const ContextSearch = React.createContext({} as IContextSearch)

export const ContextSearchProvider: React.FC<ContextProvider> = ({ children }) => {
  const [searchQuery, setSearchQuery] = React.useState('')
  const [numberOfRooms, setNumberOfRooms] = React.useState(0)
  const [canSearch, setCanSearch] = React.useState(false)
  const [isFocusing, setIsFocusing] = React.useState(false)
  const [shouldRefresh, setShouldRefresh] = React.useState(false)

  const contextValues: IContextSearch = React.useMemo(
    () => ({
      searchQuery,
      setSearchQuery,
      numberOfRooms,
      setNumberOfRooms,
      canSearch,
      setCanSearch,
      isFocusing,
      setIsFocusing,
      shouldRefresh,
      setShouldRefresh,
    }),
    [searchQuery, numberOfRooms, canSearch, isFocusing, shouldRefresh],
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
