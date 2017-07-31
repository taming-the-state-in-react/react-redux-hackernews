import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

const logger = createLogger();
const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  applyMiddleware(saga, logger)
);

saga.run(rootSaga);

export default store;