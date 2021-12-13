import { renderHook, act } from "@testing-library/react-hooks";
import useLocationsData from "./useLocationsData";
import locationsMockData from "mocks/data/locations";

const LOCATION_ID_1 = "1";
const LOCATION_ID_2 = "2";

const findLocationById = (id: string) =>
  locationsMockData.find((location) => location.id === id);

const locationWithId1 = findLocationById(LOCATION_ID_1);
const locationWithId2 = findLocationById(LOCATION_ID_2);

test("'viewCount' value is added to every location data", () => {
  const { result } = renderHook(() => useLocationsData(locationsMockData));

  expect(result.current.locationsWithViewCount).toMatchObject(
    locationsMockData.map((location) => ({ ...location, viewCount: 0 }))
  );
});

test("Active location is properly selected", () => {
  const { result } = renderHook(() => useLocationsData(locationsMockData));

  // Select location with id = LOCATION_ID_1
  act(() => {
    result.current.setActiveLocation(LOCATION_ID_1);
  });
  expect(result.current.activeLocation).toMatchObject({
    ...locationWithId1!,
    viewCount: 0,
  });

  // Select location with id = LOCATION_ID_2
  act(() => {
    result.current.setActiveLocation(LOCATION_ID_2);
  });
  expect(result.current.activeLocation).toMatchObject({
    ...locationWithId2!,
    viewCount: 0,
  });
});

test("'viewCount' value is increased on action", () => {
  const { result } = renderHook(() => useLocationsData(locationsMockData));

  act(() => {
    result.current.updateLocationViewCount(LOCATION_ID_1);
    result.current.setActiveLocation(LOCATION_ID_1);
    result.current.updateLocationViewCount(LOCATION_ID_1);
    result.current.setActiveLocation(LOCATION_ID_1);
  });
  expect(result.current.activeLocation).toMatchObject({
    ...locationWithId1!,
    viewCount: 2,
  });
});
