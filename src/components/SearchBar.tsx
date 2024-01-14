'use client'

import React from 'react'
import Image from 'next/image'
import InputSearch from './InputSearch'
import InputRooms from './InputRooms'
import HomeImage from '@/assets/home.jpeg'
import { useContextSearch } from './ContextSearch'

export default function SearchBar(): React.JSX.Element {
  const { isFocusing } = useContextSearch()
  return (
    <form className="flex min-h-screen items-center justify-center">
      <div className="flex  items-center justify-center bg-white rounded-[78px] shadow">
        <InputSearch />
        {!isFocusing && <div className="flex min-h-10 min-w-[2px] flex-col bg-gray-300" />}
        <InputRooms />
      </div>

      <Image src={HomeImage} alt="home" className="absolute -z-10" />
    </form>
  )
}
