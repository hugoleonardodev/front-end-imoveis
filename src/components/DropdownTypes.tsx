'use client'

import React from 'react'
import Image from 'next/image'
import ArrowDown from '@/assets/arrow_down.png'

interface DropdownTypesProps {
  options: string[]
}

export default function DrodpdownTypes({ options }: DropdownTypesProps): React.JSX.Element {
  const [input, setInput] = React.useState('')
  const [shouldShowOptions, setShouldShowOptions] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement | null>(null)

  const handleChange = React.useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value)
  }, [])

  const handleClickOption = React.useCallback((event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    setInput(event.currentTarget.value)
    setShouldShowOptions(false)
  }, [])

  const handleKeyDown = React.useCallback((event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log('event.key', event.key)
    // if (event.key === 'Enter' && inputRef.current !== null) {
    //   console.log('inputRef.current.parentElement?.classList', inputRef.current.parentElement?.classList)
    //   setShouldFocus(true)
    // }
  }, [])

  const handleSectionClick = React.useCallback(() => {
    setShouldShowOptions(!shouldShowOptions)
  }, [shouldShowOptions])

  React.useEffect(() => {
    // default option
    setInput(options[0])
  }, [options])

  return (
    <section
      className="flex flex-col items-center justify-between cursor-pointer"
      onClick={handleSectionClick}
      onKeyDown={handleKeyDown}
      role="menu"
      tabIndex={0}
    >
      <div className="bg-white rounded-[78px] hover:bg-gray-200">
        <label htmlFor="flat-type-option" className="left-[62px] top-[14px] text-neutral-500 text-sm leading-tight">
          Tipo de Propriedade
        </label>

        <div className="flex">
          <Image src={ArrowDown} alt="location-icon" className="w-6 h-6 left-[32px] top-[12px]" unoptimized />

          <input
            name="flat-type-option"
            onChange={handleChange}
            value={input}
            className="left-7 pl-2 text-neutral-700 text-base font-normal leading-normal focus-visible:outline-none"
            // placeholder={input}
            ref={inputRef}
            readOnly
            tabIndex={-1}
          />
        </div>
      </div>

      {shouldShowOptions ? (
        <ul className="max-w-[360px] max-h-[352px] mt-20 pt-3 pb-2 bg-white absolute rounded-2xl flex-col justify-end items-center gap-3 inline-flex z-10">
          {options.length > 0 ? (
            options.map((optionValue, index) => (
              <li
                key={`${index}-${optionValue}`}
                className="self-stretch h-[300px] flex-col justify-start items-start inline-flex"
              >
                <button
                  className="w-[300px] h-[57px] relative bg-white hover:bg-gray-100 cursor-pointer"
                  value={`${optionValue}`}
                  onClick={handleClickOption}
                >
                  {optionValue}
                </button>
              </li>
            ))
          ) : (
            <li>Nenhuma opção</li>
          )}
        </ul>
      ) : null}
    </section>
  )
}
