import React, { Component } from 'react';
import './App.css';

import Stories from './Stories';
import SearchStories from './SearchStories';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="interactions">
          <SearchStories />
        </div>
        <Stories />
      </div>
    );
  }
}

export default App;
