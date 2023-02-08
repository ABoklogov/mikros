// import { useSelector } from 'react-redux';
import { createStackNavigator } from "@react-navigation/stack";
// import screens
import DefaultScreenCatalog from "screens/nested_catalog/DefaultScreenCatalog";
// import SubCategoriesScreen from "screens/nested_catalog/SubCategoriesScreen";
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
        "headerShown": true, // шапка скрина
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