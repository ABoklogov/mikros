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
import BarcodeMask, { LayoutChangeEvent } from 'react-native-barcode-mask';
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
  const [scanText, setScanText] = useState(false);
  const [barcode, setBarcode] = useState(null);
  const [totalCode, setTotalCode] = useState(null);

  // console.log("🚀 ~ barcode", barcode)
  console.log("🚀 ~ totalCode", totalCode)
  // console.log("🚀 ~ scanText", scanText)

  const widthView = WIDTH / 1.12;
  const heightView = HEIGHT / 3.8;
  // console.log("🚀 ~ WIDTH", WIDTH)
  // console.log("🚀 ~ widthView", widthView)

  const removeModal = () => {
    dispatch(removeProduct());
    setBarcode(null);
    setScanText(false);
    setTotalCode(null);
  };

  const barcodeRecognized = (data) => {
    if (barcode) {
      return
    } else if (data) {
      if (data.bounds.origin.length > 2) {
        setScanText(true);
        setBarcode(data);
      } else {
        setBarcode(data);
        setTotalCode(data.data);
        dispatch(fetchBarcode(totalCode));
      };
    };
  };

  const textRecognized = (data) => {
    console.log("🚀 сканирование текста")
    if (totalCode) {
      return
    } else if (data.textBlocks.length > 0) {
      data.textBlocks.forEach(el => {
        const notSpace = el.value.split(' ').join('');
        const re = /^[0-9]+$/;

        if (re.test(notSpace) && notSpace.length === 5) {
          // console.log('notSpace', notSpace);
          setTotalCode(`${barcode.data}${notSpace}`);
          dispatch(fetchBarcode(totalCode));
        };
      });
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

  const onLayoutMeasuredHandler = (e) => {
    alert(JSON.stringify(e));
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
        onTextRecognized={!scanText ? null : textRecognized} // определяет текст
        detectedImageInEvent={true} // получаем изображение
      // rectOfInterest={{ x: 0.25, y: 0.5, width: 300, height: 100 }}
      // cameraViewDimensions={{ width: WIDTH, height: HEIGHT }}
      // barCodeTypes={[RNCamera.Constants.BarCodeType.interleaved2of5]}
      >
        {
          !scaner.error ? (
            <BarcodeMask
              width={300}
              height={100}
              onLayoutMeasured={onLayoutMeasuredHandler}
            />

          ) : (
            <Text style={styles.notProductText}>{strings.textNotProductScan}</Text>
          )
        }


        {/* <View style={styles.preview}>
          <BackdropTop width={WIDTH} height={HEIGHT} /> */}

        {/* <Image
            style={styles.img}
            source={{ uri: `data:image/jpeg;base64,${barcode?.image}` }} /> */}

        {/* рамка штриш-кода или текст "ничего не найдено" */}
        {/* {
            !scaner.error ? (
              <ViewBarcode
                width={widthView}
                height={heightView}
                barcode={totalCode ? true : false}
              />
            ) : (
              <Text style={styles.notProductText}>{strings.textNotProductScan}</Text>
            )
          }
          <BackdropBottom width={WIDTH} height={HEIGHT} />
        </View> */}

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
  img: {
    position: 'absolute',
    zIndex: 5,
    top: 0,
    left: 100,
    width: 200,
    height: 200
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