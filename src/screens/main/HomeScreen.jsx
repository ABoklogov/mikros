import { createStackNavigator } from "@react-navigation/stack";
import DefaultHomeScreen from "screens/nested_home/DefaultHomeScreen";

import BannersProductsScreen from "screens/nested_home/BannersProductsScreen";
import BannersCardProductScreen from "screens/nested_home/BannersCardProductScreen";

import HolidaysProductsScreen from "screens/nested_home/HolidaysProductsScreen";
import HolidaysCardProductScreen from "screens/nested_home/HolidaysCardProductScreen";

import SaleProductsScreen from "screens/nested_home/SaleProductsScreen";
import SaleCardProductScreen from "screens/nested_home/SaleCardProductScreen";
// imports components
import LocationBlock from 'components/LocationBlock'; 
// import icons
import Logo from 'components/icons/Logo';
// import vars
import { strings, mHorizontal } from "res/vars";
import { titleHeader } from "res/palette";

const NestedScreen = createStackNavigator();

export default HomeScreen = () => {
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
    </NestedScreen.Navigator>
  );
};