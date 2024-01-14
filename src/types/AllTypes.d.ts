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
  canSearch: boolean
  setCanSearch: React.Dispatch<React.SetStateAction<boolean>>
  isFocusing: boolean
  setIsFocusing: React.Dispatch<React.SetStateAction<boolean>>
}
