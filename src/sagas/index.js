import { takeEvery, all } from 'redux-saga/effects';
import { STORIES_FETCH } from '../constants/actionTypes';
import { handleFetchStories } from './story';

function *watchAll() {
  yield all([
    takeEvery(STORIES_FETCH, handleFetchStories),
  ])
}

export default watchAll;
