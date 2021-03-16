import { CHARACTERS, FILTER, LOADED, LOADING, ERROR, SEARCH } from "../actions/actionNames"
import { ActionPayload } from "../types"


const initialState = {
   data: {
     results:[],
   },
   isLoading: false,
   hasFetched: false,
   filter: "",
   error: null,
};

const reducer = (state = initialState, action:ActionPayload) => {
  switch(action.type) {
    case CHARACTERS + LOADING:
      return {
        ...state,
        isLoading: true,
      }
    case CHARACTERS + LOADED:
      const { characters } = action
      const { info } = characters
      return {
        ...state,
        isLoading: false,
        hasFetched: true,
        error: null,
        data:{
          ...state?.data,
          results: [
            ...state?.data?.results,
            ...characters?.results
          ],
          info,
        },
      }
    case CHARACTERS + ERROR:
      return {
        ...state,
        isLoading: false,
        error: action?.error,
      }
    case CHARACTERS + SEARCH + LOADING: 
      return {
        ...state,
        isLoading: true,
      }      
    case CHARACTERS + SEARCH + LOADED: 
      return {
        ...state,
        isLoading: false,
        hasFetched: true,
        error: null,
        data: {
          ...state.data,
          ...action.characters
        }
      }
    case CHARACTERS + SEARCH + ERROR: 
      return {
        ...state,
        error: action?.error
      }
    case CHARACTERS + FILTER: 
      const { filter } = action
      return {
        ...state,
        filter
      }  
    default:
      return state;
  }
}

export default reducer