import { CHARACTERS, SEARCH, FILTER, LOADED, LOADING, ERROR } from "./actionNames";
import { Dispatch } from "redux";
import { ActionResponse } from "../types";
import client from '../../client';


const createGetAllCharactersAction = () => {
  return {
    type: CHARACTERS + LOADING,
  };
};

const createGetAllCharactersSuccessAction = (characters: ActionResponse) => {
  return {
    type: CHARACTERS + LOADED,
    characters
  };
}

const createGetAllCharactersErrorAction = (error: string) => {
  return {
    type: CHARACTERS + ERROR,
    error,
  };
}

const createSearchActionLoading = () => {
  return {
    type: CHARACTERS + SEARCH + LOADING,
  };
}

const createSearchActionSuccess = (characters: ActionResponse) => {
  return {
    type: CHARACTERS + SEARCH + LOADED,
    characters
  };
}

const createSearchActionError = (error: string) => {
  return {
    type: CHARACTERS + SEARCH + ERROR,
    error
  };
}

export const createFilterSearch = (filter: string) => {
  return {
    type: CHARACTERS + FILTER,
    filter
  }
}

export const loadAllCharacters = (isInfiniteScroll: boolean = false) => async (dispatch: Dispatch, getState: Function) => {
  const state = getState();
  const nextUrl = state?.characters?.data?.info?.next;
  if (isInfiniteScroll && !nextUrl) return;
  const baseUrl = `/character`;
  const link = isInfiniteScroll ? nextUrl : baseUrl;
  dispatch(createGetAllCharactersAction());
  try {
    const response = await client.get(link);
    const characters = response?.data;
    dispatch(createGetAllCharactersSuccessAction(characters));
  } catch (error) {
    const errorMessage = error?.message;
    dispatch(createGetAllCharactersErrorAction(errorMessage));
  }
};

export const makeSearch = (query: string) => async (dispatch: Dispatch) => {
  dispatch(createSearchActionLoading());
  try {
    const response = await client.get(`/character/?name=${query}`);
    const characters = response?.data;
    dispatch(createSearchActionSuccess(characters));
  } catch (error) {
    const errorMessage = error?.message;
    dispatch(createSearchActionError(errorMessage));
  }
};
