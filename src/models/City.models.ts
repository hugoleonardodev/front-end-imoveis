export interface State {
  name: string
  shortname: string
}

export default class City {
  private readonly _name: string
  private readonly _state: State
  private readonly _placeId: number

  constructor(name: string, state: State, placeId: number) {
    this._name = name
    this._state = state
    this._placeId = placeId
  }

  get name(): string {
    return this._name
  }

  get state(): State {
    return this._state
  }

  get placeId(): number {
    return this._placeId
  }

  toString(): string {
    return `${this.placeId} - ${this.name}, ${this.state.name}, ${this.state.shortname}`
  }
}
