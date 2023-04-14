import {
  setLocation,
  loadingSetLocation,
  errorSetLocation
} from './locationSlice';
import Geolocation from '@react-native-community/geolocation';

export const fetchLocation = () => async (dispatch, getState) => {
  try {
    dispatch(loadingSetLocation(true));
    Geolocation.getCurrentPosition(
      ({ coords }) => {
        dispatch(loadingSetLocation(false));
        dispatch(errorSetLocation(''));

        const currentLongitude = JSON.stringify(coords.longitude);
        const currentLatitude = JSON.stringify(coords.latitude);
        // TODO: получили координаты, далее планируется отправить их на сервер, чтобы получить город (через API гугла или яндекса)
        console.log("🚀 currentLongitude:", currentLongitude)
        console.log("🚀 currentLatitude:", currentLatitude)

      },
      (error) => {
        dispatch(loadingSetLocation(false));
        dispatch(errorSetLocation(error.message));
      }
    )
  } catch (error) {
    dispatch(errorSetLocation(error.message));
    dispatch(loadingSetLocation(false));
    console.log(error.message);
  };
};