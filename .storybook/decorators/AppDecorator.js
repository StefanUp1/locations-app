import React from "react";

/** Purpose of this decorator is to enable usage of portals in storybook */
export default (Story) => (
  <>
    <div id="root">
      <Story />
    </div>
    <div id="modal-root"></div>
  </>
);
