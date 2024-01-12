'use client'

import React from 'react'
import Image from 'next/image'

import LocationNoFill from '../assets/location_no_fill.png'
import LocationFilled from '../assets/location_filled.png'
import Button from './Button'

export default function InputRooms(): React.JSX.Element {
  const [input, setInput] = React.useState(0)

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(Number(event.target.value))
  }, [])

  const handleClickOption = React.useCallback((event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    setInput(Number(event.currentTarget.value))
  }, [])

  return (
    <section className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-[414px] h-[78px] relative bg-white rounded-[78px] shadow">
        <div className="left-[62px] top-[14px] absolute text-neutral-700 text-sm font-bold font-['Source Sans Pro'] leading-tight">
          Localização
        </div>

        <Image
          src={LocationNoFill}
          alt="location-icon"
          className="w-6 h-6 left-[32px] top-[12px] absolute"
          unoptimized
        />

        <input
          name="place-search-query"
          onChange={handleChange}
          value={input}
          className="left-7 pl-2 top-[40px] absolute text-neutral-700 text-base font-normal font-['Source Sans Pro'] leading-normal"
          placeholder="Qual é a Localização?"
        />
      </div>

      <ul className="w-[302px] h-[352px] pt-3 pb-2 bg-white rounded-2xl flex-col justify-end items-center gap-3 inline-flex">
        <div className="text-zinc-400 text-sm font-normal font-['Source Sans Pro'] leading-tight">
          Busque por cidade, região, bairro ou código
        </div>

        <Button variant="primary">Primary Button</Button>

        <Button variant="outlined" size="small">
          Outlined Small Button
        </Button>

        <Button variant="success" size="large">
          Success Large Button
        </Button>

        <li key={`some-key`} className="self-stretch h-[300px] flex-col justify-start items-start inline-flex">
          <button
            className="w-[300px] h-[57px] relative bg-white hover:bg-gray-100 cursor-pointer"
            value={1}
            onClick={handleClickOption}
          >
            <div className="left-[40px] top-[10px] absolute text-neutral-700 text-sm font-normal font-['Source Sans Pro'] leading-tight tracking-tight">
              text
            </div>

            <Image
              src={LocationFilled}
              alt="location-icon"
              className="w-4 h-4 left-[12px] top-[14px] absolute"
              unoptimized
            />

            <div className="w-[84px] h-[88px] left-[132px] top-[35px] absolute" />
          </button>
        </li>
      </ul>
    </section>
  )
}
