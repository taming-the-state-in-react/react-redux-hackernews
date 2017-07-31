import { STORY_ARCHIVE } from '../constants/actionTypes';

const doArchiveStory = id => ({
  type: STORY_ARCHIVE,
  id,
});

export {
  doArchiveStory,
};