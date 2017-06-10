import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getReadableStories } from '../selectors/story';
import './Stories.css';

import Story from './Story';

const COLUMNS = {
  title: {
    label: 'Title',
    width: '40%',
  },
  author: {
    label: 'Author',
    width: '30%',
  },
  comments: {
    label: 'Comments',
    width: '10%',
  },
  points: {
    label: 'Points',
    width: '10%',
  },
  archive: {
    width: '10%',
  },
};

class Stories extends Component {
  render() {
    const { stories } = this.props;

    return (
      <div className="stories">
        <StoriesHeader columns={COLUMNS} />

        {(stories || []).map(story =>
          <Story
            key={story.objectID}
            story={story}
            columns={COLUMNS}
          />
        )}
      </div>
    );
  }
}

const StoriesHeader = ({ columns }) =>
  <div className="stories-header">
    {Object.keys(columns).map(key =>
      <span
        key={key}
        style={{ width: columns[key].width }}
      >
        {columns[key].label}
      </span>
    )}
  </div>

const mapStateToProps = state => ({
  stories: getReadableStories(state),
});

export default connect(
  mapStateToProps
)(Stories);