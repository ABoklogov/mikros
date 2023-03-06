import { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { baseUrlImg, images } from 'res/vars';

const linkNotImage = require('assets/images/no-photo.png');

export default HolidayImage = ({ picture, id, width }) => {
  const [notImage, setNotImage] = useState(false);

  const fetchImage = () => {
    if (!notImage) {
      // с перва пробуем загрузить картинку с сервера
      return { uri: `${baseUrlImg}/upload/${picture.SUBDIR}/${picture.FILE_NAME}` };
    } else {
      let source = null;
      // если не загрузилась картинка ищем ее в локальной папке
      for (let key in images.holidays) {
        if (key === id) {
          source = images.holidays[key];
        }
      };
      // если и в локальной папке нет картинки, то показываем дефолтную
      return source ? source : linkNotImage;
    }
  };

  const errorPicture = (error) => {
    // console.log(error);
    setNotImage(true);
  };

  // вычисляет размер картинки
  const calcSizeImage = () => {
    let photoWidth = width - 40;
    let photoHeight = width - 40;

    if (picture) {
      if (picture.WIDTH > photoWidth || picture.HEIGHT > photoHeight) {
        if (picture.WIDTH > picture.HEIGHT) {
          const ratio = picture.HEIGHT / picture.WIDTH;
          photoHeight = photoWidth * ratio;
        } else if (picture.WIDTH < picture.HEIGHT) {
          const ratio = picture.WIDTH / picture.HEIGHT;
          photoWidth = photoHeight * ratio;
        };
      } else {
        photoWidth = picture.WIDTH;
        photoHeight = picture.HEIGHT;
      };
    };
    return {
      width: photoWidth,
      height: photoHeight,
    };
  };

  return (
    <View style={{ ...styles.container, width: width - 30, height: width - 30 }}>
      <Image
        style={calcSizeImage()}
        source={fetchImage()}
        onError={({ nativeEvent: { error } }) => errorPicture(error)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

HolidayImage.propTypes = {
  picture: PropTypes.object,
  id: PropTypes.string,
  width: PropTypes.number,
};
