import initStoryshots, {
  Stories2SnapsConverter,
} from "@storybook/addon-storyshots";
import path from "path";
import ReactDOM from "react-dom";
import { ReactPortal } from "react";

ReactDOM.createPortal = (node) => node as ReactPortal;

initStoryshots({
  test: async ({ story, context }) => {
    const converter = new Stories2SnapsConverter({
      snapshotsDirName: "__snapshots__",
    });
    const snapshotFilename = converter.getSnapshotFileName(context);
    const view = story.render();

    /**
     * This creates "__snapshots__" inside individual components story folder,
     * instead of putting them together inside a shared "__snapshots__" folder and single file
     */
    if (snapshotFilename) {
      const normalizedPath = path.resolve(process.cwd(), snapshotFilename);
      expect(view).toMatchSpecificSnapshot(normalizedPath);
    }
  },
});
