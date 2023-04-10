import { createStackNavigator } from "@react-navigation/stack";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
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
import FilterCatalogScreen from "screens/nested_catalog/FilterCatalogScreen";
import ProductsScreen from "screens/nested_catalog/ProductsScreen";
// import vars
import { strings, colors, activeOpacity } from "res/vars";
import { titleHeader, text } from "res/palette";

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
  const leftToRightAnimation = ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [-layouts.screen.width, 0],
            }),
          },
        ],
      },
    };
  };

  const resetBtn = (props) => {
    return (
      <TouchableOpacity
        activeOpacity={activeOpacity}
        onPress={() => { }}
        style={styles.reset}
        {...props}
      >
        <Text style={styles.resetText}>
          Сбросить
        </Text>
      </TouchableOpacity>
    )
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
          headerLeft: null, // левая кнопка
          headerTitleAlign: 'center', // положение центрального элемента
          headerTitleContainerStyle: {
            width: '100%'
          },
          headerTitle: () => <SearchForm />
        }}
      />
      <NestedScreen.Screen
        name={strings.nameNestedCatalog.filterCatalog}
        component={FilterCatalogScreen}
        options={{
          cardStyleInterpolator: leftToRightAnimation,
          title: 'Фильтры',
          headerLeft: (props) => <CloseButton {...props} />,
          headerLeftContainerStyle: {
            padding: 10,
          },
          headerRight: resetBtn,
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
        options={{
          headerLeft: null, // левая кнопка
          headerTitleAlign: 'center', // положение центрального элемента
          headerTitleContainerStyle: {
            width: '100%'
          },
          headerTitle: () => <SearchForm />
        }}
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

const styles = StyleSheet.create({
  reset: {
    padding: 10,
  },
  resetText: {
    ...text,
    color: colors.grey,
  }
});