'use client'

import React from 'react'
import Carousel from './Carousel'
import CardItem from './CardItem'
import { useContextSearch } from './ContextSearch'
import SearchApartment from '@/controllers/SearchApartment.controller'
import place from '@/data/place.json'
import flats from '@/data/flats.json'

const cards = [
  'Card 1',
  'Card 2',
  'Card 3',
  'Card 4',
  'Card 5',
  'Card 6',
  'Card 7',
  'Card 8',
  'Card 9',
  'Card 10',
  'Card 11',
  'Card 12',
  'Card 13',
]
const searchResult = [
  {
    City: 'Fortaleza',
    Title: 'Resort-Style Living in Fortaleza',
    Author: 'Tropical Real Estate',
    Rooms: 2,
    Tags: ['elevator', 'furniture', 'parking'],
    Price: 700000,
  },
  {
    City: 'Fortaleza',
    Title: 'Cozy Apartment in Fortaleza',
    Author: 'Comfort Homes',
    Rooms: 2,
    Tags: ['furniture', 'parking'],
    Price: 400000,
  },
]

const cardsToRender = [
  <CardItem
    key={searchResult[0].Title}
    title={searchResult[0].Title}
    city={searchResult[0].City}
    rooms={searchResult[0].Rooms}
    price={searchResult[0].Price}
    tags={searchResult[0].Tags}
  />,
  <CardItem
    key={searchResult[1].Title}
    title={searchResult[1].Title}
    city={searchResult[1].City}
    rooms={searchResult[1].Rooms}
    price={searchResult[1].Price}
    tags={searchResult[1].Tags}
  />,
  <CardItem
    key={'11'}
    title={searchResult[0].Title}
    city={searchResult[0].City}
    rooms={searchResult[0].Rooms}
    price={searchResult[0].Price}
    tags={searchResult[0].Tags}
  />,
  <CardItem
    key={'12'}
    title={searchResult[1].Title}
    city={searchResult[1].City}
    rooms={searchResult[1].Rooms}
    price={searchResult[1].Price}
    tags={searchResult[1].Tags}
  />,
  <CardItem
    key={'13'}
    title={searchResult[0].Title}
    city={searchResult[0].City}
    rooms={searchResult[0].Rooms}
    price={searchResult[0].Price}
    tags={searchResult[0].Tags}
  />,
  <CardItem
    key={'14'}
    title={searchResult[1].Title}
    city={searchResult[1].City}
    rooms={searchResult[1].Rooms}
    price={searchResult[1].Price}
    tags={searchResult[1].Tags}
  />,
  <CardItem
    key={'15'}
    title={searchResult[0].Title}
    city={searchResult[0].City}
    rooms={searchResult[0].Rooms}
    price={searchResult[0].Price}
    tags={searchResult[0].Tags}
  />,
  <CardItem
    key={'16'}
    title={searchResult[1].Title}
    city={searchResult[1].City}
    rooms={searchResult[1].Rooms}
    price={searchResult[1].Price}
    tags={searchResult[1].Tags}
  />,
  <CardItem
    key={'17'}
    title={searchResult[0].Title}
    city={searchResult[0].City}
    rooms={searchResult[0].Rooms}
    price={searchResult[0].Price}
    tags={searchResult[0].Tags}
  />,
  <CardItem
    key={'18'}
    title={searchResult[1].Title}
    city={searchResult[1].City}
    rooms={searchResult[1].Rooms}
    price={searchResult[1].Price}
    tags={searchResult[1].Tags}
  />,
]

const aparts = new SearchApartment(flats)

const ListSearchResults: React.FC = () => {
  const { searchQuery, numberOfRooms, shouldRefresh } = useContextSearch()
  const [searchResults, setSearchResults] = React.useState<Apartment[]>([])
  // console.log('searchQuery, numberOfRooms', searchQuery, numberOfRooms)
  // const currentSearch = aparts.searchApartments(searchQuery, numberOfRooms)
  // console.log('searchResults', searchResults)
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

  if (resultsWithCards.length > 0) {
    return <Carousel cards={resultsWithCards} navigationArrows navigationDots />
  }
  return <Carousel cards={defaultValues} navigationArrows navigationDots />
}

export default ListSearchResults
