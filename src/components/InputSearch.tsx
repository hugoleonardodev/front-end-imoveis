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
  const debouncedValue = useDebounce<string>(input.includes(',') ? '' : input, 1000)

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }, [])

  const handleClickOption = React.useCallback((event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    setInput(event.currentTarget.value)
    setShouldShowOptions(false)
  }, [])

  React.useEffect(() => {
    if (debouncedValue.length > 0) {
      setCitiesOptions(cities.searchCities(debouncedValue))
      setShouldShowOptions(true)
    }
  }, [debouncedValue])

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

      {shouldShowOptions ? (
        <ul className="w-[302px] h-[352px] pt-3 pb-2 bg-white rounded-2xl flex-col justify-end items-center gap-3 inline-flex">
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
                <div className="left-[40px] top-[10px] absolute text-neutral-700 text-sm font-normal font-['Source Sans Pro'] leading-tight tracking-tight">{`${elem.name}, ${elem.state.shortname}`}</div>

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
