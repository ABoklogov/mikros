import { useNavigation } from "@react-navigation/native";
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { addToBasket } from 'store/basket/basketOperations';
// import components
import Card from 'components/shared/Card';
import PtoductItemImg from 'components/products/PtoductItemImg';
import VendorCode from 'components/shared/VendorCode';
import FavoriteButton from 'components/shared/FavoriteButton';
import BasketButton from 'components/shared/BasketButton';
import FormQuantity from 'components/shared/FormQuantity';
// import icons

// import vars
import { miniText, miniTitle } from 'res/palette.js';
import { radius, colors, strings } from 'res/vars';

export default ProductsItem = ({
  screenName,
  widthItem,
  name,
  price,
  productImg,
  idProduct,
  // product
}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [notImage, setNotImage] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [showForm, setShowForm] = useState(false);


  const sliceName = () => {
    return name.length < 38 ? name : `${name.slice(0, 38)} ...`;
  };

  // при клике на карточку передаем внутрь карточки товара: имя, цену, фото, id (все остальное подгружаем в карточке)
  const openCardProduct = () => {
    const objProduct = { name, price, productImg, notImage, idProduct };

    // определяем на какой экран попасть в зависимости от того откуда пришли
    switch (screenName) {
      case strings.nameNestedCatalog.products:
        navigation.navigate(strings.nameNestedCatalog.cardProduct, objProduct);
        break;
      case strings.nameNestedHome.homeBannersProducts:
        navigation.navigate(strings.nameNestedHome.homeBannersCardProduct, objProduct);
        break;
      case strings.nameNestedHome.homeHolidaysProducts:
        navigation.navigate(strings.nameNestedHome.homeHolidaysCardProduct, objProduct);
        break;
      case strings.nameNestedHome.homeSaleProducts:
        navigation.navigate(strings.nameNestedHome.homeSaleCardProduct, objProduct);
        break;
      default:
        break;
    };
  };

  const addToBasket = () => {
    setQuantity(quantity + 1);
    setShowForm(true);
    // dispatch(addToBasket(idProduct))
  };

  const calculate = () => {
    if (quantity === 0) {
      setShowForm(false);
    };
    console.log("🚀 ~ calculate ~ quantity", quantity)
    console.log("🚀 ~ calculate ~ idProduct", idProduct)
  };

  const onChange = (value) => {
    setQuantity(value);
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={openCardProduct}
    >
      <View style={styles.container}>
        <Card>
          <View style={{
            width: widthItem,
            height: widthItem * 1.6,
          }}>
            <View style={styles.header}>
              <VendorCode vendorCode={''} />
              <FavoriteButton />
            </View>

            <PtoductItemImg
              notImage={notImage}
              widthItem={widthItem}
              productImg={productImg}
              setNotImage={setNotImage}
            />

            <View style={styles.content}>
              <View>
                <View style={styles.nameBox}>
                  <Text style={styles.name}>{sliceName()}</Text>
                </View>
                <View>
                  <Text style={styles.price}>{price} ₽</Text>
                </View>
              </View>

              {
                !showForm && !quantity ? (
                  <BasketButton onPress={addToBasket} />
                ) : (
                  <FormQuantity
                    quantity={quantity}
                    onChange={onChange}
                    submit={calculate}
                    setShowForm={setShowForm}
                  />
                )
              }
            </View>
          </View>
        </Card>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: radius.input,
    margin: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 5,
    paddingRight: 5,
    // borderColor: 'tomato',
    // borderWidth: 1,
  },
  content: {
    padding: 5,
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    // borderColor: 'tomato',
    // borderWidth: 1,
  },
  nameBox: {
    maxHeight: 27,
    marginBottom: 4,
    // borderColor: 'tomato',
    // borderWidth: 1,
  },
  name: {
    ...miniText,
  },
  priceBox: {
    alignItems: 'flex-end'
  },
  price: {
    ...miniTitle,
  },
});

ProductsItem.propTypes = {
  widthItem: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  productImg: PropTypes.object,
  idProduct: PropTypes.string,
  // product: PropTypes.object,
};
