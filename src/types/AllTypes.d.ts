interface State {
  name: string
  shortname: string
}

interface City {
  name: string
  state: State
  placeId: number
}

interface Apartment {
  City: string
  Title: string
  Rooms: number
  Tags?: string[]
  Price: number
}
