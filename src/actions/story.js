import {
  STORIES_ADD,
  STORIES_FETCH,
} from '../constants/actionTypes';

const doAddStories = stories => ({
  type: STORIES_ADD,
  stories,
});

const doFetchStories = query => ({
  type: STORIES_FETCH,
  query,
});

export {
  doAddStories,
  doFetchStories,
};