import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
import { fetchBarcode } from 'store/scaner/scanerOperation';
import { removeProduct } from 'store/scaner/scanerSlice';
// import icons
import FlashOnIcon from 'components/icons/flash/FlashOnIcon';
import FlashOffIcon from 'components/icons/flash/FlashOffIcon';
// import components
import ViewBarcode from 'components/camera/ViewBarcode';
import BackdropBottom from 'components/camera/BackdropBottom';
import BackdropTop from 'components/camera/BackdropTop';
import MainModal from 'components/shared/MainModal';
import ScannedProduct from 'components/camera/ScannedProduct';
// import vars
import { colors } from 'res/vars';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default BarcodeScanScreen = () => {
  const { scaner } = useSelector(state => state);
  const dispatch = useDispatch();
  const [{ cameraRef, autoFocus }] = useCamera(null);
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [barcode, setBarcode] = useState(null);

  const removeModal = () => {
    dispatch(removeProduct());
    setBarcode(null);
  };

  const barcodeRecognized = ({ data, type }) => {
    if (barcode) {
      return
    } else if (data) {
      setBarcode({ data });
      dispatch(fetchBarcode(data));
    };
  };

  const toggleFlash = () => {
    switch (flash) {
      case 0:
        setFlash(RNCamera.Constants.FlashMode.torch);
        break;
      case 2:
        setFlash(RNCamera.Constants.FlashMode.off);
        break;
      default:
        break;
    };
  };

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back} // тип камеры
        captureAudio={false} // не запрашивать разрешение на микрофон
        androidCameraPermissionOptions={{
          title: 'Разрешение на использование камеры',
          message: 'Нам нужно ваше разрешение на использование вашей камеры',
          buttonPositive: 'Да',
          buttonNegative: 'Отмена',
        }} // разрешение камеры
        flashMode={flash} // вспышка
        autoFocus={autoFocus} //автофокус
        onBarCodeRead={barcodeRecognized} // определяет штрих-код
      >
        <BackdropTop width={WIDTH} height={HEIGHT} />
        <ViewBarcode width={WIDTH} height={HEIGHT} />
        <BackdropBottom width={WIDTH} height={HEIGHT} />

        <MainModal
          modalVisible={scaner.product ? true : false}
          removeModal={removeModal}
        >
          {scaner.product && <ScannedProduct product={scaner.product} />}
        </MainModal>
      </RNCamera>

      <TouchableOpacity
        onPress={toggleFlash}
        style={styles.btnFlash}
      >
        {flash === RNCamera.Constants.FlashMode.off ? <FlashOffIcon /> : <FlashOnIcon />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    backgroundColor: 'black',
  },
  preview: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: HEIGHT,
    width: WIDTH,
  },
  btnFlash: {
    position: 'absolute',
    zIndex: 5,
    bottom: 70,
    right: '50%',
    transform: [
      { translateX: 35 },
      { translateY: 0 },
    ],
    backgroundColor: colors.backgroundGrey,
    borderRadius: 50,
    width: 70,
    height: 70,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});