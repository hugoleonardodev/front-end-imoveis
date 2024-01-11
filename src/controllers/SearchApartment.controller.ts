interface City {
  name: string
  state: {
    name: string
    shortname: string
  }
  placeId: number
}

interface Apartment {
  City: string
  Title: string
  Rooms: number
  Tags?: string[]
  Price: number
}

export default class SearchApartment {
  private readonly cities: City[]
  private readonly apartments: Apartment[]

  constructor(cities: City[], apartments: Apartment[]) {
    this.cities = cities
    this.apartments = apartments
  }

  searchApartments(cityName: string, numberOfRooms: number): Apartment[] {
    const results: Apartment[] = []

    // Iterate through apartments to find matches
    for (const apartment of this.apartments) {
      if (apartment.City.toLowerCase() === cityName.toLowerCase() && apartment.Rooms === numberOfRooms) {
        results.push(apartment)
      }
    }

    return results
  }
}
