import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  Image
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
import MainButton from 'components/shared/MainButton';
import ScannedProduct from 'components/camera/ScannedProduct';
// import vars
import { colors, strings, mHorizontal } from 'res/vars';
import { title } from 'res/palette';

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

  const barcodeRecognized = (data) => {
    // console.log("🚀 ~ barcodeRecognized ~ data", data)
    // console.log("🚀 ~ barcodeRecognized ~ { data, type }", { data, type })
    if (barcode) {
      return
    } else if (data.data) {
      setBarcode(data.data);
      dispatch(fetchBarcode(data.data));
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
      // detectedImageInEvent={true}
      // barCodeTypes={[RNCamera.Constants.BarCodeType.ean13]}
      >
        <View style={styles.preview}>
          <BackdropTop width={WIDTH} height={HEIGHT} />
          {/* рамка штриш-кода или текст "ничего не найдено" */}
          {
            !scaner.error ? (
              <ViewBarcode width={WIDTH} height={HEIGHT} />
            ) : (
              <Text style={styles.notProductText}>{strings.textNotProductScan}</Text>
            )
          }
          <BackdropBottom width={WIDTH} height={HEIGHT} />
        </View>

        <MainModal
          modalVisible={scaner.product ? true : false}
          removeModal={removeModal}
        >
          {scaner.product && <ScannedProduct product={scaner.product} />}
        </MainModal>
      </RNCamera>

      {/* кнопка вспышки или кновка "отсканировать еще" */}
      {
        !scaner.error ? (
          <TouchableOpacity
            onPress={toggleFlash}
            style={styles.btnFlash}
          >
            {flash === RNCamera.Constants.FlashMode.off ? <FlashOffIcon /> : <FlashOnIcon />}
          </TouchableOpacity>
        ) : (
          <View style={styles.btnScan}>
            <MainButton
              text={strings.textBtnReturnScan}
              onPress={removeModal}
            />
          </View>
        )
      }
    </View >
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
  btnScan: {
    position: 'absolute',
    zIndex: 5,
    bottom: 100,
    marginHorizontal: mHorizontal.baseBlock,
    width: WIDTH - 30,
  },
  notProductText: {
    ...title,
    color: colors.white,
  }
});