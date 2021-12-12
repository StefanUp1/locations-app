import { useCallback, useReducer } from "react";
import { Location } from "types/locations";

interface LocationWithViewCount extends Location {
  viewCount: number;
}

interface State {
  locationsWithViewCount: LocationWithViewCount[];
  activeLocation?: LocationWithViewCount;
}

enum ACTIONS {
  SET_ACTIVE_LOCATION = "SET_ACTIVE_LOCATION",
  UPDATE_LOCATION_VIEW_COUNT = "UPDATE_LOCATION_VIEW_COUNT",
}

type Actions =
  | {
      type: ACTIONS.UPDATE_LOCATION_VIEW_COUNT;
      payload: { id: string };
    }
  | {
      type: ACTIONS.SET_ACTIVE_LOCATION;
      payload: { id: string };
    };

const init = (locations: Location[]): State => {
  const locationsWithViewCount = locations.map((location) => ({
    ...location,
    viewCount: 0,
  }));

  return {
    locationsWithViewCount,
    activeLocation: undefined,
  };
};

const reducer = (state: State, action: Actions): State => {
  switch (action.type) {
    case ACTIONS.UPDATE_LOCATION_VIEW_COUNT: {
      let locationsWithUpdatedCount = [...state.locationsWithViewCount];

      locationsWithUpdatedCount = locationsWithUpdatedCount.map((location) => {
        if (location.id === action.payload.id)
          return { ...location, viewCount: location.viewCount + 1 };
        return location;
      });

      return {
        ...state,
        locationsWithViewCount: [...locationsWithUpdatedCount],
      };
    }
    case ACTIONS.SET_ACTIVE_LOCATION: {
      const selectedLocation = state.locationsWithViewCount.find(
        (location) => location.id === action.payload.id
      );

      if (!selectedLocation) return state;

      return {
        ...state,
        activeLocation: { ...selectedLocation },
      };
    }
    default:
      return state;
  }
};

interface UseLocationsData {
  updateLocationViewCount: (id: string) => void;
  setActiveLocation: (id: string) => void;
  locationsWithViewCount: LocationWithViewCount[];
  activeLocation?: LocationWithViewCount;
}

const useNameFields = (locations: Location[]): UseLocationsData => {
  const [state, dispatch] = useReducer(reducer, locations, init);

  const updateLocationViewCount = useCallback((id: string) => {
    dispatch({ type: ACTIONS.UPDATE_LOCATION_VIEW_COUNT, payload: { id } });
  }, []);

  const setActiveLocation = useCallback((id: string) => {
    dispatch({ type: ACTIONS.SET_ACTIVE_LOCATION, payload: { id } });
  }, []);

  return {
    updateLocationViewCount,
    setActiveLocation,
    locationsWithViewCount: state.locationsWithViewCount,
    activeLocation: state.activeLocation,
  };
};

export default useNameFields;
