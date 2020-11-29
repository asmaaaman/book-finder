import {SEARCH_BOOKS_RESPONSE} from '../actionTypes/actionTypes'

const INITIAL_STATE = {
    books:[],
    searching:false,
    error: null,

};

function searchReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
      case SEARCH_BOOKS_RESPONSE:
        return {...state, books: action.payload, searching: false}
      default : return state;
    }
  }
   


export default searchReducer; 