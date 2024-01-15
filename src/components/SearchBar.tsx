'use client'

import React from 'react'
import Image from 'next/image'
import InputSearch from './InputSearch'
import InputRooms from './InputRooms'
import HomeImageWebp from '@/assets/home.webp'
// import { useContextSearch } from './ContextSearch'

export default function SearchBar(): React.JSX.Element {
  // const { isFocusing } = useContextSearch()
  return (
    <section className="min-h-[640px] flex justify-center">
      <Image src={HomeImageWebp} blurDataURL="../assets/home.avif" alt="home" className="absolute -z-10 mt-16" />

      <form className="items-center justify-center absolute mt-[300px]">
        <h1 className="text-center text-white text-4xl font-bold leading-10 translate-y-[-96px]">
          Vende. Aluga. Conecta.
        </h1>

        <div className="lg:flex items-center justify-center bg-white lg:rounded-[78px] lg:shadow lg:mt-10">
          <InputSearch />
          {/* {
            <div
              className={`flex min-h-10 min-w-[2px] flex-col bg-gray-300 ${!isFocusing ? 'bg-gray-300' : 'bg-white'}`}
            />
          } */}

          <InputRooms />
        </div>
      </form>
    </section>
  )
}
