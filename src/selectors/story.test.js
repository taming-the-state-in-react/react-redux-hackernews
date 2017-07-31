import { getReadableStories } from './story';

describe('story selector', () => {
  it('retrieves readable stories', () => {
    const storyState = {
      error: null,
      stories: [
        { objectID: '1', title: 'foo' },
        { objectID: '2', title: 'bar' },
      ],
    };
    const archiveState = ['1'];
    const state = { storyState, archiveState }

    const expectedReadableStories = [{ objectID: '2', title: 'bar' }];
    const readableStories = getReadableStories(state);

    expect(readableStories).toEqual(expectedReadableStories);;
  });
});