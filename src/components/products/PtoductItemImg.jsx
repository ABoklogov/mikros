import { StyleSheet, View, Image } from 'react-native';
import PropTypes from 'prop-types';
// import vars
import { baseUrlImg } from 'res/vars';

const linkNotImage = require('assets/images/no-photo.png');

export default PtoductItemImg = ({
  notImage,
  widthItem,
  productImg,
  setNotImage,
}) => {

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

  // вычисляет размер картинки
  const calcSizeImage = () => {
    let photoWidth = widthItem;
    let photoHeight = widthItem;

    if (productImg) {
      if (productImg.WIDTH > photoWidth || productImg.HEIGHT > photoHeight) {
        if (productImg.WIDTH > productImg.HEIGHT) {
          const ratio = productImg.HEIGHT / productImg.WIDTH;
          photoHeight = photoWidth * ratio;
        } else if (productImg.WIDTH < productImg.HEIGHT) {
          const ratio = productImg.WIDTH / productImg.HEIGHT;
          photoWidth = photoHeight * ratio;
        };
      } else {
        photoWidth = productImg.WIDTH;
        photoHeight = productImg.HEIGHT;
      };
    };
    return {
      width: photoWidth,
      height: photoHeight
    };
  };

  return (
    <View style={{ ...styles.productImgBox, width: widthItem, height: widthItem }}>
      {/* если при запросе на картинку, выдало ошибку, показываем другую картинку с not-image.jpg */}
      {!notImage ? (
        <Image
          style={calcSizeImage()}
          source={definesPathPicture()}
          onError={({ nativeEvent: { error } }) => errorPicture(error)}
        />
      ) : (
        <Image
          style={{ width: widthItem, height: widthItem }}
          source={linkNotImage}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productImgBox: {
    alignItems: 'center',
    justifyContent: 'center',
    // borderColor: 'tomato',
    // borderWidth: 1,
  },
});

PtoductItemImg.propTypes = {
  notImage: PropTypes.bool,
  widthItem: PropTypes.number,
  productImg: PropTypes.object,
  setNotImage: PropTypes.func,
};
