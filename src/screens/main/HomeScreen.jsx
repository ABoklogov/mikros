import { createStackNavigator } from "@react-navigation/stack";
import DefaultHomeScreen from "screens/nested_home/DefaultHomeScreen";

import BannersProductsScreen from "screens/nested_home/BannersProductsScreen";
import BannersCardProductScreen from "screens/nested_home/BannersCardProductScreen";

import HolidaysProductsScreen from "screens/nested_home/HolidaysProductsScreen";
import HolidaysCardProductScreen from "screens/nested_home/HolidaysCardProductScreen";

import SaleProductsScreen from "screens/nested_home/SaleProductsScreen";
import SaleCardProductScreen from "screens/nested_home/SaleCardProductScreen";
// import vars
import { strings } from "res/vars";

const NestedScreen = createStackNavigator();

export default HomeScreen = () => {
  return (
    <NestedScreen.Navigator
      screenOptions={{
        "headerShown": false, // шапка скрина
      }}>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultHomeScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeBannersProducts}
        component={BannersProductsScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeBannersCardProduct}
        component={BannersCardProductScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeHolidaysProducts}
        component={HolidaysProductsScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeHolidaysCardProduct}
        component={HolidaysCardProductScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeSaleProducts}
        component={SaleProductsScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedHome.homeSaleCardProduct}
        component={SaleCardProductScreen}
      />
    </NestedScreen.Navigator>
  );
};