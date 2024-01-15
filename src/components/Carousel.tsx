'use client'

import React from 'react'
import Image from 'next/image'
import ArrowRight from '@/assets/arrow_right.png'
import ArrowLeftDisabled from '@/assets/arrow_left_disabled.png'

interface CarouselProps {
  cards: React.ReactNode[]
  navigationDots?: boolean
  navigationArrows?: boolean
}

const Carousel: React.FC<CarouselProps> = ({ cards, navigationDots, navigationArrows }) => {
  const [currentPage, setCurrentPage] = React.useState(0)

  const cardsPerPage = 4
  const totalPages = Math.ceil(cards.length / cardsPerPage)

  const handleClickNext = React.useCallback(() => {
    setCurrentPage(prevPage => (prevPage + 1) % totalPages)
  }, [totalPages])

  const handleClickPrev = React.useCallback(() => {
    setCurrentPage(prevPage => (prevPage - 1 + totalPages) % totalPages)
  }, [totalPages])

  const goToPage = React.useCallback((event: React.SyntheticEvent<HTMLButtonElement, MouseEvent>) => {
    setCurrentPage(Number(event.currentTarget.value))
  }, [])

  const startIdx = currentPage * cardsPerPage
  console.log('startIdx', startIdx)
  const visibleCards = cards.slice(startIdx, startIdx + cardsPerPage)
  console.log('visibleCards', visibleCards)

  return (
    <div className="flex flex-col items-center">
      <div className="flex items-start justify-end">
        {/* {navigationArrows === true ? (
          <button onClick={handleClickPrev} disabled={currentPage === 0}>
            Prev
          </button>
        ) : null} */}

        <div className="flex overflow-hidden mt-9">
          <div className="flex">
            {visibleCards.map((card, index) => (
              <div key={index}>{card}</div>
            ))}
          </div>
        </div>

        {navigationArrows === true ? (
          <div className="flex absolute">
            <button onClick={handleClickPrev} disabled={currentPage === 0} className="cursor-pointer">
              <Image
                src={currentPage === 0 ? ArrowLeftDisabled : ArrowRight}
                alt="previous-buton"
                className={`${currentPage === 0 ? '' : 'rotate-180'}`}
              />
            </button>

            <button
              onClick={handleClickNext}
              disabled={currentPage === totalPages - 1}
              className={`mx-2 ${currentPage === totalPages - 1 ? 'rotate-180' : ''}`}
            >
              <Image src={currentPage === totalPages - 1 ? ArrowLeftDisabled : ArrowRight} alt="next-buton" />
            </button>
          </div>
        ) : null}
      </div>

      {navigationDots === true ? (
        <div className="mt-2">
          {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-[50%] bg-gray-300 my-1 cursor-pointer transition-colors mx-1 ${
                currentPage === index ? 'bg-neutral-600' : ''
              }`}
              value={index}
              onClick={goToPage}
            />
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Carousel
