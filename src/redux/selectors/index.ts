import { createSelector } from "reselect"
import { RootStateOrAny } from "react-redux"
import { statuses, notFoundError } from "../../constants"
import { Character } from "../../types"

const getVisibilityFilter = (state: RootStateOrAny) => state?.characters?.filter
const getCharacters = (state: RootStateOrAny) => state?.characters?.data?.results
const getError = (state: RootStateOrAny) => state?.characters?.error

export const getVisibleCharacters = createSelector(
  [getVisibilityFilter, getCharacters],
  (visibilityFilter, characters) => {
    const filter = visibilityFilter.toUpperCase()
    switch (filter) {
      case statuses.any:
        return characters
      case statuses.dead:
          return characters.filter((character: Character) => character.status.toUpperCase() === statuses.dead)
      case statuses.unknown:
          return characters.filter((character: Character) => character.status.toUpperCase() === statuses.unknown)
      case statuses.alive:
        return characters.filter((character: Character) => character.status.toUpperCase() === statuses.alive)
      default:
        return characters  
    }
  }
)

export const getIsNotFoundError = createSelector(
  [getError],
  (error) => error === notFoundError
)
