import React from 'react'
import SearchBar from '@/components/SearchBar'
import ListSearchResults from '@/components/ListSearchResults'
import Header from '@/components/Header'

export default function Home(): React.JSX.Element {
  return (
    <>
      <Header />
      <SearchBar />
      <ListSearchResults />
    </>
  )
}
