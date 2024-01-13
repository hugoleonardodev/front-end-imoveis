'use client'

import React from 'react'
import InputSearch from './InputSearch'
import InputRooms from './InputRooms'

export default function SearchBar(): React.JSX.Element {
  return (
    <section className="flex min-h-screen items-center justify-between p-24">
      <InputSearch />
      <InputRooms />
    </section>
  )
}
