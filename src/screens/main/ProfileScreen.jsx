import { createStackNavigator } from "@react-navigation/stack";
// import screens
import DefaultScreenProfile from "screens/nested_profile/DefaultScreenProfile";
import ProfileInfoScreen from 'screens/nested_profile/ProfileInfoScreen';
import OrderHistoryScreen from 'screens/nested_profile/OrderHistoryScreen';
import PaymentScreen from 'screens/nested_profile/PaymentScreen';
import SubscriptionScreen from 'screens/nested_profile/SubscriptionScreen';
// import FavoriteScreen from 'screens/nested_profile/FavoriteScreen';
// import vars
import { strings } from "res/vars";

const NestedScreen = createStackNavigator();

export default ProfileScreen = () => {
  return (
    <NestedScreen.Navigator
      screenOptions={{
        "headerShown": true, // шапка скрина
      }}>
      <NestedScreen.Screen
        name={strings.nameNestedProfile.home}
        component={DefaultScreenProfile}
      />
      <NestedScreen.Screen
        name={strings.nameNestedProfile.profileInfo}
        component={ProfileInfoScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedProfile.orderHistory}
        component={OrderHistoryScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedProfile.payment}
        component={PaymentScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedProfile.subscription}
        component={SubscriptionScreen}
      />
      {/* <NestedScreen.Screen
        name={strings.nameNestedProfile.favorite}
        component={FavoriteScreen}
      /> */}
    </NestedScreen.Navigator>
  );
};