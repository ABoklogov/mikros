// import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCategorys } from 'store/catalog/catalogOperations';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  ActivityIndicator
} from 'react-native';
// import components
// import SearchForm from 'components/search_form/SearchForm';
import CategorysList from 'components/categorys/CategorysList';
// import vars
import { colors, mHorizontal } from 'res/vars';
// import { text } from 'res/palette';

export default DefaultScreenCatalog = () => {
  const { catalog } = useSelector(state => state);
  const dispatch = useDispatch();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  // const navigation = useNavigation();

  // --- для клавиатуры start ---
  // слушатель закрытия клавиатуры (при закрытии клавиатуры возвращаемся в первоначальное состояние):
  useEffect(() => {
    // получаем категории товаров
    if (catalog.categorys.items.length === 0) {
      dispatch(fetchCategorys());
    };

    const keyboardDidHide = Keyboard.addListener('keyboardDidHide', () => setIsShowKeyboard(false));
    return () => keyboardDidHide.remove();
  }, []);

  const removesKeyboard = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };
  // const opensKeyboard = () => setIsShowKeyboard(true);
  // --- для клавиатуры end ---

  return (
    <TouchableWithoutFeedback onPress={removesKeyboard}>
      <View style={styles.container}>

        {
          catalog.categorys.isLoading ? (
            <View style={styles.loader}>
              <ActivityIndicator
                size="large"
                color={colors.blue}
              />
            </View>
          ) : (
            <CategorysList categorys={catalog.categorys.items} />
          )
        }
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: colors.white,
  },
  loader: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});