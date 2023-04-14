import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import { fetchLocation } from 'store/location/locationOperations';
import { setLocation } from 'store/location/locationSlice';
// import icons
import MarkIcon from 'components/icons/MarkIcon';
// import vars
import { colors } from 'res/vars';
import { text } from 'res/palette';

export default LocationBlock = () => {
  const dispatch = useDispatch();
  const { location } = useSelector(state => state);

  useEffect(() => {
    (async () => {
      if (Platform.OS === 'ios') {
        dispatch(fetchLocation());
      } else {
        try {
          const granted = await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, {
            title: 'Location Access Required',
            message: 'This App needs to Access your location',
          });

          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            dispatch(fetchLocation());
          } else {
            dispatch(setLocation());
          };
        } catch (error) {
          console.log(error)
        };
      };
    })();
  }, []);

  return (
    <View style={styles.headerLocation}>
      <MarkIcon color={location.city ? colors.blue : colors.grey} />
      <Text style={{
        ...text,
        color: location.city ? colors.blue : colors.grey
      }}
      >
        {location.city ? location.city : 'не определено'}
      </Text>
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