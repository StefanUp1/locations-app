import { rest } from 'msw';
import { GET_ALL_LOCATIONS_URL } from 'services/locations';
import locationsMockData from './data/locations';

/**
 * Here we mock our api requests.
 * Mocked apis are going to be used for jest tests, and storybook.
 * Link: https://mswjs.io/
 */
export const getLocationsHandler = rest.get(
  GET_ALL_LOCATIONS_URL,
  (_, res, ctx) => res(ctx.json([...locationsMockData])),
);

const handlers = [getLocationsHandler];
export default handlers;
