import {
  StyleSheet,
  View,
  ScrollView,
  Text,
  TouchableOpacity
} from 'react-native';
// import vars
import { colors, radius } from 'res/vars';
import { text } from 'res/palette';

export default CityList = ({ listCity, selectCity }) => {
  return (
    listCity.length > 0 &&
    <View style={styles.cityList}>
      <ScrollView>
        {
          listCity.map(item => (
            <TouchableOpacity
              key={item.value}
              activeOpacity={0.8}
              onPress={() => selectCity(item.data.city)}
            >
              <Text style={styles.cityItem}>
                {item.data.city}
              </Text>
            </TouchableOpacity>
          ))
        }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cityList: {
    position: 'absolute',
    zIndex: 99,
    top: '100%',
    backgroundColor: colors.white,
    width: '100%',
    maxHeight: 170,
    padding: 5,
    borderWidth: 2,
    borderColor: colors.blue,
    borderRadius: radius.input,
    // тени:
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  cityItem: {
    ...text,
    paddingTop: 8,
    paddingBottom: 8,
  },
});