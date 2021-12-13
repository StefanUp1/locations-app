import { getLocations } from 'services/locations';
import { Location } from 'types/locations';
import useFetchData from './useFetchData';

const useGetLocations = () => useFetchData<Location[]>(getLocations);

export default useGetLocations;
