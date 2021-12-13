import initStoryshots, { Stories2SnapsConverter } from '@storybook/addon-storyshots';
import path from 'path';
import ReactDOM from 'react-dom';
import { create, act } from 'react-test-renderer';

export const wait = () => new Promise((resolve) => setTimeout(resolve));

ReactDOM.createPortal = (node) => node;

/**
 * This peace of code is something that i have come upon on other projects using snapshot testing.
 * Basically it enable us to have snapshots rendered and compared with previous versions (show diffs in terminal),
 * in each component folders separately (inside "__snapshots__" folder).
 * Default behaviour is that all snapshots are in the same file
 */
initStoryshots({
  asyncJest: true,
  test: async ({ story, context, done }) => {
    const converter = new Stories2SnapsConverter({ snapshotsDirName: '__snapshots__' });
    const snapshotFilename = converter.getSnapshotFileName(context);
    const view = story.render();

    let tree = {};
    act(() => {
      tree = create(view);
    });

    // This is used to await for "tree" to be created
    await act(async () => {
      await wait();
      await wait();
      await wait();
      await wait();
    });

    tree.update(view);
    const storyshot = tree.toJSON();

    if (snapshotFilename) {
      const normalizedPath = path.resolve(process.cwd(), snapshotFilename);
      expect(storyshot).toMatchSpecificSnapshot(normalizedPath);
    }

    tree.unmount();
    done();
  },
});
