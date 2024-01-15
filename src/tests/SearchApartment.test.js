import SearchCities from '@/controllers/SearchCities.controller'
import SearchApartment from '@/controllers/SearchApartment.controller'
import places from '../data/place.json'
import flats from '../data/flats.json'

describe('SearchApartment Class', () => {
  const cities = new SearchCities(places)
  const aparts = new SearchApartment(flats)

  it('can search for flats with 2 rooms by state shortname "CE"', () => {
    expect(aparts.searchApartments(cities.searchCities('CE')[0].name, 2)).toStrictEqual([
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
    ])
  })
})
