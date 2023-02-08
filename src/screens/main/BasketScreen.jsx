// import { useEffect } from 'react';
import { createStackNavigator } from "@react-navigation/stack";
// import { useNavigation } from '@react-navigation/native';
// import { useSelector } from 'react-redux';
// import screens
import DefaultBasketScreen from "screens/nested_basket/DefaultBasketScreen";
import OrderingScreen from "screens/nested_basket/OrderingScreen";
import OrderProcessing from "screens/nested_basket/OrderProcessing";
// import vars
import { strings } from "res/vars";

const NestedScreen = createStackNavigator();

export default BasketScreen = () => {
  return (
    <NestedScreen.Navigator
      screenOptions={{
        "headerShown": true, // шапка скрина
      }}>
      <NestedScreen.Screen
        name={strings.nameNestedBasket.home}
        component={DefaultBasketScreen}
      />
      {/* оформление заказа */}
      <NestedScreen.Screen
        name={strings.nameNestedBasket.ordering}
        component={OrderingScreen}
      />
      {/* обработка заказа */}
      <NestedScreen.Screen
        name={strings.nameNestedBasket.processing}
        component={OrderProcessing}
      />
    </NestedScreen.Navigator>
  );
};