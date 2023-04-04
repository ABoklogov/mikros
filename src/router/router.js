import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { headerLeft } from '@react-navigation/elements';
const MainTabs = createBottomTabNavigator();
const NotTabsStack = createStackNavigator();
import { Pressable } from 'react-native';
// import screens
import HomeScreen from 'screens/main/HomeScreen';
import CatalogScreen from 'screens/main/CatalogScreen';
import BasketScreen from 'screens/main/BasketScreen';
import FavoriteScreen from 'screens/main/FavoriteScreen';
import ProfileScreen from 'screens/main/ProfileScreen';
import LogInScreen from "screens/nested_profile/LogInScreen";
import RegistrationScreen from "screens/nested_profile/RegistrationScreen";
import BarcodeScanScreen from "screens/BarcodeScanScreen";
// import icons
import HomeIcon from 'components/icons/tabs_icons/HomeIcon';
import CatalogIcon from 'components/icons/tabs_icons/CatalogIcon';
import BasketIcon from 'components/icons/tabs_icons/BasketIcon';
import ProfileIcon from 'components/icons/tabs_icons/ProfileIcon';
import FavoriteIcon from 'components/icons/tabs_icons/FavoriteIcon';
// import components
import BackButton from 'components/BackButton';
// import vars
import { colors, fonts, strings } from 'res/vars';
import { rippleTabsBottom, titleHeader } from 'res/palette';

export default useRoute = () => {
  // навигация с нижними табами
  const TabsStack = () => {
    return (
      <MainTabs.Navigator
        screenOptions={{
          tabBarButton: (props) => <Pressable android_ripple={rippleTabsBottom} {...props} />,
          safeAreaInsets: { // чтобы не прыгала нижняя навигация при первой загрузке
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          },
          headerShown: false, // шапка скрина
          // стили нижней навигации
          tabBarStyle: { height: 55 },
          // стили одной кнопки нижней навигации
          tabBarItemStyle: {
            paddingBottom: 5,
            paddingTop: 5,
          },
          // стили лейблов нижней навигации
          tabBarLabelStyle: [
            {
              fontFamily: fonts.medium,
            }
          ],
          tabBarActiveTintColor: colors.blue, // цвет активной иконки
          tabBarInactiveTintColor: colors.darkGrey, // цвет не активной иконки
          tabBarHideOnKeyboard: true, // скрывает панель вкладок при открытии клавиатуры
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
        <MainTabs.Screen
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
    <NotTabsStack.Navigator
      screenOptions={{
        headerLeft: (props) => <BackButton {...props} />, // кнопка назад в шапке
        headerTitleStyle: titleHeader // стиль заголовка в шапке
      }}
    >
      <NotTabsStack.Screen
        name="Home"
        component={TabsStack}
        options={{
          headerShown: false,
        }}
      />
      <NotTabsStack.Screen
        name={strings.nameNotTabs.logIn}
        component={LogInScreen}
      />
      <NotTabsStack.Screen
        name={strings.nameNotTabs.registration}
        component={RegistrationScreen}
      />
      <NotTabsStack.Screen
        name={strings.nameNotTabs.barcodeScan}
        component={BarcodeScanScreen}
        options={{
          headerShown: false,
        }}
      />
    </NotTabsStack.Navigator>
  )
}; 