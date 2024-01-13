'use client'

import React from 'react'
import Image from 'next/image'
import Button from './Button'
import BedroomIcon from '@/assets/bedroom.png'
import SearchWhite from '@/assets/search_white.png'

export default function InputRooms(): React.JSX.Element {
  const [input, setInput] = React.useState('')
  const [shouldShowOptions, setShouldShowOptions] = React.useState(false)

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    // setInput(Number(event.target.value))
    setInput(event.target.value)
  }, [])

  const handleClickOption = React.useCallback((event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    // setInput(Number(event.currentTarget.value))
    setInput(event.currentTarget.value)
  }, [])

  const handleClickRooms = React.useCallback(() => {
    setShouldShowOptions(!shouldShowOptions)
  }, [shouldShowOptions])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      setShouldShowOptions(!shouldShowOptions)
    },
    [shouldShowOptions],
  )

  return (
    <div
      className="flex flex-col items-center justify-between cursor-pointer"
      onClick={handleClickRooms}
      onKeyDown={handleKeyDown}
      role="searchbox"
      tabIndex={-1}
    >
      <div className="w-[414px] h-[78px] relative bg-white rounded-[78px] hover:bg-gray-200 shadow flex justify-end items-center">
        <div className="">
          <div className="flex items-center">
            <label
              htmlFor="place-search-query"
              className="left-[62px] top-[14px] absolute text-neutral-700 text-sm font-bold font-['Source Sans Pro'] leading-tight"
            >
              N° de Quartos
            </label>

            <Image
              src={BedroomIcon}
              alt="bedroom-icon"
              className="w-6 h-6 left-[32px] top-[12px] absolute"
              unoptimized
            />
          </div>

          <input
            name="place-search-query"
            onChange={handleChange}
            value={input}
            className="left-7 pl-2 top-[40px] absolute text-neutral-700 text-base font-normal font-['Source Sans Pro'] leading-normal focus-visible:outline-none"
            placeholder="Quantos Quartos?"
            readOnly
          />
        </div>

        <Button hasIcon={SearchWhite} variant="warning" rounded size="medium" className="mr-2" />
        <div className="flex items-center"></div>
      </div>

      {shouldShowOptions ? (
        <ul className="main-container mt-20 bg-[#fff] absolute rounded-[16px] overflow-hidden shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] mx-auto my-0">
          <span className="block h-[20px] font-['Source_Sans_Pro'] text-[14px] font-normal leading-[20px] text-[#393b3c] tracking-0.25px relative text-left whitespace-nowrap z-10 mt-[16px] mr-0 mb-0 ml-[24px]">
            Número de Quartos
          </span>

          <li className="flex justify-between items-center relative z-[8] mt-[12px] mr-0 mb-0 ml-[24px]">
            <Button variant="primary" outlined rounded size="small">
              Todos
            </Button>

            <Button variant="secondary" outlined rounded size="small">
              +1
            </Button>

            <Button variant="secondary" outlined rounded size="small">
              +2
            </Button>

            <Button variant="secondary" outlined rounded size="small">
              +3
            </Button>

            <Button variant="secondary" outlined rounded size="small">
              +4
            </Button>
          </li>

          <li key={`some-key`} className="self-stretch h-[300px] flex-col justify-start items-start inline-flex">
            <button
              className="w-[300px] h-[57px] relative bg-white hover:bg-gray-100 cursor-pointer"
              value={1}
              onClick={handleClickOption}
            >
              <div className="left-[40px] top-[10px] absolute text-neutral-700 text-sm font-normal font-['Source Sans Pro'] leading-tight tracking-tight">
                text
              </div>

              <div className="w-[84px] h-[88px] left-[132px] top-[35px] absolute" />
            </button>
          </li>
        </ul>
      ) : null}
    </div>
  )
}
