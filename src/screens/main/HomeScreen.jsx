import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import DefaultHomeScreen from "screens/nested_home/DefaultHomeScreen";

import BannersProductsScreen from "screens/nested_home/BannersProductsScreen";
import BannersCardProductScreen from "screens/nested_home/BannersCardProductScreen";
import FilterBannersProductsScreen from "screens/nested_home/FilterBannersProductsScreen";

import HolidaysProductsScreen from "screens/nested_home/HolidaysProductsScreen";
import HolidaysCardProductScreen from "screens/nested_home/HolidaysCardProductScreen";
import FilterHolidaysProductsScreen from "screens/nested_home/FilterHolidaysProductsScreen";

import SaleProductsScreen from "screens/nested_home/SaleProductsScreen";
import SaleCardProductScreen from "screens/nested_home/SaleCardProductScreen";
import FilterSaleProductsScreen from "screens/nested_home/FilterSaleProductsScreen";
// imports components
import LocationBlock from 'components/LocationBlock';
// import icons
import Logo from 'components/icons/Logo';
// import vars
import { strings, mHorizontal, activeOpacity, colors } from "res/vars";
import { titleHeader, text } from "res/palette";

const NestedScreen = createStackNavigator();

export default HomeScreen = () => {
  const leftToRightAnimation = ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  };

  const resetBtn = (props) => {
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => { }}
        style={styles.reset}
        {...props}
      >
        <Text style={styles.resetText}>
          Сбросить
        </Text>
      </TouchableOpacity>
    )
  };

  return (
    <NestedScreen.Navigator
      screenOptions={{
        headerLeft: (props) => <BackButton {...props} />, // кнопка назад в шапке
        headerTitleStyle: titleHeader // стиль заголовка в шапке
      }}>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultHomeScreen}
        options={{
          title: null,
          headerLeft: () => <Logo />,
          headerRight: () => <LocationBlock />,
          headerLeftContainerStyle: {
            paddingLeft: mHorizontal.baseBlock,
          },
          headerRightContainerStyle: {
            paddingRight: mHorizontal.baseBlock,
          },
        }}
      />

      <NestedScreen.Screen
        name={strings.nameNestedHome.homeBannersProducts}
        component={BannersProductsScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeBannersCardProduct}
        component={BannersCardProductScreen}
        options={{
          headerShown: false, // шапка скрина
        }}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.filterBanners}
        component={FilterBannersProductsScreen}
        options={{
          cardStyleInterpolator: leftToRightAnimation,
          title: 'Фильтры',
          headerLeft: (props) => <CloseButton {...props} />,
          headerLeftContainerStyle: {
            padding: 10,
          },
          headerRight: resetBtn,
        }}
      />

      <NestedScreen.Screen
        name={strings.nameNestedHome.homeHolidaysProducts}
        component={HolidaysProductsScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeHolidaysCardProduct}
        component={HolidaysCardProductScreen}
        options={{
          headerShown: false, // шапка скрина
        }}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.filterHolidays}
        component={FilterHolidaysProductsScreen}
        options={{
          cardStyleInterpolator: leftToRightAnimation,
          title: 'Фильтры',
          headerLeft: (props) => <CloseButton {...props} />,
          headerLeftContainerStyle: {
            padding: 10,
          },
          headerRight: resetBtn,
        }}
      />

      <NestedScreen.Screen
        name={strings.nameNestedHome.homeSaleProducts}
        component={SaleProductsScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeSaleCardProduct}
        component={SaleCardProductScreen}
        options={{
          headerShown: false, // шапка скрина
        }}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.filterSale}
        component={FilterSaleProductsScreen}
        options={{
          cardStyleInterpolator: leftToRightAnimation,
          title: 'Фильтры',
          headerLeft: (props) => <CloseButton {...props} />,
          headerLeftContainerStyle: {
            padding: 10,
          },
          headerRight: resetBtn,
        }}
      />
    </NestedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  reset: {
    padding: 10,
  },
  resetText: {
    ...text,
    color: colors.grey,
  }
});