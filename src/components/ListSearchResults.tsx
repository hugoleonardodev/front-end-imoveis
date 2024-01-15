'use client'

import React from 'react'
import Image from 'next/image'
import Carousel from './Carousel'
import CardItem from './CardItem'
import { useContextSearch } from './ContextSearch'
import SearchApartment from '@/controllers/SearchApartment.controller'
import flats from '@/data/flats.json'
import ArrowDownOrange from '@/assets/arrow_down_orange.png'
import ExternalLink from '@/assets/external_link.png'

const aparts = new SearchApartment(flats)

const ListSearchResults: React.FC = () => {
  const { searchQuery, numberOfRooms, shouldRefresh } = useContextSearch()
  const [searchResults, setSearchResults] = React.useState<Apartment[]>([])

  const resultsWithCards = searchResults.map((result, index) => (
    <CardItem
      key={`${index}-${result.Title}`}
      title={result.Title}
      city={result.City}
      rooms={result.Rooms}
      price={result.Price}
      tags={result.Tags}
    />
  ))
  const defaultValues = flats.map((result, index) => (
    <CardItem
      key={`${index}-${result.Title}`}
      title={result.Title}
      city={result.City}
      rooms={result.Rooms}
      price={result.Price}
      tags={result.Tags}
    />
  ))

  React.useEffect(() => {
    console.log('refreshing')
    console.log('searchQuery, numberOfRooms', searchQuery, numberOfRooms)
    const sanitizedQuery = searchQuery.split(',')[0]
    const currentSearch = aparts.searchApartments(sanitizedQuery, numberOfRooms)
    console.log('currentSearch', currentSearch)
    setSearchResults(currentSearch)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shouldRefresh])
  return (
    <div>
      <div className="ml-[228px]">
        <div className="flex">
          <h3 className="text-neutral-700 text-2xl font-bold leading-loose">Novos Anúncios em</h3>
          <span className="text-sky-900 text-2xl font-bold leading-loose"> </span>

          <div className="flex ml-2 items-center">
            <h3 className="text-orange-600 text-2xl font-bold leading-loose flex">
              <strong className="font-bold">{searchQuery.length > 0 ? searchQuery.split(',')[0] : 'Brasil'}</strong>
            </h3>

            <Image src={ArrowDownOrange} alt="down-arrow-orange" width={16} height={16} className="h-4" />
          </div>
        </div>

        <div className="flex items-center">
          <a href="localhost:3000" className="flex text-blue-800 text-base font-normal leading-normal">
            <span>Ver todos os imóveis</span>
          </a>

          <Image src={ExternalLink} alt="external-link" width={16} height={16} className="h-4" />
        </div>
      </div>

      <Carousel
        cards={resultsWithCards.length > 0 ? resultsWithCards : defaultValues}
        navigationArrows
        navigationDots
      />
    </div>
  )
}

export default ListSearchResults
