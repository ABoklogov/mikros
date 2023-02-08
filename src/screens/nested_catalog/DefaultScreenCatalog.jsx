// import { useNavigation } from "@react-navigation/native";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchCategorys } from 'store/catalog/catalogOperations';
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
} from 'react-native';
// import components
import SearchForm from 'components/search_form/SearchForm';
import CategorysList from 'components/categorys/CategorysList';
// import vars
import { fonts, strings } from 'res/vars';
import { text } from 'res/palette';

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
  const opensKeyboard = () => setIsShowKeyboard(true);
  // --- для клавиатуры end ---

  return (
    <TouchableWithoutFeedback onPress={removesKeyboard}>
      <View style={styles.container}>
        <View style={styles.formSearch}>
          <SearchForm opensKeyboard={opensKeyboard} />
          {/* здесь будет история поиска */}
        </View>

        {
          catalog.categorys.isLoading ? (
            <View style={styles.loader}>
              <Text style={{ ...text }}>Загрузка</Text>
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
    backgroundColor: '#fff',
  },
  formSearch: {
    marginHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
  loader: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});