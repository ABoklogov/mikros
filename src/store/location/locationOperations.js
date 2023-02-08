import {
  setLocation,
  loadingSetLocation,
  errorSetLocation
} from './locationSlice';
import * as Location from 'expo-location';

export const fetchLocation = (string) => async (dispatch, getState) => {
  try {
    if (string) {
      dispatch(setLocation(string));
    } else {
      dispatch(loadingSetLocation(true));

      // находим координаты
      let { coords } = await Location.getCurrentPositionAsync();
      const { latitude, longitude } = coords;

      if (coords) {
        // находим адрес
        let response = await Location.reverseGeocodeAsync({
          latitude,
          longitude
        });

        if (response) {
          dispatch(loadingSetLocation(false));
          dispatch(errorSetLocation(''));
        };

        for (let item of response) {
          if (item.city) {
            dispatch(setLocation(item.city));
          } else {
            dispatch(setLocation('Не определено'));
          };
        };
      };
    };
  } catch (error) {
    dispatch(errorSetLocation(error.message));
    dispatch(loadingSetLocation(false));
    console.log(error);
    console.log(error.message);
  };
};