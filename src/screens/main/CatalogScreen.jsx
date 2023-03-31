// import { useSelector } from 'react-redux';
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
// import components
// import Header from "components/shared/Header";
// import vars
import { strings } from "res/vars";

const NestedScreen = createStackNavigator();

export default CatalogScreen = () => {
  // const { catalog } = useSelector(state => state);

  return (
    <NestedScreen.Navigator
      screenOptions={{
        headerShown: true, // шапка скрина
        // TODO: узнать как сделать перемещение между экранами по горизонтали
        // gestureEnabled: true, 
        // gestureDirection: 'horizontal',
      }}>
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.categorys}
        component={DefaultScreenCatalog}
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
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_1}
        component={SubCategoriesScreen_1}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_2}
        component={SubCategoriesScreen_2}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_3}
        component={SubCategoriesScreen_3}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_4}
        component={SubCategoriesScreen_4}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_5}
        component={SubCategoriesScreen_5}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_6}
        component={SubCategoriesScreen_6}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.subCategorys_7}
        component={SubCategoriesScreen_7}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.products}
        component={ProductsScreen}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.cardProduct}
        component={ProductCardScreen}
      />
    </NestedScreen.Navigator>
  );
};