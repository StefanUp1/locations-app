import useFetchData from "./useFetchData";
import { getLocations } from "services/locations";
import { Location } from "types/locations";

const useGetLocations = () => {
  return useFetchData<Location[]>(getLocations);
};

export default useGetLocations;
