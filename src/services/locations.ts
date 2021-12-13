import { Location } from 'types/locations';
import api from './api';

export const GET_ALL_LOCATIONS_URL = 'https://6033c4d8843b15001793194e.mockapi.io/api/locations';

export const getLocations = async () => api.get<Location[]>(GET_ALL_LOCATIONS_URL);
