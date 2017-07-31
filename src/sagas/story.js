import { call, put } from 'redux-saga/effects';
import { doAddStories } from '../actions/story';

const HN_BASE_URL = 'http://hn.algolia.com/api/v1/search?query=';

const fetchStories = query =>
  fetch(HN_BASE_URL + query)
    .then(response => response.json());

function* handleFetchStories(action) {
  const { query } = action;
  const result = yield call(fetchStories, query);
  yield put(doAddStories(result.hits));
}

export {
  handleFetchStories,
};