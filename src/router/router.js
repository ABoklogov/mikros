import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { getHeaderTitle } from '@react-navigation/elements';
const MainTabs = createBottomTabNavigator();
const NotTabsStack = createStackNavigator();

// import screens
import HomeScreen from 'screens/main/HomeScreen';
import CatalogScreen from 'screens/main/CatalogScreen';
import BasketScreen from 'screens/main/BasketScreen';
// import FavoriteScreen from 'screens/main/FavoriteScreen';
import BarcodeScanScreen from 'screens/main/BarcodeScanScreen';
import ProfileScreen from 'screens/main/ProfileScreen';
import LogInScreen from "screens/nested_profile/LogInScreen";
import RegistrationScreen from "screens/nested_profile/RegistrationScreen";
// import icons
import HomeIcon from 'components/icons/tabs_icons/HomeIcon';
import CatalogIcon from 'components/icons/tabs_icons/CatalogIcon';
import BasketIcon from 'components/icons/tabs_icons/BasketIcon';
import ProfileIcon from 'components/icons/tabs_icons/ProfileIcon';
import BarcodeScanIcon from 'components/icons/tabs_icons/BarcodeScanIcon';
// import vars
import { colors, fonts, strings } from 'res/vars';

export default useRoute = () => {
  // навигация с нижними табами
  const TabsStack = () => {
    return (
      <MainTabs.Navigator
        initialRouteName='Главная'
        screenOptions={{
          "headerShown": false, // шапка скрина
          // стили нижней навигации
          "tabBarStyle": [
            {
              "height": 55,
            },
            null
          ],
          // стили одной кнопки нижней навигации
          tabBarItemStyle: [{
            "paddingBottom": 5,
            "paddingTop": 5,
          }],
          // стили лейблов нижней навигации
          "tabBarLabelStyle": [
            {
              "fontFamily": fonts.medium,
            }
          ],
          "tabBarActiveTintColor": colors.blue, // цвет активной иконки
          "tabBarInactiveTintColor": colors.darkGrey, // цвет не активной иконки
          "tabBarHideOnKeyboard": true, // скрывает панель вкладок при открытии клавиатуры
        }}
      >
        <MainTabs.Screen
          name={strings.nameMainScreens.home}
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused, color }) =>
              <HomeIcon
                active={focused}
                color={color}
                size={focused ? 32 : 28}
              />
          }}
        />
        <MainTabs.Screen
          name={strings.nameMainScreens.catalog}
          component={CatalogScreen}
          options={{
            tabBarIcon: ({ focused, color }) =>
              <CatalogIcon
                color={color}
                size={focused ? 35 : 30}
              />
          }}
        />
        {/* <MainTabs.Screen
          name={strings.nameMainScreens.favorite}
          component={FavoriteScreen}
          options={{
            tabBarIcon: ({ focused, color }) =>
              <FavoriteIcon
                color={color}
                isFull={false}
                size={focused ? 32 : 28}
              />
          }}
        /> */}
        <MainTabs.Screen
          name={strings.nameMainScreens.barcodeScan}
          component={BarcodeScanScreen}
          options={{
            tabBarLabel: () => null, // удаляет лейбл
            tabBarItemStyle: [{
              borderRadius: 50,
              paddingBottom: 5,
              paddingTop: 5,
              backgroundColor: colors.lightGrey,
            }],
            tabBarIcon: ({ color }) =>
              <BarcodeScanIcon color={color} />
          }}
        />

        <MainTabs.Screen
          name={strings.nameMainScreens.basket}
          component={BasketScreen}
          options={{
            tabBarBadgeStyle: [{
              backgroundColor: colors.green,
              color: colors.darkGrey,
              top: -5,
              left: 8,
            }],
            tabBarIcon: ({ focused, color }) =>
              <BasketIcon
                color={color}
                isFull={false}
                size={focused ? 35 : 30}
              />
          }}
        />
        <MainTabs.Screen
          name={strings.nameMainScreens.profile}
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ focused, color }) =>
              <ProfileIcon
                color={color}
                size={focused ? 35 : 30}
              />
          }}
        />
      </MainTabs.Navigator>
    )
  };

  return (
    // навигация без нижних табов
    <NotTabsStack.Navigator>
      <NotTabsStack.Screen
        name="Home"
        component={TabsStack}
        options={{
          headerShown: false,
        }}
      />
      <NotTabsStack.Screen
        options={{
          headerShown: false,
        }}
        name={strings.nameNestedProfile.logIn}
        component={LogInScreen}
      />
      <NotTabsStack.Screen
        options={{
          headerShown: false,
        }}
        name={strings.nameNestedProfile.registration}
        component={RegistrationScreen}
      />
    </NotTabsStack.Navigator>
  )
}; 