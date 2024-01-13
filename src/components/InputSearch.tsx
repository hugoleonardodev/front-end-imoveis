'use client'

import React from 'react'
import Image from 'next/image'
import { useDebounce } from '@/hooks'
import SearchCities from '@/controllers/SearchCities.controller'
import places from '@/data/place.json'
import LocationNoFill from '@/assets/location_no_fill.png'
import LocationFilled from '@/assets/location_filled.png'

const cities = new SearchCities(places)

export default function InputSearch(): React.JSX.Element {
  const [input, setInput] = React.useState('')
  const [citiesOptions, setCitiesOptions] = React.useState<City[]>([])
  const [shouldShowOptions, setShouldShowOptions] = React.useState(false)
  const [shouldFocus, setShouldFocus] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const debouncedValue = useDebounce<string>(input.includes(',') ? '' : input, 1000)

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }, [])

  const handleClickOption = React.useCallback((event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    setInput(event.currentTarget.value)
    setShouldShowOptions(false)
  }, [])

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('event.key', event.key)
    if (event.key === 'Enter' && inputRef.current !== null) {
      console.log('inputRef.current.parentElement?.classList', inputRef.current.parentElement?.classList)
      setShouldFocus(true)
    }
  }, [])

  const handleSectionClick = React.useCallback(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus()
      inputRef.current.parentElement?.classList.add('shadow')
      inputRef.current.parentElement?.classList.remove('hover:bg-gray-200')
    }
  }, [])

  React.useEffect(() => {
    console.log('debouncedValue', debouncedValue)
    if (debouncedValue !== '' && debouncedValue.length >= 2) {
      setCitiesOptions(cities.searchCities(debouncedValue))
      setShouldShowOptions(true)
    }
  }, [debouncedValue])

  React.useEffect(() => {
    if (inputRef.current !== null && input.includes(',')) {
      inputRef.current.parentElement?.classList.remove('shadow')
    }
  }, [input])

  React.useEffect(() => {
    if (shouldFocus && inputRef.current !== null) {
      inputRef.current.parentElement?.classList.add('shadow')
      inputRef.current.parentElement?.classList.remove('hover:bg-gray-200')
      inputRef.current.focus()
    }
  }, [shouldFocus])

  return (
    <section
      className="flex flex-col items-center justify-between cursor-pointer"
      onClick={handleSectionClick}
      onKeyDown={handleKeyDown}
      role="searchbox"
      tabIndex={0}
    >
      <div className="w-[414px] h-[78px] relative bg-white rounded-[78px] hover:bg-gray-200">
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
          className="left-7 pl-2 top-[40px] absolute text-neutral-700 text-base font-normal font-['Source Sans Pro'] leading-normal focus-visible:outline-none"
          placeholder="Qual é a Localização?"
          ref={inputRef}
          tabIndex={-1}
        />
      </div>

      {shouldShowOptions ? (
        <ul className="w-[302px] h-[352px] mt-20 pt-3 pb-2 bg-white absolute rounded-2xl flex-col justify-end items-center gap-3 inline-flex">
          <div className="text-zinc-400 text-sm font-normal font-['Source Sans Pro'] leading-tight">
            Busque por cidade, região, bairro ou código
          </div>

          {citiesOptions.map((elem, index) => (
            <li
              key={`${index}-${elem.name}`}
              className="self-stretch h-[300px] flex-col justify-start items-start inline-flex"
            >
              <button
                className="w-[300px] h-[57px] relative bg-white hover:bg-gray-100 cursor-pointer"
                value={`${elem.name}, ${elem.state.shortname}`}
                onClick={handleClickOption}
              >
                <div className="left-[40px] top-[10px] absolute text-neutral-700 text-sm font-normal font-['Source Sans Pro'] leading-tight tracking-tight">{`${elem.name}, ${elem.state.name}`}</div>

                <Image
                  src={LocationFilled}
                  alt="location-icon"
                  className="w-4 h-4 left-[12px] top-[14px] absolute"
                  unoptimized
                />

                <div className="w-[84px] h-[88px] left-[132px] top-[35px] absolute" />
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </section>
  )
}
