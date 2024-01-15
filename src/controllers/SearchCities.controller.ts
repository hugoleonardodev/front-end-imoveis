export default class SearchCities {
  private readonly cities: City[]

  constructor(initialCities: City[] = []) {
    this.cities = initialCities
  }

  addCity(city: City): void {
    this.cities.push(city)
  }

  searchCities(query: string): City[] {
    if (this.cities.length === 0) return this.cities

    const normalizedQuery = query.toLowerCase()

    return this.cities.filter(city => {
      return (
        city.name.toLowerCase().includes(normalizedQuery) ||
        city.state.name.toLowerCase().includes(normalizedQuery) ||
        city.state.shortname.toLowerCase().includes(normalizedQuery) ||
        city.placeId.toString() === normalizedQuery
      )
    })
  }

  getAllCities(): City[] {
    return this.cities
  }
}
