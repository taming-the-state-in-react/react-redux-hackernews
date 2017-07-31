import React from 'react';
import './App.css';

import Stories from './Stories';

const App = ({ stories }) =>
  <div className="app">
    <Stories stories={stories} />
  </div>

export default App;