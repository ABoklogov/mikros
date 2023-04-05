import { createStackNavigator } from "@react-navigation/stack";
// import screens
import DefaultScreenCatalog from "screens/nested_catalog/DefaultScreenCatalog";
import SubCategoriesScreen_1 from "screens/nested_catalog/SubCategoriesScreen_1";
import SubCategoriesScreen_2 from "screens/nested_catalog/SubCategoriesScreen_2";
import SubCategoriesScreen_3 from "screens/nested_catalog/SubCategoriesScreen_3";
import SubCategoriesScreen_4 from "screens/nested_catalog/SubCategoriesScreen_4";
import SubCategoriesScreen_5 from "screens/nested_catalog/SubCategoriesScreen_5";
import SubCategoriesScreen_6 from "screens/nested_catalog/SubCategoriesScreen_6";
import SubCategoriesScreen_7 from "screens/nested_catalog/SubCategoriesScreen_7";
import ProductCardScreen from "screens/nested_catalog/ProductCardScreen";
import ProductsScreen from "screens/nested_catalog/ProductsScreen";
// import vars
import { strings } from "res/vars";
import { titleHeader } from "res/palette";

const NestedScreen = createStackNavigator();

export default CatalogScreen = () => {
  // анимация перехода
  const rightToLeftAnimation = {
    cardStyleInterpolator: ({ current, layouts }) => {
      return {
        cardStyle: {
          transform: [
            {
              translateX: current.progress.interpolate({
                inputRange: [0, 1],
                outputRange: [layouts.screen.width, 0],
              }),
            },
          ],
        },
      };
    },
  };

  return (
    <NestedScreen.Navigator
      screenOptions={{
        headerLeft: (props) => <BackButton {...props} />, // кнопка назад в шапке
        headerShown: true, // шапка скрина
        headerTitleStyle: titleHeader, // стиль заголовка в шапке
      }}>
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.categorys}
        component={DefaultScreenCatalog}
        options={{
          headerShown: false,
        }}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_1}
        component={SubCategoriesScreen_1}
        options={rightToLeftAnimation}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_2}
        component={SubCategoriesScreen_2}
        options={rightToLeftAnimation}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_3}
        component={SubCategoriesScreen_3}
        options={rightToLeftAnimation}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_4}
        component={SubCategoriesScreen_4}
        options={rightToLeftAnimation}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_5}
        component={SubCategoriesScreen_5}
        options={rightToLeftAnimation}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_6}
        component={SubCategoriesScreen_6}
        options={rightToLeftAnimation}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_7}
        component={SubCategoriesScreen_7}
        options={rightToLeftAnimation}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.products}
        component={ProductsScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.cardProduct}
        component={ProductCardScreen}
        options={{
          headerShown: false,
        }}
      />
      {/* <NestedScreen.Screen
      name={strings.nameNestedCatalog.subCategorys}
      component={SubCategoriesScreen}
      options={{
        header: ({ route }) => {
          return (
            <Header
              title={route.params.title ? route.params.title : catalog.categorys.category}
              parentTitle={catalog.categorys.parentCategory}
              paramslinkBack={{
                title: catalog.categorys.parentCategory,
                categorys: catalog.categorys.parentCategorys
              }}
              linkBack={strings.nameNestedCatalog.subCategorys}
            />
          )
        },
      }}
    /> */}
    </NestedScreen.Navigator>
  );
};