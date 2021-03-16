interface Location {
  id: string
  type: string
  name: string
}

interface Episode {
  id: string
  type: string
  name: string
}

interface Origin {
  name: string
  url: string
}

export interface Character {
  id: string
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: Origin
  location: Location
  image: string
  created: string
  episode: Episode
}
