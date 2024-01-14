import React from 'react'
import Carousel from './Carousel'

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

const ListSearchResults: React.FC = () => {
  return <Carousel cards={cards} navigationArrows navigationDots />
}

export default ListSearchResults
