import {SEARCH_BOOKS_REQUEST,SEARCH_BOOKS_RESPONSE} from '../actionTypes/actionTypes'

export const getBooksRequest = (inputValue) => ({
  type: SEARCH_BOOKS_REQUEST,
  payload: {
    inputValue,
  },
});

export const getBooksResponse = (payload) => ({
  type: SEARCH_BOOKS_RESPONSE,
  payload,
});

