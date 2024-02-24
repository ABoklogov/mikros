import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from 'react-native';
import { fetchCurrentUser } from 'store/auth/authOperations';
import { fetchBasket } from 'store/basket/basketOperations';
import { fetchBanners } from 'store/banners/bannersOperations';
import { fetchHolidays } from 'store/holidays/holidaysOperations';
import { fetchSaleProducts } from 'store/sale/saleOperations';
// import components
import SearchForm from 'components/search_form/SearchForm';
import BannersSwiper from 'components/BannersSwiper';
import SaleProductsBlock from 'components/SaleProductsBlock';
import HolidaysBlock from 'components/HolidaysBlock';
// import vars
import { strings, colors } from 'res/vars';

const getAllKeys = async () => {
  let keys = []
  try {
    keys = await AsyncStorage.getAllKeys()
  } catch (error) {
    console.log(error.message);
  }
  console.log('storage', keys);
};

export default DefaultHomeScreen = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const banners = useSelector(state => state.homeBanners.banners.items);
  const holidays = useSelector(state => state.homeHolidays.holidays.items);
  const saleProducts = useSelector(state => state.sale.saleProducts.items);
  const isLoadingSale = useSelector(state => state.sale.saleProducts.isLoading);

  const dispatch = useDispatch();
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);

  // загружаем корзину
  useEffect(() => {
    dispatch(fetchBasket());
  }, [isLoggedIn]);

  useEffect(() => {
    getAllKeys() // показать локальное хранилище
    // // получаем текущего юзера
    if (!isLoggedIn) {
      dispatch(fetchCurrentUser());
    };
    // // получаем баннеры
    if (banners.length === 0) {
      dispatch(fetchBanners());
    };
    // получаем праздники
    if (holidays.length === 0) {
      dispatch(fetchHolidays());
    };
    // получаем акционные товары
    if (saleProducts.length === 0) {
      dispatch(fetchSaleProducts(strings.titles.titleSaleProducts));
    };
    // --- для клавиатуры start ---
    // слушатель закрытия клавиатуры (при закрытии клавиатуры возвращаемся в первоначальное состояние):
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
    <ScrollView style={styles.wrapper}>
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={removesKeyboard}>
          <View style={styles.formSearch}>
            <SearchForm opensKeyboard={opensKeyboard} />
            {/* здесь будет история поиска */}
          </View>
        </TouchableWithoutFeedback>

        {/* баннеры */}
        <View style={styles.positionBlock}>
          <BannersSwiper />
        </View>

        <TouchableWithoutFeedback onPress={removesKeyboard}>
          <View>
            {/* праздники */}
            <View style={styles.positionBlock}>
              <HolidaysBlock />
            </View>

            {/* акционные товары */}
            <View style={styles.positionBlock}>
              <SaleProductsBlock
                title={strings.titles.titleSaleProducts}
                products={saleProducts.slice(0, 20)}
                isLoading={isLoadingSale}
                screenName={strings.nameNestedHome.homeSaleProducts}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 5,
    marginHorizontal: 15,
  },
  formSearch: {
    marginHorizontal: 15,
    paddingBottom: 10,
    paddingTop: 10,
  },
  positionBlock: {
    marginBottom: 20
  }
});