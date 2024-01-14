'use client'

import React from 'react'

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
    <div>
      <div className="flex items-center justify-around">
        {navigationArrows === true ? (
          <button onClick={handleClickPrev} disabled={currentPage === 0}>
            Prev
          </button>
        ) : null}

        <div className="flex overflow-hidden ">
          <div className="flex">
            {visibleCards.map((card, index) => (
              <div key={index} style={{ width: '25%' }}>
                {card}
              </div>
            ))}
          </div>
        </div>

        {navigationArrows === true ? (
          <button onClick={handleClickNext} disabled={currentPage === totalPages - 1}>
            Next
          </button>
        ) : null}
      </div>

      {navigationDots === true ? (
        <div className="mt-2">
          {Array.from({ length: Math.ceil(cards.length / cardsPerPage) }).map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-[50%] bg-gray-500 my-1 cursor-pointer transition-colors ${
                currentPage === index ? 'bg-black' : ''
              }`}
              value={index}
              onClick={goToPage}
            >
              {index}
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

export default Carousel
