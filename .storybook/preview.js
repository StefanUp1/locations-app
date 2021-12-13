import "../src/index.scss";
import AppDecorator from "./decorators/AppDecorator";
import { initialize, mswDecorator } from "msw-storybook-addon";
import handlers from "../src/mocks/handlers";

export const decorators = [AppDecorator, mswDecorator];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  msw: { handlers: [handlers] },
};

// Initialize MSW
initialize();
