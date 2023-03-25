import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  StyleSheet,
  Image,
  View,
  useWindowDimensions
} from 'react-native';
import PropTypes from 'prop-types';
// import slices
import * as catalogSlice from 'store/catalog/catalogSlice';
import * as saleSlice from 'store/sale/saleSlice';
// import vars
import { baseUrlImg, strings } from 'res/vars';

export default ImageProduct = ({
  notImage: parentNotImage,
  productImg,
  nameScreen
}) => {
  const dispatch = useDispatch();
  const window = useWindowDimensions();
  const [sizeImage, setSizeImage] = useState(null);
  const [notImage, setNotImage] = useState(false);
  const linkNotImage = require('assets/images/no-photo.png');

  useEffect(() => {
    setNotImage(parentNotImage); // записываем в локальный стейт данные о картинке (загрузилась или нет)
  }, []);

  // при изменении флага фото, отправляем url в стейт (взависимости от экрана)
  useEffect(() => {
    if (notImage) {
      switch (nameScreen) {
        case strings.nameNestedCatalog.cardProduct:
          dispatch(catalogSlice.setImageProduct(''));
          break;
        case strings.nameNestedHome.homeSaleCardProduct:
          dispatch(saleSlice.setImageProduct(''));
          break;
        default:
          break;
      };
    } else {
      if (productImg) {
        const linkImage = `${baseUrlImg}/upload/${productImg.SUBDIR}/${productImg.FILE_NAME}`;

        // определяем размер картинки
        setSizeImage({ width: productImg.WIDTH, height: productImg.HEIGHT });

        switch (nameScreen) {
          case strings.nameNestedCatalog.cardProduct:
            dispatch(catalogSlice.setImageProduct(linkImage));
            break;
          case strings.nameNestedHome.homeSaleCardProduct:
            dispatch(saleSlice.setImageProduct(linkImage));
            break;
          default:
            break;
        };
      };
    };
  }, [notImage]);

  // вычисляет размер картинки
  const calcSizeImage = () => {
    let photoWidth = window.width;
    let photoHeight = window.width;

    if (sizeImage) {
      if (sizeImage.width > photoWidth || sizeImage.height > photoHeight) {
        if (sizeImage.width > sizeImage.height) {
          const ratio = sizeImage.height / sizeImage.width;
          photoHeight = photoWidth * ratio;
        } else if (sizeImage.width < sizeImage.height) {
          const ratio = sizeImage.width / sizeImage.height;
          photoWidth = photoHeight * ratio;
        };
      } else {
        photoWidth = sizeImage.width;
        photoHeight = sizeImage.height;
      };
    };
    return {
      width: photoWidth,
      height: photoHeight
    };
  };

  const definesPathPicture = () => {
    if (productImg) {
      const linkImage = `${baseUrlImg}/upload/${productImg.SUBDIR}/${productImg.FILE_NAME}`;
      return { uri: linkImage };
    } else {
      setNotImage(true);
      return linkNotImage;
    };
  };

  const errorPicture = (error) => {
    console.log(error);
    setNotImage(true);
  };

  return (
    <View style={{
      ...styles.container,
      width: window.width,
      height: window.width,
    }}>
      {!notImage ? (
        <Image
          style={{ ...calcSizeImage() }}
          source={definesPathPicture()}
          onError={({ nativeEvent: { error } }) => errorPicture(error)}
        />
      ) : (
        <Image
          source={linkNotImage}
          style={{ width: window.width, height: window.width }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
});

ImageProduct.propTypes = {
  notImage: PropTypes.bool,
  productImg: PropTypes.object,
  nameScreen: PropTypes.string,
};