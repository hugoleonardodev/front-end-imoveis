'use client'

import React from 'react'
import Image from 'next/image'
import BedroomIcon from '@/assets/bedroom.png'
import Button from './Button'

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
      className="flex min-h-screen flex-col items-center justify-between p-24"
      onClick={handleClickRooms}
      onKeyDown={handleKeyDown}
      role="searchbox"
      tabIndex={-1}
    >
      <div className="w-[414px] h-[78px] relative bg-white rounded-[78px] shadow">
        <div className="left-[62px] top-[14px] absolute text-neutral-700 text-sm font-bold font-['Source Sans Pro'] leading-tight">
          N° de Quartos
        </div>

        <Image src={BedroomIcon} alt="bedroom-icon" className="w-6 h-6 left-[32px] top-[12px] absolute" unoptimized />

        <input
          name="place-search-query"
          onChange={handleChange}
          value={input}
          className="left-7 pl-2 top-[40px] absolute text-neutral-700 text-base font-normal font-['Source Sans Pro'] leading-normal"
          placeholder="Quantos Quartos?"
          readOnly
        />
      </div>

      {shouldShowOptions ? (
        <ul className="main-container bg-[#fff] rounded-[16px] relative overflow-hidden shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] mx-auto my-0">
          <span className="block h-[20px] font-['Source_Sans_Pro'] text-[14px] font-normal leading-[20px] text-[#393b3c] tracking-0.25px relative text-left whitespace-nowrap z-10 mt-[16px] mr-0 mb-0 ml-[24px]">
            Número de Quartos
          </span>

          <li className="flex justify-between items-center relative z-[8] mt-[12px] mr-0 mb-0 ml-[24px]">
            <Button variant="primary" outlined rounded>
              Todos
            </Button>

            <Button variant="secondary" outlined rounded>
              +1
            </Button>

            <Button variant="secondary" outlined rounded>
              +2
            </Button>

            <Button variant="secondary" outlined rounded>
              +3
            </Button>

            <Button variant="secondary" outlined rounded>
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
