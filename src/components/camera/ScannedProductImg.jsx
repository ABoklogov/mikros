import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View,
  Image,
  Dimensions
} from 'react-native';
// import vars
import { baseUrlImg } from 'res/vars';

const linkNotImage = require('assets/images/no-photo.png');
const WIDTH = Dimensions.get('window').width;

export default ScannedProductImg = ({ productImg }) => {
  const [notImage, setNotImage] = useState(false);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const widthView = WIDTH - 55;

  const definesPathPicture = () => {
    if (productImg) {
      const linkImage = `${baseUrlImg}/${productImg}`;
      return { uri: linkImage };
    } else {
      setNotImage(true);
      return linkNotImage;
    };
  };

  // вычисляет размер картинки
  const calcSizeImage = () => {
    let photoWidth = widthView;
    let photoHeight = widthView;

    if (imageSize.width > photoWidth || imageSize.height > photoHeight) {
      if (imageSize.width > imageSize.height) {
        const ratio = imageSize.height / imageSize.width;
        photoHeight = photoWidth * ratio;
      } else if (imageSize.width < imageSize.height) {
        const ratio = imageSize.width / imageSize.height;
        photoWidth = photoHeight * ratio;
      };
    } else {
      photoWidth = imageSize.width;
      photoHeight = imageSize.height;
    };

    return {
      width: photoWidth,
      height: photoHeight
    };
  };

  const errorPicture = ({ nativeEvent: { error } }) => {
    console.log(error);
    setNotImage(true);
  };

  const getSizeImage = ({ nativeEvent: { source: { width, height } } }) => {
    setImageSize({ width, height });
  };

  return (
    <View style={{
      ...styles.container,
      width: widthView,
      height: widthView
    }}>
      {/* если при запросе на картинку, выдало ошибку, показываем другую картинку с not-image.jpg */}
      {
        !notImage ? (
          <Image
            style={calcSizeImage()}
            source={definesPathPicture()}
            onLoad={getSizeImage}
            onError={errorPicture}
          />
        ) : (
          <Image
            style={{ width: widthView, height: widthView }}
            source={linkNotImage}
          />
        )
      }
    </View >
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center'
  }
});

ScannedProductImg.propTypes = {
  productImg: PropTypes.string,
};
