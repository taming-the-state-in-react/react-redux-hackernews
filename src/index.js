import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store';
import { STORY_ARCHIVE } from './constants/actionTypes';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <App
    stories={store.getState().storyState}
    onArchive={id => store.dispatch({ type: STORY_ARCHIVE, id })}
  />,
  document.getElementById('root')
);
registerServiceWorker();
