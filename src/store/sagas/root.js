import { takeEvery, all  } from "redux-saga/effects";
import { handleBooksFetch } from "./saga";
import * as actionTypes from '../actionTypes/actionTypes';


function* watchAll() {
  yield all([takeEvery(actionTypes.SEARCH_BOOKS_REQUEST, handleBooksFetch)]);
}


 
export default watchAll;