import { Character}  from "../types"

interface Filter {
  value: string
}

interface Info {
  count: number
  pages: number
  next: string | null
  prev: string | null
}

export interface ActionResponse {
  info: Info
  results: Character[] | []
}

export interface ActionPayload {
  type?: string
  characters: ActionResponse
  error?: string
  filter?: Filter
}