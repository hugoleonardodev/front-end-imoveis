'use client'

import React from 'react'
import Image from 'next/image'
import { useDebounce } from '@/hooks'
import SearchCities from '@/controllers/SearchCities.controller'
import places from '@/data/place.json'
import LocationNoFill from '@/assets/location_no_fill.png'
import LocationFilled from '@/assets/location_filled.png'
import { useContextSearch } from './ContextSearch'

const cities = new SearchCities(places)

export default function InputSearch(): React.JSX.Element {
  const { setCanSearch, setIsFocusing, setSearchQuery } = useContextSearch()
  const [input, setInput] = React.useState('')
  const [citiesOptions, setCitiesOptions] = React.useState<City[]>([])
  const [shouldShowOptions, setShouldShowOptions] = React.useState(false)
  const [shouldFocus, setShouldFocus] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement | null>(null)
  const debouncedValue = useDebounce<string>(input.includes(',') ? '' : input, 1000)

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
    // setSearchQuery(event.target.value)
    // setCanSearch(true)
  }, [])

  const handleClickOption = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
      setInput(event.currentTarget.value)
      setSearchQuery(event.currentTarget.value)
      setCanSearch(true)
      setShouldShowOptions(false)
      setIsFocusing(true)
    },
    [setCanSearch, setIsFocusing, setSearchQuery],
  )

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
      inputRef.current.parentElement?.classList.remove('hover-input')
      setIsFocusing(true)
    }
  }, [setIsFocusing])

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
      inputRef.current.parentElement?.classList.remove('hover-input')
      inputRef.current.focus()
    }
  }, [shouldFocus])

  // const handleClickOutside = React.useCallback(
  //   (event: MouseEvent) => {
  //     if (inputRef.current !== null && !inputRef.current.contains(event.target as Node)) {
  //       setIsFocusing(false)
  //       inputRef.current.parentElement?.classList.remove('shadow')
  //       inputRef.current.parentElement?.classList.add('hover:bg-gray-200')
  //       inputRef.current.parentElement?.classList.add('hover-input')
  //       setShouldShowOptions(false)
  //     }
  //   },
  //   [setIsFocusing],
  // )

  // React.useEffect(() => {
  //   document.addEventListener('mousedown', handleClickOutside)
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside)
  //   }
  // }, [handleClickOutside])

  return (
    <section
      className="flex flex-col items-center justify-between cursor-pointer"
      onClick={handleSectionClick}
      onKeyDown={handleKeyDown}
      role="searchbox"
      tabIndex={0}
    >
      <div className="w-[414px] h-[78px] relative bg-white rounded-[78px] hover:bg-gray-200 hover-input">
        <div className="left-[62px] top-[14px] absolute text-neutral-700 text-sm font-bold leading-tight">
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
          className="left-7 pl-2 top-[40px] absolute text-neutral-700 text-base font-normal leading-normal focus-visible:outline-none cursor-pointer"
          placeholder="Qual é a Localização?"
          ref={inputRef}
          tabIndex={-1}
          autoComplete="one-time-code"
        />
      </div>

      {shouldShowOptions ? (
        <ul
          // ref={inputRef}
          className="max-w-[360px] max-h-[352px] mt-20 pt-3 pb-2 bg-white absolute rounded-2xl flex-col justify-end items-center gap-3 inline-flex"
        >
          <div className="text-zinc-400 text-sm font-normal leading-tight md:px-6 lg:px-6">
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
                <div className="left-[40px] top-[10px] absolute text-neutral-700 text-sm font-normal leading-tight tracking-tight">{`${elem.name}, ${elem.state.name}`}</div>

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
