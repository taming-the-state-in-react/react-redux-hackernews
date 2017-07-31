const isNotArchived = archivedIds => story =>
  archivedIds.indexOf(story.objectID) === -1;

const getReadableStories = ({ storyState, archiveState }) =>
  storyState.stories.filter(isNotArchived(archiveState));

const getFetchError = ({ storyState }) =>
  storyState.error;

export {
  getReadableStories,
  getFetchError,
};