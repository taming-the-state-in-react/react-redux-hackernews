import { createStore } from 'redux';
import storyReducer from '../reducers/story';

const store = createStore(
  storyReducer
);

export default store;