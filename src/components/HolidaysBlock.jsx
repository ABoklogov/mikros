import { useSelector, useDispatch } from 'react-redux';
import { useNavigation } from "@react-navigation/native";
import { fetchHolidaysProducts } from 'store/holidays/holidaysOperations';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';
// import components
import HolidaysPreloader from 'components/preloaders/HolidaysPreloader';
import HolidayImage from 'components/HolidayImage';
// import vars
import { strings, activeOpacity } from 'res/vars';
import { miniText } from 'res/palette';

const WIDTH = Dimensions.get('window').width;
const widthItem = WIDTH / 4.5;

export default HolidaysBlock = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { homeHolidays } = useSelector(state => state);

  const goToSectionHolidays = (id, name) => {
    dispatch(fetchHolidaysProducts(id, name));
    navigation.navigate(strings.nameNestedHome.homeHolidaysProducts, { name })
  };

  return (
    <View style={styles.container}>
      {
        (homeHolidays.holidays.items.length === 0 || homeHolidays.holidays.isLoading) ? (
          <HolidaysPreloader
            width={widthItem}
            height={widthItem}
          />
        ) : (
          <SafeAreaView>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal
            >
              {
                homeHolidays.holidays.items?.map(item => (
                  <TouchableOpacity
                    key={item.id}
                    activeOpacity={activeOpacity}
                    onPress={() => goToSectionHolidays(item.id, item.name)}
                  >
                    <View style={{ ...styles.item, width: widthItem }}>
                      <HolidayImage
                        picture={item.picture}
                        id={item.id}
                        width={widthItem}
                      />

                      <Text style={styles.text}>{item.name}</Text>
                    </View>
                  </TouchableOpacity>
                ))
              }
            </ScrollView>
          </SafeAreaView>
        )
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 90,
  },
  item: {
    alignItems: 'center',
  },
  text: {
    ...miniText,
    textAlign: 'center',
  }
});