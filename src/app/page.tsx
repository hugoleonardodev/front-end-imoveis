import React from 'react'
import SearchBar from '@/components/SearchBar'
import ListSearchResults from '@/components/ListSearchResults'

export default function Home(): React.JSX.Element {
  return (
    <>
      <SearchBar />
      <ListSearchResults />
    </>
  )
}
