// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';
// import { fetchLocation } from 'store/location/locationOperations';
// import icons
import MarkIcon from 'components/icons/MarkIcon';

export default LocationBlock = () => {
  // const dispatch = useDispatch();
  // const { location } = useSelector(state => state);
  // const [hasLocationPromissions, setHasLocationPromissions] = useState();

  // useEffect(() => {
  //   (async () => {
  //     const locationPromissions = await Location.requestForegroundPermissionsAsync(); // разрешение на определение местоположения
  //     setHasLocationPromissions(locationPromissions.status === 'granted');
  //   })();
  // }, [])

  // // определяем местоположение
  // useEffect(() => {
  //   if (hasLocationPromissions) {
  //     dispatch(fetchLocation());
  //   } else {
  //     dispatch(fetchLocation("Не определено"));
  //   };
  // }, [hasLocationPromissions]);

  return (
    <View style={styles.headerLocation}>
      <MarkIcon />
      <Text>местоположение</Text>
      {/* <Text>{location.city}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  headerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationIcon: {
    marginRight: 8,
  },
});