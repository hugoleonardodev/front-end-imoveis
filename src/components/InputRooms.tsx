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
  const { canSearch, isFocusing, setIsFocusing, setNumberOfRooms, setShouldRefresh, shouldRefresh } = useContextSearch()
  const [input, setInput] = React.useState('')
  const [shouldShowOptions, setShouldShowOptions] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // event.stopPropagation()
      setInput(event.target.value)
      setNumberOfRooms(Number(event.target.value))
    },
    [setNumberOfRooms],
  )

  const handleClickOption = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
      // event.stopPropagation()
      setInput(event.currentTarget.value)
      setNumberOfRooms(Number(event.currentTarget.value))
    },
    [setNumberOfRooms],
  )

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      // event.stopPropagation()
      if (inputRef.current !== null && event.key === 'Enter') {
        inputRef.current.focus()
        inputRef.current.parentElement?.parentElement?.classList.add('shadow')
        inputRef.current.parentElement?.parentElement?.classList.remove('hover:bg-gray-200')
        inputRef.current.parentElement?.parentElement?.classList.remove('hover-input')
        setShouldShowOptions(true)
      }
    },
    [shouldShowOptions],
  )

  const handleSectionClick = React.useCallback(() => {
    if (inputRef.current !== null) {
      if (!isFocusing) {
        inputRef.current.focus()
        inputRef.current.parentElement?.parentElement?.classList.add('shadow')
        inputRef.current.parentElement?.parentElement?.classList.remove('hover:bg-gray-200')
        inputRef.current.parentElement?.parentElement?.classList.remove('hover-input')
      } else {
        inputRef.current.parentElement?.parentElement?.classList.remove('shadow')
        inputRef.current.parentElement?.parentElement?.classList.add('hover:bg-gray-200')
        inputRef.current.parentElement?.parentElement?.classList.add('hover-input')
      }
      setShouldShowOptions(true)
      setIsFocusing(true)
    }
  }, [isFocusing, setIsFocusing, shouldShowOptions])

  const handleSearch = React.useCallback(
    (event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation()
      console.log('click')
      setShouldRefresh(!shouldRefresh)
      setShouldShowOptions(false)
    },
    [shouldRefresh, setShouldRefresh, setShouldShowOptions],
  )

  // const handleClickOutside = React.useCallback(
  //   (event: MouseEvent) => {
  //     if (inputRef.current !== null && !inputRef.current.contains(event.target as Node)) {
  //       setIsFocusing(false)
  //       inputRef.current.parentElement?.parentElement?.classList.remove('shadow')
  //       inputRef.current.parentElement?.parentElement?.classList.add('hover:bg-gray-200')
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
    <div
      className="flex flex-col items-center justify-between cursor-pointer "
      onClick={handleSectionClick}
      onKeyDown={handleKeyDown}
      role="searchbox"
      tabIndex={0}
    >
      <div className="w-[414px] h-[78px] relative bg-white rounded-[78px] hover:bg-gray-200 flex justify-end items-center hover-input">
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

          {Number(input) > 0 ? <span className="absolute left-6 z-20">+</span> : null}

          <input
            name="number-of-rooms"
            onChange={handleChange}
            value={input}
            className="left-7 pl-2 top-[40px] absolute text-neutral-700 text-base font-normal font-['Source Sans Pro'] leading-normal focus-visible:outline-none cursor-pointer"
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
          onClick={handleSearch}
        >
          {canSearch ? <span className="animate-left-to-right text-white ml-1">Buscar</span> : null}
        </Button>

        <div className="flex items-center"></div>
      </div>

      {shouldShowOptions ? (
        <ul className="mt-20 bg-[#fff] absolute z-20 rounded-[16px] overflow-hidden shadow-[0_4px_16px_0_rgba(0,0,0,0.1)] my-0">
          <span className="block h-[20px] text-[14px] font-normal leading-[20px] text-[#393b3c] tracking-0.25px relative text-left whitespace-nowrap z-10 mt-[16px] mr-0 mb-0 ml-[24px]">
            Número de Quartos
          </span>

          <li key="another-key" className="flex justify-between items-center relative z-[8] mt-[12px] mx-[24px]">
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

          <li key={`some-key`} className="self-stretch flex-col justify-start items-center inline-flex">
            <div className="w-[80%] bg-gray-300 h-[2px] my-2" />
            <DrodpdownTypes options={flatTypeOptions} />
          </li>
        </ul>
      ) : null}
    </div>
  )
}
