/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
import Image from 'next/image'
import React from 'react'

import PlantHouseIcon from '@/assets/house_plant.png'
import Tour360Icon from '@/assets/tour_360.png'
import VideoIcon from '@/assets/video.png'

interface CardItemProps {
  image?: string
  title: string
  city: string
  rooms: number
  tags?: string[]
  price: number
}
const CardItem: React.FC<CardItemProps> = ({
  image = 'https://via.placeholder.com/323x198',
  title,
  city,
  rooms,
  tags,
  price,
}) => {
  const [shouldShowHddenOptions, setShouldShowHiddenOptions] = React.useState(false)

  const handleHiddenOptions = React.useCallback(() => {
    setShouldShowHiddenOptions(!shouldShowHddenOptions)
  }, [shouldShowHddenOptions])

  // const handleOnFocus = React.useCallback((event: React.FocusEvent<HTMLDivElement, Element>) => {
  // React.SyntheticEvent<HTMLDivElement, React.FocusEventHandler<HTMLDivElement>)>
  // event.stopPropagation()
  // event.preventDefault()
  // }, [])

  return (
    <div
      className="w-72 h-96 relative bg-white rounded-2xl border border-zinc-300 my-4 mx-2 cursor-pointer"
      // onMouseOver={handleHiddenOptions}
      // onMouseMove={}
      // onFocus={handleOnFocus}
      onMouseLeave={handleHiddenOptions}
      onMouseEnter={handleHiddenOptions}
      // onMouseOut={handleHiddenOptions}
    >
      <div className="w-72 h-48 left-0 top-0 absolute bg-zinc-300 rounded-tl-2xl rounded-tr-2xl">
        <Image
          className="w-80 h-48 top-0 relative rounded-2xl border border-zinc-300"
          src={image}
          alt={image}
          width={320}
          height={192}
        />

        {shouldShowHddenOptions ? (
          <div className="px-1.5 py-0.5 left-[12px] top-[12px] absolute bg-white bg-opacity-90 rounded-3xl justify-center items-center gap-2 inline-flex">
            <Image src={PlantHouseIcon} alt="plant-house" unoptimized className="w-4 h-4 relative" />
            <Image src={Tour360Icon} alt="tour-360" unoptimized className="w-4 h-4 relative" />
            <Image src={VideoIcon} alt="video" unoptimized className="w-4 h-4 relative" />
          </div>
        ) : null}

        <div className="left-[114px] top-[183px] absolute justify-center items-center gap-2.5 inline-flex">
          <div className="w-1.5 h-1.5 bg-white rounded-3xl" />
          <div className="w-1 h-1 bg-zinc-100 rounded-3xl" />
          <div className="w-1 h-1 bg-zinc-100 rounded-3xl" />
          <div className="w-1 h-1 bg-zinc-100 rounded-3xl" />
          <div className="w-0.5 h-0.5 bg-zinc-100 rounded-3xl" />
        </div>
      </div>

      <div className="left-[16px] top-[214px] absolute text-neutral-900 text-base font-bold leading-normal tracking-tight">
        {title}
      </div>

      <div className="h-6 left-[16px] top-[337px] absolute">
        <div className="left-0 top-0 text-orange-500 text-xl font-bold leading-relaxed">
          {`${price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}`}
        </div>
      </div>

      <div className="left-[16px] top-[274px] absolute justify-center items-center gap-2 inline-flex">
        <div className="text-neutral-700 text-sm leading-tight">{rooms} Quartos</div>
        <div className="w-1 h-1 bg-stone-300 rounded-full" />
        <div className="text-neutral-700 text-sm leading-tight">2 Banheiros</div>
        <div className="w-1 h-1 bg-stone-300 rounded-full" />
        <div className="text-neutral-700 text-sm leading-tight">4 Vagas</div>
      </div>

      {typeof tags === 'object' && tags.length > 0
        ? tags.map((tag, index) => (
            <div
              key={`${index}-${tag}`}
              className="px-1.5 py-0.5 left-[16px] top-[306px] absolute bg-zinc-100 rounded-3xl flex-col justify-start items-start inline-flex"
            >
              <div className="text-slate-600 text-xs leading-none tracking-tight">{tag}</div>
            </div>
          ))
        : null}

      <div className="px-1.5 py-0.5 left-[132px] top-[306px] absolute bg-zinc-100 rounded-3xl flex-col justify-start items-start inline-flex">
        <div className="text-slate-600 text-xs leading-none tracking-tight">Elevador</div>
      </div>

      <div className="left-[16px] top-[242px] absolute text-zinc-500 text-sm leading-tight">{city}</div>
    </div>
  )
}

export default CardItem
