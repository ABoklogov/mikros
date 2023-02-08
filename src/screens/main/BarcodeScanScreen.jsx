import { useState } from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import { useCamera } from 'react-native-camera-hooks';
// import icons
import FlashOnIcon from 'components/icons/flash/FlashOnIcon';
import FlashOffIcon from 'components/icons/flash/FlashOffIcon';
// import components
import ViewBarcode from 'components/camera/ViewBarcode'
import BackdropBottom from 'components/camera/BackdropBottom'
import BackdropTop from 'components/camera/BackdropTop'
// import vars
import { colors } from 'res/vars';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default BarcodeScanScreen = () => {
  const [{ cameraRef, autoFocus }] = useCamera(null);
  const [flash, setFlash] = useState(RNCamera.Constants.FlashMode.off);
  const [barcode, setBarcode] = useState(null);

  const barcodeRecognized = ({ data, type }) => {
    if (barcode) {
      return
    } else if (data) {
      setBarcode({ type, data });
      console.log("🚀 ~ штрих-код", { type, data });

      Alert.alert(
        'Штрих-код распознан',
        `номер: ${data}; типgit: ${type}`,
        [{
          text: "OK",
          onPress: () => setBarcode(null),
        }]
      );
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