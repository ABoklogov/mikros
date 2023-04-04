import { createStackNavigator } from "@react-navigation/stack";
// import screens
import DefaultScreenFavorites from "screens/nested_favorites/DefaultScreenFavorites";
// import vars
import { strings } from "res/vars";
import { titleHeader } from "res/palette";

const NestedScreen = createStackNavigator();

export default FavoriteScreen = () => {
  return (
    <NestedScreen.Navigator
      screenOptions={{
        headerLeft: (props) => <BackButton {...props} />, // кнопка назад в шапке
        headerShown: true, // шапка скрина
        headerTitleStyle: titleHeader // стиль заголовка в шапке
      }}>
      <NestedScreen.Screen
        name={strings.nameNestedFavorites.home}
        component={DefaultScreenFavorites}
        options={{
          headerLeft: null,
        }}
      />
    </NestedScreen.Navigator>
  );
};