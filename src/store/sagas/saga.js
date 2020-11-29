import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchBooks } from "../../api/response";
import * as actions from "../actions/actionSearch";

export function* handleBooksFetch({payload}) {
  try {    
    const books = yield call(fetchBooks, payload.inputValue);  
    yield put(actions.getBooksResponse(books.data.items));
  }
   catch(error){
     console.log(error);
     
   }
}
