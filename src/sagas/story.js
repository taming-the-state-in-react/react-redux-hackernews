import { call, put } from 'redux-saga/effects';
import { doAddStories } from '../actions/story';
import { fetchStories } from '../api/story';

function* handleFetchStories(action) {
  const { query } = action;
  const result = yield call(fetchStories, query);
  yield put(doAddStories(result.hits));
}

export {
  handleFetchStories,
};