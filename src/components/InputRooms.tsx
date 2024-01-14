'use client'

import React from 'react'
import Image from 'next/image'
import Button from './Button'
import BedroomIcon from '@/assets/bedroom.png'
import SearchWhite from '@/assets/search_white.png'
import { useContextSearch } from './ContextSearch'
import DrodpdownTypes from './DropdownTypes'

const flatTypeOptions = ['Todos']

export default function InputRooms(): React.JSX.Element {
  const { canSearch, setIsFocusing } = useContextSearch()
  const [input, setInput] = React.useState('')
  const [shouldShowOptions, setShouldShowOptions] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }, [])

  const handleClickOption = React.useCallback((event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    setInput(event.currentTarget.value)
  }, [])

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (inputRef.current !== null && event.key === 'Enter') {
        inputRef.current.focus()
        inputRef.current.parentElement?.parentElement?.classList.add('shadow')
        inputRef.current.parentElement?.parentElement?.classList.remove('hover:bg-gray-200')
        setShouldShowOptions(!shouldShowOptions)
      }
    },
    [shouldShowOptions],
  )

  const handleSectionClick = React.useCallback(() => {
    if (inputRef.current !== null) {
      inputRef.current.focus()
      inputRef.current.parentElement?.parentElement?.classList.add('shadow')
      inputRef.current.parentElement?.parentElement?.classList.remove('hover:bg-gray-200')
      setShouldShowOptions(true)
      setIsFocusing(true)
    }
  }, [setIsFocusing])

  return (
    <div
      className="flex flex-col items-center justify-between cursor-pointer "
      onClick={handleSectionClick}
      onKeyDown={handleKeyDown}
      role="searchbox"
      tabIndex={0}
    >
      <div className="w-[414px] h-[78px] relative bg-white rounded-[78px] hover:bg-gray-200 flex justify-end items-center">
        <div className="">
          <div className="flex items-center">
            <label
              htmlFor="number-of-rooms"
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
            name="number-of-rooms"
            onChange={handleChange}
            value={input}
            className="left-7 pl-2 top-[40px] absolute text-neutral-700 text-base font-normal font-['Source Sans Pro'] leading-normal focus-visible:outline-none"
            placeholder="Quantos Quartos?"
            readOnly
            ref={inputRef}
          />
        </div>

        <Button
          hasIcon={SearchWhite}
          variant="warning"
          rounded
          size="medium"
          className={`mr-2 flex ${canSearch ? 'animate-grow-to-right' : null}`}
        >
          {canSearch ? <span className="animate-left-to-right text-white ml-1">Buscar</span> : null}
        </Button>

        <div className="flex items-center"></div>
      </div>

      {shouldShowOptions ? (
        <ul className="max-h-[-webkit-fit-content] mt-20 bg-[#fff] absolute rounded-[16px] overflow-hidden shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] mx-auto my-0">
          <span className="block h-[20px] text-[14px] font-normal leading-[20px] text-[#393b3c] tracking-0.25px relative text-left whitespace-nowrap z-10 mt-[16px] mr-0 mb-0 ml-[24px]">
            Número de Quartos
          </span>

          <li
            key="another-key"
            className="flex justify-between items-center relative z-[8] mt-[12px] mr-0 mb-0 ml-[24px]"
          >
            {Array.from({ length: 5 }, (v, k) => {
              return k
            }).map(position => {
              const isDefaultOption = `${position === 0 ? '' : `${position}`}`
              return (
                <Button
                  key={`${position}-room`}
                  variant={`${input === isDefaultOption ? 'primary' : 'secondary'}`}
                  outlined
                  rounded
                  size="small"
                  value={isDefaultOption}
                  onClick={handleClickOption}
                  className="min-w-[42px]"
                >
                  {`${position === 0 ? 'Todos' : `+${position}`}`}
                </Button>
              )
            })}
          </li>

          <li key={`some-key`} className="self-stretch h-[300px] flex-col justify-start items-center inline-flex">
            <div className="w-[80%] bg-gray-300 h-[2px] my-2" />
            <DrodpdownTypes options={flatTypeOptions} />
          </li>
        </ul>
      ) : null}
    </div>
  )
}
