import {
  STORIES_ADD,
  STORIES_FETCH,
  STORIES_FETCH_ERROR,
} from '../constants/actionTypes';

const doAddStories = stories => ({
  type: STORIES_ADD,
  stories,
});

const doFetchStories = query => ({
  type: STORIES_FETCH,
  query,
});

const doFetchErrorStories = error => ({
  type: STORIES_FETCH_ERROR,
  error,
});

export {
  doAddStories,
  doFetchStories,
  doFetchErrorStories,
};