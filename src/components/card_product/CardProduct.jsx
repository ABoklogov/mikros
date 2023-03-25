// import { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  useWindowDimensions
} from 'react-native';
import PropTypes from 'prop-types';
// import components
import ImageProduct from 'components/card_product/ImageProduct';
// import vars
import { fonts, colors, heightText } from 'res/vars';
import { text, title, sideText, miniText } from 'res/palette.js';

export default CardProduct = ({
  nameScreen,
  name,
  price,
  productImg,
  notImage
}) => {
  const window = useWindowDimensions();

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ ...styles.container, height: window.height, }}>
          <ImageProduct
            nameScreen={nameScreen}
            notImage={notImage}
            productImg={productImg}
          />

          <View style={styles.content}>
            <View style={styles.nameBox}>
              <Text style={styles.name}>{ name }</Text>
            </View>

            <View style={styles.priceBox}>
              <Text style={styles.price}>{ price } ₽</Text>
            </View>

            {/* <View style={styles.warehouseBox}>
              <Text style={styles.warehouseTitle}>Наличие на складах:</Text>
              <Text style={styles.warehouse}>Основной - достаточно</Text>
              <Text style={styles.warehouse}>Воронеж - достаточно</Text>
            </View> */}

            {/* <View style={styles.productDetailBox}>
              <Text style={styles.productDetailTitle}>Характеристика товара:</Text>
              <Text style={styles.productDetail}>Артикул: ап7ав4ы</Text>
              <Text style={styles.productDetail}>Цвет: ассорти</Text>
              <Text style={styles.productDetail}>Размер: 2м</Text>
              <Text style={styles.productDetail}>Пол: универсальный</Text>
              <Text style={styles.productDetail}>Возраст: универсальный</Text>
              <Text style={styles.productDetail}>Тип: металл</Text>
              <Text style={styles.productDetail}>Страна производитель: Россия</Text>
            </View> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    borderColor: 'tomato',
    borderWidth: 1,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
  },
  content: {
    marginHorizontal: 10,
  },
  nameBox: {
    marginBottom: 10,
  },
  name: {
    ...text,
    fontFamily: fonts.bold,
  },
  priceBox: {
    marginBottom: 10,
  },
  price: {
    ...title,
  },
  warehouseBox: {
    marginBottom: 20,
  },
  warehouseTitle: {
    ...miniText,
    fontSize: 13,
    color: colors.grey,
  },
  warehouse: {
    ...miniText,
    fontSize: 13,
  },
  productDetailTitle: {
    ...text,
    marginBottom: 5,
  },
  productDetail: {
    ...miniText,
    lineHeight: heightText.normal,
    fontSize: 13,
  }
});

CardProduct.propTypes = {
  notImage: PropTypes.bool,
  productImg: PropTypes.object,
  nameScreen: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
};