import SearchCities from '@/controllers/SearchCities.controller'
import places from '../data/place.json'

describe('SearchCities Class', () => {
  const cities = new SearchCities(places)

  it('can search a city by name', () => {
    expect(cities.searchCities('fort')).toEqual([
      {
        name: 'Fortaleza',
        state: { name: 'Ceará', shortname: 'CE' },
        placeId: 2,
      },
    ])

    expect(cities.searchCities('fortaleza')).toEqual([
      {
        name: 'Fortaleza',
        state: { name: 'Ceará', shortname: 'CE' },
        placeId: 2,
      },
    ])
  })

  it('can search a city by state name and shortname', () => {
    expect(cities.searchCities('minas')).toEqual([
      {
        name: 'Belo Horizonte',
        state: {
          name: 'Minas Gerais',
          shortname: 'MG',
        },
        placeId: 1,
      },
    ])

    expect(cities.searchCities('mg')).toEqual([
      {
        name: 'Belo Horizonte',
        state: {
          name: 'Minas Gerais',
          shortname: 'MG',
        },
        placeId: 1,
      },
    ])
  })
})
