import { compose, createStore, applyMiddleware } from "redux";
import searchReducer from './reducers/searchResult';
import createSagaMiddleware from "redux-saga";
import { createLogger } from 'redux-logger';
import rootSaga from "./sagas/root";

const saga = createSagaMiddleware();

const logger = createLogger();
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store = createStore(
    searchReducer,
    composeEnhancers(applyMiddleware(saga, logger))
);

saga.run(rootSaga);

export default store;