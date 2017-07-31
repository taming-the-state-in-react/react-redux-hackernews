import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import { getReadableStories } from './selectors/story';
import { STORY_ARCHIVE } from './constants/actionTypes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

function render() {
  ReactDOM.render(
    <App
      stories={getReadableStories(store.getState())}
      onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
    />,
    document.getElementById('root')
  );
}

store.subscribe(render);
render();

registerServiceWorker();
