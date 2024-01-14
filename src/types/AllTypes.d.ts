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

interface ContextProvider {
  children?: React.ReactNode
}

interface IContextSearch {
  searchQuery: string
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>
  numberOfRooms: number
  setNumberOfRooms: React.Dispatch<React.SetStateAction<number>>
  canSearch: boolean
  setCanSearch: React.Dispatch<React.SetStateAction<boolean>>
  isFocusing: boolean
  setIsFocusing: React.Dispatch<React.SetStateAction<boolean>>
  shouldRefresh: boolean
  setShouldRefresh: React.Dispatch<React.SetStateAction<boolean>>
}
